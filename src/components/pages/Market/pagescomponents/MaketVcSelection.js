import React from "react";
import { useDispatch } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";

function MaketVcSelection({
  data,
  handleChange = {},
  markets,
  value_chains,
  counties,
  handleCountyChange,
  handleChangeMarket,
}) {
  const dispatch = useDispatch();
  let handleSelectionChange = (e, meta) => {
    // console.log(e.target.value)
    let { value, name } = e.target;
    value = JSON.parse(value);
    const { DataKey, RowKey, ChildKey, Name } = meta;

    setTimeout(() => {
      dispatch(
        handleChangeMarket({
          stateData: Name,
          object: value,
          KeyName: name,
          RowKey: RowKey,
          ChildKey,
        })
      );
    }, 100);
  };

  let handleSelectionChangeCounty = (e, meta) => {
    // console.log(e.target.value)
    let { value, name } = e.target;
    value = JSON.parse(value);
    const { DataKey, RowKey, ChildKey, Name } = meta;

    setTimeout(() => {
      dispatch(
        handleCountyChange({
          stateData: Name,
          object: value,
          KeyName: name,
          RowKey: RowKey,
          ChildKey,
        })
      );
    }, 100);
  };

  return (
    <div>
      {/* {JSON.stringify(handleTextInputFn)} */}
      {Array.isArray(data) &&
        data.map((field, form_index) => {
          return (
            <AppRow className="gx-5" key={field.id}>
              {field.children.map((field_child, child_index) => {
                if (field_child.hidden !== true) {
                  return (
                    <AppCol size={12 / field.colums} key={field_child.id}>
                      {/* {JSON.stringify(field_child)} */}
                      <FormInputRenderer
                        handleChange={
                          field_child.name === "county"
                            ? handleSelectionChangeCounty
                            : handleSelectionChange
                        }
                        type={field_child.type}
                        metaData={{
                          meta: {
                            RowKey: form_index,
                            ChildKey: child_index,
                            Name: field_child.name,
                          },
                          label: field_child.label,
                          value: field_child.value,
                          name: field_child.name,
                          input_type: field_child.input_type,
                          inputId: "settings_input_fields",
                          data:
                            field_child.name === "market"
                              ? markets
                              : field_child.name === "value_chain"
                              ? value_chains
                              : field_child.name === "county"
                              ? counties
                              : field_child.data,
                          type: field_child.input_type,
                          isRequired: field_child.isRequired,
                          maxlength: field_child.maxlength,
                          disabled: field_child.disabled,
                          min: field_child.min,
                          errorMessage: field_child.errorMessage,
                          placeholder: field_child.placeholder,
                          valueName: "name",
                        }}
                      ></FormInputRenderer>
                    </AppCol>

                    // </div>
                  );
                }
              })}
            </AppRow>
          );
        })}
    </div>
  );
}

export default MaketVcSelection;
