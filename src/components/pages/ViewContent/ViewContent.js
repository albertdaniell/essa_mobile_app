import React, { useEffect } from "react";
import queryString from "query-string";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ViewContent.css";
import Headerimage from "../../organisms/HeaderImage/Headerimage";
import AppLeftSideContainer from "../../organisms/AppLeftSideContainer/AppLeftSideContainer";
import AppContentCard from "../../organisms/AppContentCard/AppContentCard";
import AppContainer from "../../organisms/AppContainer/AppContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getContentFromVC,
  getValueChainsDetail,
} from "../../../app-redux/features/appData/gapsSlice";
import AppRightSideContainer from "../../organisms/AppRightSideContainer/AppRightSideContainer";
import { useSearchParams } from "react-router-dom";
import HomePageLayout from "../../../routes/Layouts/HomePageLayout";
import AppRow from "../../organisms/AppRow/AppRow";

let Introheight = 300;
let introStyle = {
  marginBottom: 20,
  width: "100%",
  marginTop: 10,
  borderRadius: 5,
};
let headerImageStyle = {
  marginBottom: 20,
  width: "100%",
  marginTop: 70,
  borderRadius: 20,
};

const HeaderImageSkeletone = () => {
  return (
    <>
      <Skeleton height={Introheight} style={headerImageStyle} />
    </>
  );
};
const IntroSkeletone = () => {
  return (
    <>
      <Skeleton height={Introheight} style={introStyle} />
    </>
  );
};

function ViewContent({ location }) {
  const dispatch = useDispatch();
  const GAPSData = useSelector((state) => state.gapsData);
  const { contentsFromVC, valueChainDetail } = GAPSData;
  let [searchParams, setSearchParams] = useSearchParams();
  let vcid = searchParams.get("vcid");

  // console.log({valueChainDetail.data})

  
 
  useEffect(() => {
    dispatch(getValueChainsDetail(vcid));

    dispatch(getContentFromVC(vcid));
    return () => {
      // cleanup
      // setValueChainDetail([]);
      // setContentsFromVC([]);
    };
  }, [vcid]);
  return (
    <HomePageLayout>
      <AppContainer showFooter={false}>
        <AppRow>
        <AppRightSideContainer
          contentsFromVC={contentsFromVC.data}
          isLoadingContent={contentsFromVC.loading}
          timp={valueChainDetail.data.name}
        ></AppRightSideContainer>

<AppLeftSideContainer>
          {valueChainDetail.loading ? (
            <HeaderImageSkeletone />
          ) : (
            <>
              <Headerimage
                pageHeader={valueChainDetail.data.name}
                img={valueChainDetail.data.image}
              ></Headerimage>
            </>
          )}
          {contentsFromVC.loading && <IntroSkeletone />}

          {contentsFromVC.length === 0 && contentsFromVC.loading === null ? (
            <span>
              No Content for the language selected for this value chain.
            </span>
          ) : (
            <>
              {contentsFromVC.loading ? (
                <></>
              ) : (
                <>
                  {valueChainDetail.data.intro !== undefined && (
                    <div
                      id="introDiv"
                      dangerouslySetInnerHTML={{
                        __html: `${valueChainDetail.data.intro}`,
                      }}
                    />
                  )}
                </>
              )}

              {contentsFromVC !== undefined && contentsFromVC.length !== 0 && (
                <>
                  {contentsFromVC.loading ? (
                    <>
                      <IntroSkeletone />
                      <IntroSkeletone />
                    </>
                  ) : (
                    <>
                      {contentsFromVC.data.map((value, index) => {
                        return (
                          <AppContentCard
                            id={`section${index}content`}
                            key={value.valuechain_id + index}
                            title={value.title}
                            content={value.content}
                            message={value.intro}
                            target={`#index${index + 1}`}
                            index={`index${index + 1}`}
                          ></AppContentCard>
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </AppLeftSideContainer>
        </AppRow>
        

        
      </AppContainer>
    </HomePageLayout>
  );
}

export default ViewContent;
