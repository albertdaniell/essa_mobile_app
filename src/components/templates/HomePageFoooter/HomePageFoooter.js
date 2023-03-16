import { Envelope, LinkedinBoxFill, Location } from "akar-icons";
import React from "react";
import { NAVLINKS } from "../../../constants/navlinks";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainer from "../../organisms/AppContainer/AppContainer";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../organisms/AppRow/AppRow";
import HomePageFooterLink from "../../organisms/HomePageFooterLink/HomePageFooterLink";
import HomePageFooterSocialIcon from "../../organisms/HomePageFooterSocialICon/HomePageFooterSocialIcon";
import "./HomePageFoooter.css";

function HomePageFoooter() {
  return (
   <div id="homepage_footer">
     <AppContainer >
      <AppRow className="mt-4">
        <AppCol lg_size={3} size="3" md_size={3}>
          <p className="fs-6">
          Disclaimer: This Portal of Knowledge was created and maintained with the financial support of the European Union. Its contents are the sole responsibility of KALRO and do not necessarily reflect the views of the European Union.
          </p>

          <ul className="list-inline">
            <li className="list-inline-item">
              <Location size={15} />
            </li>
            <li className="list-inline-item">email@email.com</li>
          </ul>

          <ul className="list-inline">
            <li className="list-inline-item">
              <Envelope size={15} />
            </li>
            <li className="list-inline-item">email@email.com</li>
          </ul>

          <ul className="list-inline">
            <li className="list-inline-item">
              <LinkedinBoxFill size={15} />
            </li>
            <li className="list-inline-item">email@email.com</li>
          </ul>
        </AppCol>
        <AppCol lg_size={2} md_size={2} id="homepage_footer_links" olg="1" size="2">
          <p className="">Explore</p>
          <>
            <ul className="list-unstyled">
              {NAVLINKS.home_page_footer_links_left.map((link,index) => {
                return (
                  <HomePageFooterLink
                  key={index}
                    name={link.name}
                    link={link.link}
                  ></HomePageFooterLink>
                );
              })}
            </ul>
          </>
        </AppCol>

        <AppCol lg_size={2} md_size={2}  id="homepage_footer_links" size="2">
          <p className="">About</p>
          <>
            <ul className="list-unstyled">
              {NAVLINKS.home_page_footer_links_right.map((link,index) => {
                return (
                  <HomePageFooterLink
                  key={index}
                    name={link.name}
                    link={link.link}
                  ></HomePageFooterLink>
                );
              })}
            </ul>
          </>
        </AppCol>

        <AppCol lg_size={3} md_size={3} size="3" id="social_media" olg="1">
          <ul className="list-unstyled">
            {NAVLINKS.social_media_links.map((link,index) => {
              return (
                <HomePageFooterSocialIcon
                key={index}
                  name={link.name}
                  link={link.link}
                  icon={link.icon}
                ></HomePageFooterSocialIcon>
              );
            })}
          </ul>
        </AppCol>
      </AppRow>
    </AppContainer>
   </div>
  );
}

export default HomePageFoooter;
