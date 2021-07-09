// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import React from 'react';
import { Auth, Hub } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { clearAuth, clearToast, setToken, setUser } from './store/actions';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'

function App() {

  const notificationToast = useSelector((state)=>state.notification.toast);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch()

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
      clearToast()
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
  React.useEffect(() => {
    // setLoading(true);
    Hub.listen("auth", (res) => {
      if (res.payload.event === "signIn") {
        const u = res.payload.data;

        dispatch(setUser(u));
        dispatch(setToken(u.signInUserSession.idToken.jwtToken));
        toast("Welcome to SureMortgage Capital", {
          type: "dark",
        });
      }
      if (res.payload.event === "signOut") {
        dispatch(clearAuth());
        toast("User succesfully logged out", {
          type: "dark",
        });
      }
    });
    getUserOnInit().then((u) => {
      if (u) {
        //console.log(u);

        dispatch(setUser(u));
        dispatch(setToken(u.signInUserSession.idToken.jwtToken));
        toast("Welcome to SureMortgage Capital", {
          type: "dark",
        });
      } else {
        dispatch(clearAuth());
      }
      //console.log("2nd");
    });
    setLoading(false);
  }, []);

  const handleLogout = async () => {

    // history.push("/login");
    Auth.signOut().then((res)=>{

      console.log("signed out");
    });
  };

  return (
    <div>
      <Router basename="/">
        <ToastContainer position="bottom-right"/>
        <Switch>

        <Route path="/" exact>

        <h3>Leagues api.</h3>
        <Link to="/login">Login</Link>
        <button onClick={()=>{handleLogout()}}>Logout</button>
        </Route>
        <Route path="/login">
    <Login/>
          </Route>
   </Switch>
      </Router>
    </div>
  );
}

export default App;
