import React from "react";
function Headerimage(props) {
  const { pageHeader, img } = props;
  return (
    <div
      id="headerImg"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="animate__animated animate__fadeIn"
    >
      <div>
        <div className="">
          <div id="headerHeading" className="">
            <div>{pageHeader}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headerimage;
