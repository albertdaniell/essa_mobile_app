import React from "react";
import {  useLocation } from "react-router-dom";
import { PRIMARY_COLOR } from "../../../constants/AppColors";

function NotFound() {
  let location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h4 style={{fontWeight: 600, color: PRIMARY_COLOR }}>
        Oops! Page Not Found
      </h4>
      <p>
        No match for <code>{location.pathname}</code>
      </p>

      <p>
        Try the home page <a href="/">here</a>
      </p>
    </div>
  );
}

export default NotFound;
