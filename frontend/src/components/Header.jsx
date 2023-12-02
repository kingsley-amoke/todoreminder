import React from "react";
import { CgProfile } from "react-icons/cg";
import {AiFillPlusCircle} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Header = ({ username, addTask, setAddTask }) => {

  return (
    <div className="flex justify-between items-center py-6 px-5 shadow-md bg-gray-100">
      <div>
        <p className="font-bold font-serif text-lg text-green-700 ">
          TASK REMINDER
        </p>
      </div>
      <div className="flex items-center justify-between gap-5 ">
        <div className="cursor-pointer" onClick={() => setAddTask(true)}>
          {!addTask && <AiFillPlusCircle size="30px"/>}
        </div>
        <Link to={username}>
          <CgProfile size="30px" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
