import React from "react";
import { useSelector } from "react-redux";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../organisms/AppRow/AppRow";
import ValueChainCard from "../../organisms/ValueChainCard/ValueChainCard";

function GAPS() {

  const GAPSData = useSelector((state) => state.gapsData);

  const {cropsVcState} = GAPSData

  const {data:cropsVcStateData} = cropsVcState

  return (
    <div>
      <HomePageLayout>
        <AppContainerFluid>
          <h2
            className="display-3 mb-2"
            style={{ fontSize: 40, fontWeight: 600 }}
          >
            Climate Smart Agropastoral Management Practices
          </h2>

         <AppRow>
         {cropsVcStateData.map((vc) => {
                  return (
                    <ValueChainCard
                    vcType="crops"
                    smallSize="6"
                      largeSize="3"
                      key={vc._id}
                      values={vc}
                    ></ValueChainCard>
                  );
                })}
         </AppRow>
        </AppContainerFluid>
      </HomePageLayout>
    </div>
  );
}

export default GAPS;
