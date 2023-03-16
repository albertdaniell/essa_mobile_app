import React from "react";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";

function Market() {
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
        </AppContainerFluid>
      </HomePageLayout>
    </div>
  );
}

export default Market;
