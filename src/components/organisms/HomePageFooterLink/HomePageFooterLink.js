import React from "react";
import { Link } from "react-router-dom";

function HomePageFooterLink({ name = "", link = "" }) {
  return (
    <li>
      <Link to={link}>{name}</Link>
    </li>
  );
}

export default HomePageFooterLink;
