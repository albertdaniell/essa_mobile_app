import React from "react";
import { Link } from "react-router-dom";
import { GLOBAL_DATA } from "../../../../constants/GlobalAppData";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import PrimaryCard from "../../../organisms/PrimaryCard/PrimaryCard";
import "../HomePage.css";
function Themes() {
  return (
    <div id="themes_div">
      <h1
        className="display-3 text-center"
        style={{ fontSize: 30, fontWeight: 600 }}
      >
        Some Title Goes here
      </h1>
      <AppCol size="12" md_size="12" sm_size={12}>
        <AppRow>
          {GLOBAL_DATA.themes.map((theme) => {
            return (
              <>
                <AppCol
                  md_size="6"
                  size="4"
                  lg_size="6"
                  sm_size="6"
                  xs_size="6"
                  className="mt-3"
                >
                  <Link id="themes" to={theme.link}>
                    <PrimaryCard className="shadow-sm" color={theme.color}>
                      <div id="image_div">{theme.image}</div>
                      <center>
                        {theme.title}
                        <p className="fs-6 text-center">{theme.desc}</p>
                      </center>
                    </PrimaryCard>
                  </Link>
                </AppCol>
              </>
            );
          })}
        </AppRow>
      </AppCol>
    </div>
  );
}

export default Themes;
