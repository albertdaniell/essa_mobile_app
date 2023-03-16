import React from "react";

function AppContainer({ style, className, children,id }) {
  return (
    <div id={id} style={style} className={`container-lg ${className}`}>
      {children}
    </div>
  );
}

export default AppContainer;
