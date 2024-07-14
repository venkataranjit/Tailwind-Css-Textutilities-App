import React, { useState } from "react";

const btnClass =
  "ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mt-6 float-end";

const TextForm = (props) => {
  const [textArea, settextArea] = useState("");
  const upperCaseHandler = () => {
    settextArea(textArea.toUpperCase());
    props.showAlert("Converted into Upper Case", "Success");
  };
  const LowerCaseHandler = () => {
    settextArea(textArea.toLowerCase());
    props.showAlert("Converted into Lower Case", "Success");
  };
  const clearHandler = () => {
    settextArea("");
    props.showAlert("Cleared", "Success");
  };
  const copyHandler = () => {
    // settextArea(textArea);                                       //  in react
    // let copyText = navigator.clipboard.writeText(textArea);      //  in react
    let copy = document.getElementsByTagName("textarea")[0]; //  in javascript
    copy.select(); //  in javascript
    navigator.clipboard.writeText(copy.value); //  in javascript
    props.showAlert("Copied into Memory", "Success");
  };
 
  const removeExtraSpaceHandler = () =>{
    settextArea(textArea.replace(/\s+/g, " "));
    props.showAlert("Extra Spaces Removed", "Success");
  }

  return (
    <>
      <div className="max-w-7xl mx-auto mt-4">
        <div className="relative">
          <textarea
            id="id-b03"
            type="text"
            name="id-b03"
            rows="3"
            value={textArea}
            placeholder="Write your message"
            onChange={(e) => settextArea(e.target.value)}
            className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-indigo-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          ></textarea>
          <label
            htmlFor="id-b03"
            className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u0000a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            {props.message}
          </label>
          <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
            <span>
              No. of Characters : <b>{textArea.length}</b>{" "}
            </span>{" "}
            <span>
              No. of Words : <b>{textArea.split(" ").length - 1}</b>{" "}
            </span>
            <span>
              Minutes to Read :{" "}
              <b>{0.008 * textArea.split(" ").length - 0.008}</b>{" "}
            </span>
          </small>
          <button type="button" className={btnClass} onClick={clearHandler}>
            Clear
          </button>
          <button type="button" className={btnClass} onClick={copyHandler}>
            Copy
          </button>
          <button type="button" className={btnClass} onClick={removeExtraSpaceHandler}>
            Remove Extra Spaces
          </button>
          <button type="button" className={btnClass} onClick={upperCaseHandler}>
            To Upper Case
          </button>
          <button type="button" className={btnClass} onClick={LowerCaseHandler}>
            To Lower Case
          </button>
         
        </div>
        <div className="mt-[80px]">
          <h3>{textArea.length>0?"Preview":""}</h3>
          <div className="container-fluid p-4 border border-l-8 border-indigo-500 rounded-sm bg-gray-100 min-h-[100px]">
            <p className="text-slate-400">{textArea.length>0?textArea:"Input Text into Text Area to Preview Here"}</p>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default TextForm;
