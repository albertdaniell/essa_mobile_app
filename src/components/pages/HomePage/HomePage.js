import React from "react";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppCarousel from "../../organisms/AppCarousel/AppCarousel";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import Themes from "./pagecomponents/Themes";

function HomePage() {
  return (
    <>
      <HomePageLayout carousel={<AppCarousel />}>
        <AppContainerFluid>
          <Themes />
        </AppContainerFluid>
      </HomePageLayout>
    </>
  );
}

export default HomePage;
