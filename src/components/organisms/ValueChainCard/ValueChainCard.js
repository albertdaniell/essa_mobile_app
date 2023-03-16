import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ValueChainCard.css";

function ValueChainCard(props) {
  const { values, largeSize, src, route, smallSize, vcType } = props;
  const APP_FULL_URL = "http://137.184.22.30/";
  const navigate = useNavigate()
  const handleNavigate = (params)=>{

    navigate(`/viewcontent?vcid=${values.id}&vcName=${values.name}&vctype=${vcType}`)
  }
  return (
    <div
    onClick={()=>handleNavigate()}
      className={`animate__animated animate__zoomIn col-md-${largeSize} col-${smallSize} col-sm-${smallSize}`}
      style={{ marginBottom: 20 }}
    >
      {/* <Link
        id="cardLink"
        to={
          route === undefined
            ? `viewcontent?vcid=${values.id}&vcName=${values.name}&vctype=${vcType}`
            : route
        }
      > */}
      <div className="shadow-sm mb-1 bg-body" id="vc_card">
        <div class="">
          <img
            src={src === undefined ? `${APP_FULL_URL}${values.image}` : src}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <center>
              <h5 className="card-title">{values.name}</h5>
            </center>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default ValueChainCard;
