import React from "react";
import { Link } from "react-router-dom";
import ClassStyles from "./Carousel.module.css";
import AppButton from "./components/atoms/AppButton/AppButton";
import AppCarousel from "./components/organisms/AppCarousel/AppCarousel";
import AppCol from "./components/organisms/AppCol/AppCol";
import AppNavBar from "./components/organisms/AppNavBar/AppNavBar";
import AppRow from "./components/organisms/AppRow/AppRow";
import PrimaryCard from "./components/organisms/PrimaryCard/PrimaryCard";
import Themes from "./components/pages/HomePage/pagecomponents/Themes";
import { GLOBAL_DATA } from "./constants/GlobalAppData";
function CarouselTest() {
  return (
    <>
      <AppNavBar></AppNavBar>
      {/* <div className={ClassStyles.carousel}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                class="d-block w-100"
                alt="1..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <AppButton>Get Started</AppButton>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                class="d-block w-100"
                alt="1..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <AppButton>Get Started</AppButton>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                class="d-block w-100"
                alt="1..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <AppButton>Get Started</AppButton>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      <br></br>
      <br></br>
<AppCarousel/>
      <Themes/>
    </>
  );
}

export default CarouselTest;
