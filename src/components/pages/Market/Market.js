import { StorefrontOutlined } from "@mui/icons-material";
import { Backdrop, CircularProgress } from "@mui/material";
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
    marketSelected
  } = MarketsData;

  const getMarketAd = () => {
    dispatch(
      getmarketAdvisory({
        data: {
          mid: marketSelected.id,
          vid: valueChainSelected.id,
        },
      })
    );
  };
  //   console.log({marketsData})

  return (
    <div>
        

            <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={marketAdvioryState.loading || valueChainsState.loading || marketsData.loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        
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

          <AppButton
          disabled={marketSelected.hasOwnProperty("id") && valueChainSelected.hasOwnProperty("id")?false:true}
          loading={marketAdvioryState.loading} onClick={getMarketAd}>
            Get Advisory
          </AppButton>

          <br></br>
          <br></br>

          {marketAdvioryState.data.hasOwnProperty("market_name") && (
            <>
            
              <AppRow>
                <AppCol
                  md_size="7"
                  size="7"
                  lg_size="8"
                  sm_size="8"
                  xs_size="12"
                  className="mt-3"
                >
                  <div className="shadow-lg p-3" color="primary">
                    
                    <div id="image_div" className="mb-2"></div>
                    <>
                    <p className="fs-4 mb-2">
                    <StorefrontOutlined fontSize="large" /> {marketAdvioryState.data.market_name}
                      </p>
                      <p className="fs-5">
                        Product name: {marketAdvioryState.data.product_name}
                      </p>
                      <p className="fs-5">
                        Retail Price: {marketAdvioryState.data.retail_price} /{" "}
                        {marketAdvioryState.data.retail_unit}
                      </p>
                      <p className="fs-5">
                        Wholesale Price:{" "}
                        {marketAdvioryState.data.wholesale_price} /{" "}
                        {marketAdvioryState.data.wholesale_unit}
                      </p>
                      <p className="fs-5">
                        Wholesale unit:{" "}
                        {marketAdvioryState.data.wholesale_unit_amount}
                      </p>
                    </>
                  </div>
                </AppCol>
              </AppRow>
            </>
          )}
        </AppContainerFluid>
      </HomePageLayout>
    </div>
  );
}

export default Market;
