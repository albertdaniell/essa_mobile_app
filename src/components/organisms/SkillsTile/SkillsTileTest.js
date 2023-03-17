import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { WHITE_COLOR } from "../../../constants/AppColors";
import { BICODE_SVG } from "../../../constants/AppSvg";
import { DUMMY_DATA } from "../../../constants/dummyData/dummyData";
import AppButton from "../../atoms/AppButton/AppButton";
import AppImage from "../AppImage/AppImage";
import classStyle from "./SkillTile.module.css";

function SkillsTileTest({ image = {}, text = "", skillID, testID }) {
  const location = useLocation();
  let { pathname } = location;

  return (
    <a
      href={`/talent/tests/${testID}/${skillID}`}
      className={classStyle.skill_tile}
    >
      <div className={classStyle.image_div}>
        <div className={classStyle.image}>
          <center>
            {/* --{JSON.stringify(DUMMY_DATA.tests[0].defaultImages)} */}
            {image !== null ? (
              <AppImage image={image}></AppImage>
            ) : (
              <AppImage
                style={{ padding: 10 }}
                image={DUMMY_DATA.tests[0].defaultImages[testID]}
              ></AppImage>
            )}
          </center>
        </div>
      </div>
      <center>
        <div className={classStyle.myText}>
          <>{text}</>
        </div>
      </center>
      <br></br>
      <AppButton
        backgroundColor={WHITE_COLOR}
        color="transparent"
        size="small"
        label="Start"
      />
    </a>
  );
}

export default SkillsTileTest;
