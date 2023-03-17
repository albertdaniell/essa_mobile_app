import React from "react";
import AppImage from "../AppImage/AppImage";
import "./SkillsTile.css";

export function SkillsTile3({ image = {}, text = "" }) {
  return (
    <div className="shadow-sm p-3 bg-body rounded" id="skill_tile3">
      <div id="" className="">
        {/* {image} */}
        <div id="image" className="pb-3">
          <center>
            <AppImage style={{ height: 150 }} image={image}></AppImage>
          </center>
        </div>
      </div>
      <center>
        <span className="text-muted myText">{text}</span>
      </center>
    </div>
  );
}

export default SkillsTile3;
