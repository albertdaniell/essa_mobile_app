import React from "react";

function HomePageFooterSocialIcon({ name = "", link = "", icon }) {
  return (
    <li>
      <a href={link}>{icon}</a>
    </li>
  );
}

export default HomePageFooterSocialIcon;
