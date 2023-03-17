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

export const getValueChainsDetail = createAsyncThunk(
  "gapsData/getValueChainsDetail",
  async (data) => {
    let url = `http://137.184.22.30/api/farmer_timps/valuechain/${data}`;

    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const getContentFromVC = createAsyncThunk(
  "gapsData/getContentFromVC",
  async (data) => {
    let url = `http://137.184.22.30/api/farmer_timps/content/?vcid=${data}`;

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

const contentsFromVC = {
  loading: null,
  data: [],
  error: "",
};

const valueChainDetail = {
  loading: null,
  data: {},
  error: "",
};
const gapsDataSlice = createSlice({
  name: "gapsData",
  initialState: {
    test: null,
    livestockVCState,
    NRMVCState,
    cropsVcState,
    contentsFromVC,
    valueChainDetail,
  },
  reducers: {
    toggleLoginForm: (state, action) => {},
    resetValueChainData: (state, action) => {
        state.contentsFromVC = contentsFromVC
        state.valueChainDetail = valueChainDetail
    },

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

    builder.addCase(getContentFromVC.pending, (state, action) => {
      state.contentsFromVC.loading = true;

    });

    builder.addCase(getContentFromVC.fulfilled, (state, action) => {
      state.contentsFromVC.data = action.payload;
      state.contentsFromVC.loading = false;
    });
    builder.addCase(getContentFromVC.rejected, (state, action) => {
      state.contentsFromVC.error = "something went wrong";
      state.contentsFromVC.loading = true;
    });

    builder.addCase(getValueChainsDetail.pending, (state, action) => {
      state.valueChainDetail.loading = true;


    });

    builder.addCase(getValueChainsDetail.fulfilled, (state, action) => {
      state.valueChainDetail.data = action.payload;
      state.valueChainDetail.loading = false;
    });
    builder.addCase(getValueChainsDetail.rejected, (state, action) => {
      state.valueChainDetail.error = "something went wrong";
      state.valueChainDetail.loading = true;
    });
  },
});

export const { toggleLoginForm,resetValueChainData } = gapsDataSlice.actions;

export default gapsDataSlice.reducer;
