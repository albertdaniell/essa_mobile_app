import React from "react";
import AppRow from "../AppRow/AppRow";

function AppSelectInput({
  value,
  data,
  label,
  valueName,
  handleChange,
  inputId,
  meta,
  className,
  isRequired,
  valId = undefined,
}) {
  return (
    <AppRow className="input_div" id={inputId}>
      <div className="label_div">
        {label !== undefined && (
          <>
            <span className="label">
              {label} {isRequired && "*"}
            </span>
          </>
        )}
      </div>
      {/* {inputId} */}
      <select
        // defaultValue="default"
        // value={""}
        className={`form-select ${className}`}
        onChange={(e) => handleChange(e, meta)}
        // onChange={(e)=>console.log(e.target.value)}
      >
        <option value="default" selected disabled defaultValue="default">
          Select an option
        </option>

        {data.length !== 0 && (
          <>
            {data
              // .sort((a, b) => {
              //   if (a[valueName] < b[valueName]) {
              //     return -1;
              //   }
              //   if (a[valueName] > b[valueName]) {
              //     return 1;
              //   }
              //   return 0;
              // })
              .map((val, index) => {
                return (
                  <option
                    // selected={parseInt(value) === parseInt(val["id"]) && true}
                    key={value.id}
                    value={JSON.stringify(val)}
                  >
                    {valueName === undefined ? val : val[valueName]}
                  </option>
                );
              })}
          </>
        )}
      </select>
    </AppRow>
  );
}

export default AppSelectInput;
