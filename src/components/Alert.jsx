import React from "react";

const Alert = (props) => {
  return (
    <>
      <div className="h-10">
        {props.alert && (
          <div class="container mx-auto space-y-5">
            <div
              class={`flex justify-between text-${
                props.alert.type === "Failed" ? "red" : "green"
              }-700 shadow-inner rounded p-2 bg-${
                props.alert.type === "Failed" ? "red" : "green"
              }-200`}
            >
              <p class="self-center w-[100%] text-center">
                <strong>{props.alert.type} : </strong>
                {props.alert.message}
              </p>
            </div>
          </div>
        )}
        {/* <div style={{ display: "none" }}>
          <div className="text-red-700">
            <div className="bg-green-200">
              <p>hai</p>
            </div>
          </div>
          <div className="text-green-700">
            <div className="bg-red-200">
              <p>hai</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Alert;
