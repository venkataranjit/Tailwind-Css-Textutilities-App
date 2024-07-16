import React, { useState } from "react";

const NavBar = (props) => {
  return (
    <>
    <div className="max-w-7xl mx-auto">
      <div className="h4 bg-sky-300 p-3 text-center rounded-sm">Text Utilities App</div>
    <div className="h-10 p-3 text-right mb-3">
      <label className="inline-flex items-center cursor-pointer">
        <span className="ms-3 mr-2 text-sm font-medium text-gray-500 hover:text-gray-900">
          Enable {props.mode === "light" ? "Grey" : "Normal"} Mode
        </span>
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={props.toggleMode}
        />
        <div className="relative w-11 h-6 bg-sky-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-sky-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-sky-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-sky-600 peer-checked:bg-sky-600"></div>
      </label>
      </div>
      </div>
    </>
  );
};

export default NavBar;