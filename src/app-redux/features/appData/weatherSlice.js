import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosGetService } from "../../../constants/AxiosServices";
import counties from "../../../constants/Subdivisions/counties.json";
import subcounties from "../../../constants/Subdivisions/constituencies.json";
import wards from "../../../constants/Subdivisions/wards.json";
let valueName = "name";

export const getWeatherAdvisory = createAsyncThunk(
  "weatherData/getWeatherAdvisory",
  async ({data}) => {
    let {lat,lon} = data
    let url = "";
    let key = "F1TapOsHr0SAqWmts8G1cNHJcqv4aL6I"
    let fields = "temperatureMin,temperatureMax,windSpeed,humidity,rainAccumulation,precipitationProbability,cloudCover,weatherCode&timesteps=1d&units=metric"

    url = `https://api.tomorrow.io/v4/timelines?location=${lat},${lon}&fields=${fields}&apikey=${key}`
    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const get7dayAdvisory = createAsyncThunk(
    "weatherData/get7dayAdvisory",
    async ({data}) => {
      let {lat,lon} = data
      let url = `http://kukuafya.co.ke/api/weather?lat=${lat}&lon=${lon}`
  
      const res = await AxiosGetService(url);
      return res.data;
    }
  );

let weatherAdvioryState = {
  loading: null,
  error: "",
  data: [],
};

let dayWeatherAdvioryS7Daytate = {
    loading: null,
    error: "",
    data: "",
  };

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    test: null,
    countySelected: null,
    subCountySelected: null,
    wardSelected: {},
    countyData: counties,
    subCountyData: [],
    wardData: [],
    weatherAdvioryState,
    dayWeatherAdvioryS7Daytate
  },
  reducers: {
    toggleLoginForm: (state, action) => {},
    handleSelection: (state, action) => {
      if (action !== undefined) {
        let { stateData, object } = action.payload;
        if (stateData === "county") {
          state.countySelected = object;
          state.wardData = [];
          state.subCountySelected = {};
          state.wardSelected = {};

          state.subCountyData = subcounties
            .filter((data) => {
              return parseInt(data.county_id) === parseInt(object.id);
            })
            .sort((a, b) => {
              if (a[valueName] < b[valueName]) {
                return -1;
              }
              if (a[valueName] > b[valueName]) {
                return 1;
              }
              return 0;
            });
        }

        if (stateData === "subcounty") {
          state.subCountySelected = object;
          state.wardData = [];
          state.wardSelected = {};

          state.wardData = wards
            .filter((data) => {
              return parseInt(data.subcounty_id) === parseInt(object.id);
            })
            .sort((a, b) => {
              if (a[valueName] < b[valueName]) {
                return -1;
              }
              if (a[valueName] > b[valueName]) {
                return 1;
              }
              return 0;
            });
        }
        if (stateData === "ward") {
          state.wardSelected = object;
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getWeatherAdvisory.pending, (state, action) => {
      state.weatherAdvioryState.loading = true;
      state.weatherAdvioryState.data = [];

    });

    builder.addCase(getWeatherAdvisory.fulfilled, (state, action) => {
      state.weatherAdvioryState.loading = false;
      state.weatherAdvioryState.data = action.payload.data.timelines[0].intervals;
      state.weatherAdvioryState.error = "";
    });

    builder.addCase(getWeatherAdvisory.rejected, (state, action) => {
      state.weatherAdvioryState.loading = false;
      state.weatherAdvioryState.error = "Something went wrong";
      
    });

    builder.addCase(get7dayAdvisory.pending, (state, action) => {
        state.dayWeatherAdvioryS7Daytate.loading = true;
        state.dayWeatherAdvioryS7Daytate.data = [];
  
      });
  
      builder.addCase(get7dayAdvisory.fulfilled, (state, action) => {
        state.dayWeatherAdvioryS7Daytate.loading = true;
        state.dayWeatherAdvioryS7Daytate.data = action.payload;
        state.weatherAdvioryState.error = "";
      });
  
      builder.addCase(get7dayAdvisory.rejected, (state, action) => {
        state.dayWeatherAdvioryS7Daytate.loading = false;
        state.dayWeatherAdvioryS7Daytate.error = "Something went wrong";
        
      });
  },
});

export const { handleSelection } = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
