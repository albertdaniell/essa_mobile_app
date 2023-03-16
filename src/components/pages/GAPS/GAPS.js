import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppButton from "../../atoms/AppButton/AppButton";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../organisms/AppRow/AppRow";
import ValueChainCard from "../../organisms/ValueChainCard/ValueChainCard";

function GAPS() {
  const GAPSData = useSelector((state) => state.gapsData);

  const [vc_type, set_vc_type] = useState(1);

  const { cropsVcState, livestockVCState } = GAPSData;

  const { data: cropsVcStateData } = cropsVcState;
  const { data: livestockVCStateData } = livestockVCState;

  let value_chains = vc_type === 1 ? cropsVcStateData : livestockVCStateData;

  const vc_types = [
    {
      name: "Crops",
      id: 1,
    },
    {
      name: "Livestock",
      id: 2,
    },
  ];

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

          {vc_types.map((vc) => {
            return (
              <>
                {vc_type === vc.id ? (
                  <>
                    <AppButton
                      onClick={() => set_vc_type(vc.id)}
                      style={{ marginRight: 10 }}
                      size="small"
                    >
                      {vc.name}
                    </AppButton>
                  </>
                ) : (
                  <>
                    <SecondaryButton
                      onClick={() => set_vc_type(vc.id)}
                      style={{ marginRight: 10 }}
                      size="small"
                    >
                      {vc.name}
                    </SecondaryButton>
                  </>
                )}
              </>
            );
          })}

          <br></br>
          <br></br>

          <AppRow>
            {value_chains.map((vc) => {
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
