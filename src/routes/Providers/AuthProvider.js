import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  getUserFromToken,
  getUserTokenOffline,
} from "../../app-redux/features/Auth/authSlice";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let { pathname } = location;

  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  let nextPage = searchParams.get("nextPage");

  const authData = useSelector((state) => state.auth);

  let { offlineUserToken } = authData;
  let { loginUserState } = authData;
  let { data: loginUserData } = loginUserState;
  let { type } = loginUserData;

  useEffect(() => {
    // Get the user offline token
    dispatch(getUserTokenOffline("@userAccess"));
    // console.log(offlineUserToken.userToken)
  }, [offlineUserToken.userToken, location]);

  useEffect(() => {
    //get user from token if not null
    if (offlineUserToken.userToken !== null) {
      dispatch(getUserFromToken());
    }
  }, [offlineUserToken.userToken]);

  useEffect(() => {
    if (loginUserState.isLoggedIn && !loginUserState.success) {
      if (type === "talent") {
        if (nextPage === null) {
          // navigate("/talent/dashboard",{ replace: true });

          // console.log({ nextPage });
          if (pathname !== "/talent/dashboard" && pathname !== "/") {
            navigate(`${pathname}`, { replace: true });
          } else {
            navigate(`/talent/dashboard`, { replace: true });
          }
          // navigate(`${nextPage}`, { replace: true });
        } else {
          // console.log({nextPage})
          navigate(`${nextPage}`, { replace: true });
        }
      } else if (type === "talent") {
        if (nextPage === null) {
          // navigate("/talent/dashboard",{ replace: true });

          // console.log({ nextPage });
          if (pathname !== "/company/dashboard" && pathname !== "/") {
            navigate(`${pathname}`, { replace: true });
          } else {
            navigate(`/company/dashboard`, { replace: true });
          }
          // navigate(`${nextPage}`, { replace: true });
        } else {
          // console.log({nextPage})
          navigate(`${nextPage}`, { replace: true });
        }
      }
    } else {
      if (loginUserState.error !== "") {
        navigate(`/`, { replace: true });
        // console.log({loginUserState});
      }
    }
  }, [loginUserState]);

  return <>{children}</>;
};

export default AuthProvider;
