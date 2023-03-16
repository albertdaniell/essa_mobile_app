import React from "react";

import AppReactSelect from "../AppReactSelect/AppReactSelect";
import AppSelectInput from "../AppSelectInput/AppSelectInput";

function FormInputRenderer({ type, metaData, handleChange, onBlurValidation }) {
  switch (type) {
     case "select":
      return (
        <>
          <AppSelectInput
            valId={metaData.valId !== undefined && metaData.valId}
            className={metaData.className}
            isRequired={metaData.isRequired}
            value={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
            valueKey={metaData.valueKey}
            valueName={metaData.valueName}
            // handleChange={metaData.handleSelectChange}
            handleChange={handleChange}
          ></AppSelectInput>
        </>
      );
    case "r-select":
      return (
        <>
          <AppReactSelect
            isEdit={metaData.isEdit}
            defaultValues2={metaData.defaultValues2}
            isMulti={metaData.isMulti}
            combineNameID={metaData.combineNameID}
            optionValue={metaData.optionValue}
            valId={metaData.valId !== undefined && metaData.valId}
            className={metaData.className}
            isRequired={metaData.isRequired}
            value={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
            valueKey={metaData.valueKey}
            valueName={metaData.valueName}
            handleChange={handleChange}
          ></AppReactSelect>
        </>
      );

    default:
      return <>No input to return</>;
  }
}

export default FormInputRenderer;
