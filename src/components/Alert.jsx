import React from "react";

const Alert = (props) => {
  return (
    <>
      {props.alert && (
        <div class="container mx-auto space-y-5">
          <div class="flex justify-between text-green-700 shadow-inner rounded p-2 bg-green-200">
            <p class="self-center w-[100%] text-center">
              <strong>{props.alert.type} : </strong>
              {props.alert.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
