import React from "react";
import { FormatDate } from "../../../../constants/appUtils";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import PrimaryCard from "../../../organisms/PrimaryCard/PrimaryCard";
import WeatherTile from "../../../organisms/PrimaryCard/WeatherTile";

function WeatherAdvisory({ data }) {
  // console.log({data})

  let codes = [
    {
      url: "https://files.readme.io/48b265b-weather_icon_small_ic_clear3x.png",
      code: "1000",
    },
    {
      url: "https://files.readme.io/c3d2596-weather_icon_small_ic_mostly_clear3x.png",
      code: "1100",
    },
    {
      url: "https://files.readme.io/5ef9011-weather_icon_small_ic_partly_cloudy3x.png",
      code: "1101",
    },

    {
      url: "https://files.readme.io/6beaa54-weather_icon_small_ic_mostly_cloudy3x.png",
      code: "1102",
    },
    {
      url: "https://files.readme.io/a31c783-weather_icon_small_ic_clear_night3x.png",
      code: "11000",
    },
    {
      url: "https://files.readme.io/c3d2596-weather_icon_small_ic_mostly_clear3x.png",
      code: "11010",
    },
    {
      url: "https://files.readme.io/4042728-weather_icon_small_ic_cloudy3x.png",
      code: "1001",
    },
    {
      url: "https://files.readme.io/76580b9-weather_icon_small_ic_fog_light3x.png",
      code: "2100",
    },
    {
      url: "https://files.readme.io/cc2d732-weather_icon_small_ic_fog_light_mostly_clear3x.png",
      code: "21010",
    },
    {
      url: "https://files.readme.io/ea98852-weather_icon_small_ic_rain_light3x.png",
      code: "4000",
    },

    {
      url: "https://files.readme.io/aab8713-weather_icon_small_ic_rain3x.png",
      code: "4001",
    },
    {
      code: "4200",
      url: "https://files.readme.io/ea98852-weather_icon_small_ic_rain_light3x.png",
    },
  ];

  return (
    <div>
      <h2
        className="display-4 mb-2 mt-4"
        style={{ fontSize: 20, fontWeight: 600 }}
      >
        Forecast for the next 14 days
      </h2>
      <AppRow>
        {Array.isArray(data) &&
          data.map((theme) => {
            let { values } = theme;

            let { weatherCode } = values;

            let weather_url = codes.filter((code) => {
              return parseInt(code.code) === parseInt(weatherCode);
            })[0];
            // console.log({weather_url})

            return (
              <>
                <AppCol
                  md_size="6"
                  size="2"
                  lg_size="6"
                  sm_size="6"
                  xs_size="6"
                  className="mt-3"
                >
                  {/* Min Temp: 14.48 °
Max Temp: 23.85 °
Rainfall Chance: 25%
Rainfall Amount: 2.94mm
Humidity: 97.95%
Wind Speed: 5.25m/s */}
                  <WeatherTile className="shadow-sm" color="primary">
                    <div id="image_div" className="mb-2">
                      {/* {JSON.stringify(weather_url)} */}
                      <img
                        src={weather_url !== undefined ? weather_url.url : ""}
                      ></img>
                      {/* {weatherCode} */}
                    </div>
                    <>
                      <p className="fs-6 mb-2">
                        Date: {FormatDate(theme.startTime)}
                      </p>
                      <p className="fs-6">Min Temp: {values.temperatureMin}</p>
                      <p className="fs-6">Max Temp: {values.temperatureMax}</p>
                      <p className="fs-6">
                        Rainfall Chance: {values.precipitationProbability}%
                      </p>
                      <p className="fs-6">Humidity: {values.humidity} %</p>
                      <p className="fs-6">Wind Speed: {values.windSpeed} %</p>
                    </>
                  </WeatherTile>
                </AppCol>
              </>
            );
          })}
      </AppRow>
    </div>
  );
}

export default WeatherAdvisory;
