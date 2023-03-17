import React from "react";
import Carousel from "react-multi-carousel";
import SkillsTile3 from "../SkillsTile/SkillsTile";
import "react-multi-carousel/lib/styles.css";

import image1 from "./addis.png";
import image2 from "./eiar.png";
import image3 from "./icipe.png";
import image4 from "./ihe.png";
import image5 from "./ilri.png";
import image6 from "./rcmrd.png";
import image7 from "./uon.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const partners = [
    {
        title:"",
        image:image1
    },
    {
        title:"",
        image:image2
    },
    {
        title:"",
        image:image3
    },
    {
        title:"",
        image:image4
    },
    {
        title:"",
        image:image5
    },
    {
        title:"",
        image:image6
    },
    {
        title:"",
        image:image7
    },
   
]
function AppLogos() {
  return (
      <div className="mt-3">
         <h1
        className="display-3 text-center"
        style={{ fontSize: 30, fontWeight: 600 }}
      >
        Partners
      </h1>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          centerMode={true}
        >
          {partners.map((skill) => {
            return (
              <>
                <SkillsTile3
                  image={skill.image}
                  text={skill.name}
                ></SkillsTile3>
              </>
            );
          })}
        </Carousel>
      </div>
  );
}

export default AppLogos;
