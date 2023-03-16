import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ValueChainsContext } from "../../contexts/ValueChainsContext/ValueChainsContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./AppRight.css";

{
  /* <Skeleton variant="text" sx={{ fontSize: '1rem' }} /> */
}

{
  /* For other variants, adjust the size with `width` and `height` */
}
{
  /* <Skeleton variant="circular" width={40} height={40} /> */
}
{
  /* <Skeleton variant="rectangular"   height={height} /> */
}

let height = 20;

let style={ marginBottom: 10,width:"100%" }
let styleTwo={ marginBottom: 10,width:"100%",width:"70%" }
let styleThree={ marginBottom: 10,width:"100%",width:"50%" }



const Skeletone = () => {
  return (
    <>
      <Skeleton   height={height} style={styleTwo} />
      <Skeleton   height={height} style={style} />
      <Skeleton   height={height} style={style} />
      <Skeleton   height={height} style={styleTwo} />
      <Skeleton   height={height} style={styleTwo} />
      <Skeleton   height={height} style={styleThree} />
      <Skeleton   height={height} style={style} />
      <Skeleton   height={height} style={style} />
      <Skeleton   height={height} style={styleTwo} />
      <Skeleton   height={height} style={styleThree} />
      <Skeleton   height={height} style={style} />
      <Skeleton   height={height} style={style} />
      <Skeleton   height={height} style={styleThree} />
      <Skeleton   height={height} style={styleTwo} />
      <Skeleton   height={height} style={styleThree} />
      <Skeleton   height={height} style={style} />

    </>
  );
};

function AppRightSideContainer({ children, timp, isLoadingContent }) {
  const { contentsFromVC } = useContext(ValueChainsContext);

  return (
    <div class="col-sm-3" id="app_left_nav">
      {" "}
      {children}
      <div id="content_div">
        <strong>{timp}</strong>
        <hr></hr>
        {isLoadingContent ? (
          <Skeletone />
        ) : (
          <>
            <a href={`#introDiv`}>Introduction</a>
            {contentsFromVC.map((vc, index) => {
              return (
                <div>
                  <a href={`#section${index}content`}>{vc.title}</a>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default AppRightSideContainer;

{
  /* <Link
class="nav-link"
to={`viewcontent?vcid=${vc.id}&vcName=${vc.name}`}
>
{vc.title}
</Link> */
}
