import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getmarketAdvisory,
  handleSelectionMarket,
} from "../../../app-redux/features/appData/marketSlice";
import { handleSelection } from "../../../app-redux/features/appData/weatherSlice";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppButton from "../../atoms/AppButton/AppButton";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../organisms/AppRow/AppRow";
import WeatherTile from "../../organisms/PrimaryCard/WeatherTile";
import MaketVcSelection from "./pagescomponents/MaketVcSelection";

function Market() {
  const MarketsData = useSelector((state) => state.marketData);
  const WeatherData = useSelector((state) => state.weatherData);
  const dispatch = useDispatch();

  const { countyData, countySelected } = WeatherData;
  const {
    marketsData,
    valueChainsState,
    valueChainSelected,
    marketAdvioryState,
  } = MarketsData;

  const getMarketAd = () => {
    dispatch(
      getmarketAdvisory({
        data: {
          mid: countySelected.id,
          vid: valueChainSelected.id,
        },
      })
    );
  };
  //   console.log({marketsData})

  return (
    <div>
      <HomePageLayout>
        <AppContainerFluid>
          <h2
            className="display-3 mb-2"
            style={{ fontSize: 40, fontWeight: 600 }}
          >
            Market Information
          </h2>
          <MaketVcSelection
            handleChangeMarket={handleSelectionMarket}
            handleCountyChange={handleSelection}
            data={FORM_INPUTS.market_form}
            markets={marketsData.data}
            value_chains={valueChainsState.data}
            counties={countyData}
          ></MaketVcSelection>

          <AppButton loading={marketAdvioryState.loading} onClick={getMarketAd}>
            Get Advisory
          </AppButton>

          <br></br>
          <br></br>
          <AppRow>
            <AppCol
              md_size="6"
              size="6"
              lg_size="6"
              sm_size="6"
              xs_size="6"
              className="mt-3"
            >
              <WeatherTile className="shadow-sm" color="primary">
                <div id="image_div" className="mb-2"></div>
                <>
                  <p className="fs-2 mb-2">
                    Maket: {marketAdvioryState.data.market_name}
                  </p>
                  <p className="fs-6">
                    Product name: {marketAdvioryState.data.product_name}
                  </p>
                  <p className="fs-6">
                    Retail Price: {marketAdvioryState.data.retail_price} /{" "}
                    {marketAdvioryState.data.retail_unit}
                  </p>
                  <p className="fs-6">
                    Wholesale Price: {marketAdvioryState.data.wholesale_price} /{" "}
                    {marketAdvioryState.data.wholesale_unit}
                  </p>
                  <p className="fs-6">
                    Whilesale unit:{" "}
                    {marketAdvioryState.data.wholesale_unit_amount} %
                  </p>
                </>
              </WeatherTile>
            </AppCol>
          </AppRow>
        </AppContainerFluid>
      </HomePageLayout>
    </div>
  );
}

export default Market;
