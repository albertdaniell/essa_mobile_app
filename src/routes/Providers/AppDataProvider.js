import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValueChains } from "../../app-redux/features/appData/gapsSlice";
import { getMarketsInCounty, getValueChainsMarket } from "../../app-redux/features/appData/marketSlice";

function AppDataProvider({ children }) {
  const dispatch = useDispatch();

  const WeatherData = useSelector((state) => state.weatherData);

  const { countySelected } = WeatherData;

  useEffect(() => {
    dispatch(getValueChains(1));
    dispatch(getValueChains(2));
    dispatch(getValueChains(3));
    dispatch(getValueChainsMarket());

  }, []);

  useEffect(() => {
    if (countySelected !== null) {
      dispatch(getMarketsInCounty(countySelected.id));
    }
  }, [countySelected]);
  return <div>{children}</div>;
}

export default AppDataProvider;
