import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosGetService } from "../../../constants/AxiosServices";

export const getValueChains = createAsyncThunk(
  "gapsData/getValueChains",
  async (data) => {
    let url = `http://137.184.22.30/api/farmer_timps/valuechain/?vc_type=${data}`;

    const res = await AxiosGetService(url);
    return res.data;
  }
);

const cropsVcState = {
  loading: null,
  data: [],
  error: "",
};

const NRMVCState = {
  loading: null,
  data: [],
  error: "",
};

const livestockVCState = {
  loading: null,
  data: [],
  error: "",
};

const gapsDataSlice = createSlice({
  name: "gapsData",
  initialState: {
    test: null,
    livestockVCState,
    NRMVCState,
    cropsVcState,
  },
  reducers: {
    toggleLoginForm: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(getValueChains.pending, (state, action) => {
      const { meta } = action;
      const { arg } = meta;
      if (arg === 1) {
        state.cropsVcState.loading = true;
      }

      if (arg === 2) {
        state.livestockVCState.loading = true;
      }

      if (arg === 3) {
        state.NRMVCState.loading = true;
      }
    });

    builder.addCase(getValueChains.fulfilled, (state, action) => {
      const { meta, payload } = action;
      const { arg } = meta;
      if (arg === 1) {
        state.cropsVcState.data = payload;
        state.cropsVcState.loading = false;
      }

      if (arg === 2) {
        state.livestockVCState.data = payload;
        state.livestockVCState.loading = false;
      }

      if (arg === 3) {
        state.NRMVCState.data = payload;
        state.NRMVCState.loading = false;
      }
    });

    builder.addCase(getValueChains.rejected, (state, action) => {
      const { meta } = action;
      const { arg } = meta;
      if (arg === 1) {
        state.cropsVcState.loading = false;
      }

      if (arg === 2) {
        state.livestockVCState.loading = false;
      }

      if (arg === 3) {
        state.NRMVCState.loading = false;
      }
    });
  },
});

export const { toggleLoginForm } = gapsDataSlice.actions;

export default gapsDataSlice.reducer;
