// import logo from './logo.svg';
import "./App.css";
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import React from "react";
import { Auth, Hub } from "aws-amplify";
import { useSelector } from "react-redux";
import {
  clearAuth,
  clearToast,
  setToken,
  setUser,
  setMode,
} from "./store/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import axios from "axios";
import AppContainer from "./components/AppContainer";
import { BASE_URL } from "./constants";
import Home from "./components/Home";
import AdminPanel from "./components/admin/AdminPanel";

function App() {
  const notificationToast = useSelector((state) => state.notification.toast);
  const auth = useSelector((state) => state.auth);
  const mode = useSelector((state) => state.theme.mode);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(notificationToast);
    if (
      notificationToast &&
      typeof notificationToast.message === "string" &&
      typeof notificationToast.type === "string"
    ) {
      toast(notificationToast.message, {
        type: notificationToast.type,
      });
      clearToast();
    }
  }, [notificationToast]);
  const getUserOnInit = async () => {
    // get AWS authentication
    // setLoading(true);

    const u = await Auth.currentAuthenticatedUser();
    // get realcapital api authorized user
    // const token = u.signInUserSession.idToken.jwtToken;
    return u;
  };
  React.useEffect(() => {console.log(auth)},[auth])
  React.useEffect(() => {
    // setLoading(true);
    Hub.listen("auth", (res) => {
      if (res.payload.event === "signIn") {
        const u = res.payload.data;

        dispatch(setUser(u));
        dispatch(setToken(u.signInUserSession.idToken.jwtToken));
        toast("Welcome to Leagues", {
          type: "dark",
        });
      }
      if (res.payload.event === "signOut") {
        dispatch(clearAuth());
        toast("User succesfully logged out", {
          type: "dark",
        });
        dispatch(clearToast());
        // dispatch(clearNotification)
      }
    });
    getUserOnInit().then((u) => {
      if (u) {
        //console.log(u);

        dispatch(setUser(u));
        dispatch(setToken(u.signInUserSession.idToken.jwtToken));
      }
      //console.log("2nd");
    });
    setLoading(false);
  }, []);

  const validateUserAuthToken = () => {
    axios
      .get(`${BASE_URL}/api/testuser`, {
        headers: { idtoken: auth.token, liftedapp: "leagues" },
      })
      .then((res) => {
        if (res.status === 200) {
          //console.log(res.data.projects);
          // setListings(res.data.projects);
          console.log(res);
        }
      });
  };

  const handleLogout = async () => {
    // history.push("/login");
    Auth.signOut().then((res) => {
      console.log("signed out");
    });
  };

  const changeTheme = () => {
    console.log(mode);

    if (mode === "dark") {
      dispatch(setMode("light"));
    }
    if (mode === "light") {
      dispatch(setMode("dark"));
    }
  };

  return (
    <AppContainer>
      <Router basename="/">
        <ToastContainer position="bottom-right" />
        <Switch>
          <Route path="/" exact>
            <Home
              changeTheme={changeTheme}
              auth={auth}
              handleLogout={handleLogout}
              validateUserAuthToken={validateUserAuthToken}
            />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin" render={(matchProps) =>
                auth.token ? (
                  <AdminPanel {...matchProps} />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: matchProps.location },
                    }}
                  />
                )
              }/>
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
