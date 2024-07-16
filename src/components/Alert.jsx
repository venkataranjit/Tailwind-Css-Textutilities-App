import React from "react";

const Alert = (props) => {
  return (
    <>
      <div className="h-10">
        {props.alert && (
          <div className="container mx-auto space-y-5">
            <div
              className={`flex justify-between text-${
                props.alert.type === "Failed" ? "red" : "green"
              }-700 shadow-inner rounded p-2 bg-${
                props.alert.type === "Failed" ? "red" : "green"
              }-200`}
            >
              <p className="self-center w-[100%] text-center">
                <strong>{props.alert.type} : </strong>
                {props.alert.message}
              </p>
            </div>
            <div className="bg-red-200 bg-green-200 text-red-700 text-green-700" style={{display:'none'}}></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;