import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get7dayAdvisory,
  getWeatherAdvisory,
  handleSelection,
} from "../../../app-redux/features/appData/weatherSlice";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppButton from "../../atoms/AppButton/AppButton";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import CountySelection from "./pagecomponents/CountySelection";
import WeatherAdvisory from "./pagecomponents/WeatherAdvisory";

function Weather() {
  const WeatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();

  const {
    countyData,
    subCountyData,
    wardData,
    wardSelected,
    weatherAdvioryState,
    dayWeatherAdvioryS7Daytate,
  } = WeatherData;

  const handleGetAdvisory = () => {
    dispatch(
      getWeatherAdvisory({
        data: { lat: wardSelected.lng, lon: wardSelected.lat },
      })
    );

    dispatch(
      get7dayAdvisory({
        data: { lat: wardSelected.lng, lon: wardSelected.lat },
      })
    );
  };

  return (
    <HomePageLayout>
      {/* <AppCarousel /> */}
      <AppContainerFluid>
        {/* <Themes /> */}

        <div>
          <h2
            className="display-3 mb-2"
            style={{ fontSize: 40, fontWeight: 600 }}
          >
            Weather Advisory
          </h2>
          <CountySelection
            handleChange={handleSelection}
            data={FORM_INPUTS.weather_form}
            counties={countyData}
            subcounties={subCountyData}
            wards={wardData}
          ></CountySelection>

          <AppButton onClick={handleGetAdvisory}>Get Advisory</AppButton>
        </div>

        <div className="mt-4">
          {dayWeatherAdvioryS7Daytate.data.hasOwnProperty("message") && (
            <>
              <div className="alert alert-success" role="alert">
                <h5 className="alert-heading">
                  Advisory for {wardSelected.name}
                </h5>
                <p>
                  {wardSelected.name} is{" "}
                  {dayWeatherAdvioryS7Daytate.data.message}
                </p>
                <hr />
              </div>
            </>
          )}
        </div>

        {weatherAdvioryState.data.length !== 0 && (
          <WeatherAdvisory data={weatherAdvioryState.data}></WeatherAdvisory>
        )}
      </AppContainerFluid>
    </HomePageLayout>
  );
}

export default Weather;
