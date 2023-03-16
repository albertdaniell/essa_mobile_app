import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
// import "./AppButton.css";
import styles from "./AppButton.module.css";

const appClassName = "btn";

function AppButton({
  label = "",
  className = "",
  size = "",
  color = PRIMARY_COLOR,
  onClick,
  style,
  loading = null,
  children = undefined,
  isLink = null,
  linkPath = "#",
  backgroundColor,
  disabled=null,
  type
}) {
  let Buttonstyles = {
    backgroundColor: backgroundColor!== undefined? backgroundColor:color,
    color:
      color === "white"
        ? PRIMARY_COLOR
        : color === "transparent"
        ? "#333333"
        : "white",
    ...style,
  };

  let ButtonClass = `${appClassName} ${styles.btn}  ${className} ${
    size === "small" ? styles.app_button_small : styles.app_button
  }`;

  let ButtonChildren =
    children !== undefined ? (
      children
    ) : (
      <>
        {loading ? (
          "Please wait..."
        ) : (
          <>{label === undefined ? "Default Button" : label}</>
        )}
      </>
    );

  return (
    <>
      {isLink ? (
        <>
          <NavLink to={linkPath}>
            <button
              disabled={loading || disabled}
              onClick={onClick}
              style={Buttonstyles}
              type={type}
              className={ButtonClass}
            >
              {ButtonChildren}
            </button>
          </NavLink>
        </>
      ) : (
        <button
          type={type}
          disabled={loading || disabled}
          onClick={onClick}
          style={Buttonstyles}
          className={ButtonClass}
        >
          {ButtonChildren}
        </button>
      )}
    </>
  );
}

export default AppButton;
