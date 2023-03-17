import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosGetService } from "../../../constants/AxiosServices";

let valueName = "name";

export const getmarketAdvisory = createAsyncThunk(
  "marketData/getmarketAdvisory",
  async ({ data }) => {
    let {mid,vid} = data
    let url = `https://kaop.kamas.co.ke/imwa-prices-api.php?mid=${mid}&vid=${vid}`;

    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const getMarketsInCounty = createAsyncThunk(
  "marketData/getMarketsInCounty",
  async (data) => {
    let url = `https://kaop.kamas.co.ke/imwa-markets-api.php?cid=${data}`;

    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const getValueChainsMarket = createAsyncThunk(
  "marketData/getValueChainsMarket",
  async (data) => {
    let url = `http://kukuafya.co.ke/api/value_chain?lang=1`;

    const res = await AxiosGetService(url);
    return res.data;
  }
);

let marketAdvioryState = {
  loading: null,
  error: "",
  data: {},
};

let valueChainsState = {
  loading: null,
  error: "",
  data: "",
};

let marketsData = {
  loading: null,
  error: "",
  data: "",
};

let valueChainsData = {
  loading: null,
  error: "",
  data: "",
};

const marketDataSlice = createSlice({
  name: "marketData",
  initialState: {
    test: null,
    marketSelected: {},
    submarketSelected: {},
    valueChainSelected: {},
    marketsData,
    marketAdvioryState,
    valueChainsState,
  },
  reducers: {
    toggleLoginForm: (state, action) => {},
    handleSelectionMarket: (state, action) => {
      if (action !== undefined) {
        let { stateData, object } = action.payload;
        if (stateData === "market") {
          state.marketSelected = object;
        //   state.valueChainSelected = {};
        }

        if (stateData === "value_chain") {
          state.valueChainSelected = object;
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getmarketAdvisory.pending, (state, action) => {
      state.marketAdvioryState.loading = true;
      state.marketAdvioryState.data = [];
    });

    builder.addCase(getmarketAdvisory.fulfilled, (state, action) => {
      state.marketAdvioryState.loading = false;
      state.marketAdvioryState.error = "";

      if(action.payload === "[No Records]"){
        alert("No record for this market")
      }else{
      state.marketAdvioryState.data = action.payload[0];
      }
    });

    builder.addCase(getmarketAdvisory.rejected, (state, action) => {
      state.marketAdvioryState.loading = false;
      state.marketAdvioryState.error = "Something went wrong";
    });

    builder.addCase(getValueChainsMarket.pending, (state, action) => {
      state.valueChainsState.loading = true;
      state.valueChainsState.data = [];
    });

    builder.addCase(getValueChainsMarket.fulfilled, (state, action) => {
      state.valueChainsState.loading = false;
      state.valueChainsState.data = action.payload;
      state.marketAdvioryState.error = "";
    });

    builder.addCase(getValueChainsMarket.rejected, (state, action) => {
      state.valueChainsState.loading = false;
      state.valueChainsState.error = "Something went wrong";
    });

    builder.addCase(getMarketsInCounty.pending, (state, action) => {
      state.marketsData.loading = true;
      state.marketsData.data = [];
    });

    builder.addCase(getMarketsInCounty.fulfilled, (state, action) => {
      state.marketsData.loading = false;
      state.marketsData.data = action.payload;
      state.marketsData.error = "";
    });

    builder.addCase(getMarketsInCounty.rejected, (state, action) => {
      state.marketsData.loading = false;
      state.marketsData.error = "Something went wrong";
    });
  },
});

export const { handleSelectionMarket } = marketDataSlice.actions;

export default marketDataSlice.reducer;
