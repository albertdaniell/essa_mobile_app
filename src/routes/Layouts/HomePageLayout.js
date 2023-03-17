import React from "react";
import AppLogos from "../../components/organisms/AppLogos/AppLogos";
import AppNavBar from "../../components/organisms/AppNavBar/AppNavBar";
import HomePageFoooter from "../../components/templates/HomePageFoooter/HomePageFoooter";

function HomePageLayout({ children,carousel }) {
  return (
    <>
      <AppNavBar />
      {carousel !== undefined && carousel}
      <div style={{ marginTop: carousel !== undefined ? 0 :40 }}>{children}</div>
      <AppLogos/>
      <HomePageFoooter />
    </>
  );
}

export default HomePageLayout;
