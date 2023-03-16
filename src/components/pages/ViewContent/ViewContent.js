import React, { useContext, useEffect } from "react";
import queryString from "query-string";
import { ValueChainsContext } from "../../contexts/ValueChainsContext/ValueChainsContext";
import AppRightSideContainer from "../../layouts/AppRightSideContainer/AppRightSideContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ViewContent.css";
import Headerimage from "../../organisms/HeaderImage/Headerimage";
import AppLeftSideContainer from "../../organisms/AppLeftSideContainer/AppLeftSideContainer";
import AppContentCard from "../../organisms/AppContentCard/AppContentCard";
import AppContainer from "../../organisms/AppContainer/AppContainer";

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
  const qValue = queryString.parse(location.search);
  const { vcid } = qValue;
  const {
    setValueChainDetail,
    setContentsFromVC,
    getValueChainsDetail,
    getContentFromVC,
    valueChainDetail,
    contentsFromVC,
    isLoadingContent,
  } = useContext(ValueChainsContext);
  useEffect(() => {
    getValueChainsDetail(vcid);
    getContentFromVC(vcid);
    return () => {
      // cleanup
      setValueChainDetail([]);
      setContentsFromVC([]);
    };
  }, [vcid]);
  return (
    <div>
      {/* <Preheader></Preheader> */}
      {/* <OrgLogos></OrgLogos> */}
      {/* <AppLogo appName={valueChainDetail.name} to="/"></AppLogo> */}
     
      {/* {
    JSON.stringify(valueChainDetail)
} */}

      <AppContainer showFooter={false}>
        <AppRightSideContainer
          isLoadingContent={isLoadingContent}
          timp={valueChainDetail.name}
        ></AppRightSideContainer>

        <AppLeftSideContainer>
          {isLoadingContent ? (
            <HeaderImageSkeletone />
          ) : (
            <>
              <Headerimage
                pageHeader={valueChainDetail.name}
                img={valueChainDetail.image}
              ></Headerimage>
            </>
          )}
          {isLoadingContent && <IntroSkeletone />}

          {contentsFromVC.length === 0 && isLoadingContent === null ? (
            <span>
              No Content for the language selected for this value chain.
            </span>
          ) : (
            <>
              {isLoadingContent ? (
                <></>
              ) : (
                <>
                  {valueChainDetail.intro !== undefined && (
                    <div
                      id="introDiv"
                      dangerouslySetInnerHTML={{
                        __html: `${valueChainDetail.intro}`,
                      }}
                    />
                  )}
                </>
              )}

              {contentsFromVC !== undefined && contentsFromVC.length !== 0 && (
                <>
                  {isLoadingContent ? (
                    <>
                      <IntroSkeletone />
                      <IntroSkeletone />
                    </>
                  ) : (
                    <>
                      {contentsFromVC.map((value, index) => {
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
      </AppContainer>
    </div>
  );
}

export default ViewContent;
