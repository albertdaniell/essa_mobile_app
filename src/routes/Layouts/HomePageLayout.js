import React from "react";
import AppNavBar from "../../components/organisms/AppNavBar/AppNavBar";
import HomePageFoooter from "../../components/templates/HomePageFoooter/HomePageFoooter";

function HomePageLayout({ children,carousel }) {
  return (
    <>
      <AppNavBar />
      {carousel !== undefined && carousel}
      <div style={{ marginTop: carousel !== undefined ? 0 :40 }}>{children}</div>
      <HomePageFoooter />
    </>
  );
}

export default HomePageLayout;
