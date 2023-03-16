import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosGetService } from "../../../constants/AxiosServices";




const appDataSlice = createSlice({
  name: "appData",
  initialState: {
    test: null,
  },
  reducers: {
    toggleLoginForm: (state, action) => {},
  },

  
  extraReducers: (builder) => {
    // builder.addCase(getUserTokenOffline.fulfilled, (state, action) => {
    // });
  },
});

export const { toggleLoginForm } = appDataSlice.actions;

export default appDataSlice.reducer;
