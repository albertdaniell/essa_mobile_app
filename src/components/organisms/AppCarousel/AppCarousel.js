import React from "react";
import { Carousel } from "react-bootstrap";
import { GLOBAL_DATA } from "../../../constants/GlobalAppData";
import AppButton from "../../atoms/AppButton/AppButton";
import ClassStyles from "./Carousel.module.css";

function AppCarousel() {
  return (
    <>
      <div className={ClassStyles.carousel}>
        <Carousel>
          {GLOBAL_DATA.landing_carousel.map((CR, index) => {
            return (
              <Carousel.Item>
                <img src={CR.image} className="d-block w-100" alt="1..." />
                {/* <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                /> */}
                <Carousel.Caption>
                  <h3>{CR.title}</h3>
                  <AppButton isLink={true} linkPath={CR.buttonLink}>Get Started</AppButton>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default AppCarousel;
