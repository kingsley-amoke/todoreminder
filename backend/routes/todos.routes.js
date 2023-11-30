const { Router } = require("express");

const { Items } = require("../src/models/items.model");

const router = Router();

//get all items

router.get("", async (req, res) => {
  const allItems = await Items.find({});

  res.send(allItems);
});

//get specific item

router.get("/:item", async (req, res) => {
  let { item } = req.params;

  item = item.toLowerCase();

  const yourItem = await Items.findOne({ item });
  res.send(yourItem);
});

//Add items

router.post("", async (req, res) => {
  let { item } = req.body;
  item = item.toLowerCase();

  await Items.insertMany({ item: item });

  res.send("Item added successfully");
});

//delete items

router.delete("/:item", async (req, res) => {
  let { item } = req.params;
  item = item.toLowerCase();

  await Items.deleteOne({ item: item });

  res.send("Item deleted successfully");
});

//update items

router.put("/:item", async (req, res) => {
  let { item } = req.params;

  let newItem = req.body.item;

  newItem = newItem.toLowerCase();

  await Items.updateOne(
    { item: item },
    {
      $set: {
        item: newItem,
      },
    }
  );

  res.send(`${item} Item updated to ${newItem} successfully`);
});

module.exports = router;
