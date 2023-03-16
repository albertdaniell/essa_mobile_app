import { v4 as uuidv4 } from "uuid";
export const FORM_INPUTS = {
  weather_form: [
    {
      id: uuidv4(),
      colums: 3,
      children: [
        {
          id: uuidv4(),
          label: "County",
          input_type: "text",
          name: "county",
          type: "select",
          value: "",
          data: ["test"],
          isFromBackendData: true,
          isRequired: true,
        },

        {
          id: uuidv4(),
          label: "Sub-County",
          input_type: "text",
          name: "subcounty",
          type: "select",
          value: "",
          data: ["test"],
          isFromBackendData: true,
          isRequired: true,
        },

        {
          id: uuidv4(),
          label: "Ward",
          input_type: "text",
          name: "ward",
          type: "select",
          value: "",
          data: ["test"],
          isFromBackendData: true,
          isRequired: true,
        },
      ],
    },
  ],
};
