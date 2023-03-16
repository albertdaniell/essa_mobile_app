import React from "react";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";

function NRM() {
  return (
    <div>
      <HomePageLayout>
        <AppContainerFluid>
          <h2
            className="display-3 mb-2"
            style={{ fontSize: 40, fontWeight: 600 }}
          >
          NRM
          </h2>
        </AppContainerFluid>
      </HomePageLayout>
    </div>
  );
}

export default NRM;
