import React from "react";

function AppLeftSideContainer(props) {
  return (
    <div class="col-sm-9 animate__animated animate__fadeIn" id="app_right_nav">
      {props.children}
    </div>
  );
}

export default AppLeftSideContainer;
