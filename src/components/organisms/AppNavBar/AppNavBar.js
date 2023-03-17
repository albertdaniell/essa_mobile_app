import { LinearProgress } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { NAVLINKS } from "../../../constants/navlinks";
import AppNavLink from "../../molecules/AppNavLink/AppNavLink";
import AppCol from "../AppCol/AppCol";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import "./AppNavBar.css";
import image1 from "./essa_logo.png";
import image2 from "./essa-logo-400.png";

import image3 from "./kalro_logo.png";

function AppNavBar({
  LeftComponent,
  RightComponent,
  navTileTitle,
  navTileImage,
  loading = false,
}) {
  let leftLinks = NAVLINKS.home_page_links;
  // let leftLinks = []

  let rightLinks = NAVLINKS.rightLinks;

  return (
    <>
      <>
        <AppContainerFluid style={{ padding: 10 }}>
          <div id="app_logos_div">
          <img src={image1}></img>
          {/* <img src={image2}></img> */}
          <p>
          EARTH OBSERVATION AND ENVIRONMENTAL SENSING FOR <br></br> CLIMATE-SMART SUSTAINABLE AGROPASTORALECOSYSTEM
          <br></br>
TRANSFORMATION IN EAST AFRICA (ESSA) PROJECT
          </p>

          <img src={image3}></img>

          </div>
        </AppContainerFluid>
      </>
      <div id="appnav" className="">
        <AppContainerFluid style={{ marginTop: 10 }}>
          {loading && <LinearProgress />}

          <>
            <AppCol size={12} md_size="12" sm_size={12}>
              <div id="left">
                <div id="app_nav_logo">
                  {/* <Link to="/">
                </Link> */}
                </div>

                {LeftComponent !== undefined ? (
                  LeftComponent
                ) : (
                  <>
                    <AppNavLink links={leftLinks}></AppNavLink>
                  </>
                )}
              </div>

              <div id="right">
                {RightComponent !== undefined ? (
                  RightComponent
                ) : (
                  <>
                    <AppNavLink links={rightLinks}></AppNavLink>
                  </>
                )}
              </div>
            </AppCol>
          </>
        </AppContainerFluid>
      </div>
    </>
  );
}

export default AppNavBar;
