import { configureStore } from "@reduxjs/toolkit";
import appDataSlice from "./features/appData/appDataSlice";
import gapsSlice from "./features/appData/gapsSlice";
import marketSlice from "./features/appData/marketSlice";
import weatherSlice from "./features/appData/weatherSlice";

const rootStore = configureStore({
  reducer: {
    appData: appDataSlice,
    weatherData:weatherSlice,
    gapsData:gapsSlice,
    marketData:marketSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default rootStore;
