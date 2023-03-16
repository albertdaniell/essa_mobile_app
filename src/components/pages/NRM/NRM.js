import React from "react";
import { useSelector } from "react-redux";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../organisms/AppRow/AppRow";
import ValueChainCard from "../../organisms/ValueChainCard/ValueChainCard";

function NRM() {
  const GAPSData = useSelector((state) => state.gapsData);

  const { NRMVCState } = GAPSData;

  const { data: NRMVCStateData } = NRMVCState;
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

          <AppRow>
            {NRMVCStateData.map((vc) => {
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

export default NRM;
