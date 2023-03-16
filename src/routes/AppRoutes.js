import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import GAPS from "../components/pages/GAPS/GAPS";
import HomePage from "../components/pages/HomePage/HomePage";
import Market from "../components/pages/Market/Market";
import NotFound from "../components/pages/NotFound/NotFound";
import NRM from "../components/pages/NRM/NRM";
import ViewContent from "../components/pages/ViewContent/ViewContent";
import Weather from "../components/pages/Weather/Weather";
import { HOME_ROUTES } from "./RouteLinks";
import ScrollToTop from "./ScrollToTop";

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <center>
          <LinearProgress />
        </center>
      }
    >
      <ScrollToTop />

      <Routes>
        <Route exact path={HOME_ROUTES.index} element={<HomePage />} />
        <Route exact path={HOME_ROUTES.weather} element={<Weather />} />
        <Route exact path={HOME_ROUTES.nrm} element={<NRM />} />
        <Route exact path={HOME_ROUTES.gaps} element={<GAPS />} />
        <Route exact path={HOME_ROUTES.market} element={<Market />} />
        <Route exact path={HOME_ROUTES.viewcontent} element={<ViewContent />} />






        {/* <Route exact path={HOME_ROUTES.home} element={<ApplicantHome />} /> */}
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
