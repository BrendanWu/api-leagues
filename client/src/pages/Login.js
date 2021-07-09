import React, { useEffect } from "react";
import { AmplifySignIn, AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useHistory, useLocation } from "react-router-dom";
import FlexDiv from "../design-system/FlexDiv";

const Login = () => {
  let history = useHistory();
  let location = useLocation();

  let path = location.state ? location.state.from : "/";
  useEffect(() => {
    const getUser = async function () {
      try {
        return await Auth.currentAuthenticatedUser();
      } catch (error) {
        return;
      }
    };
    getUser().then((res) => {
      if (res) {
        history.replace(path);
        // history.replace(from);
      } else {
        //console.log("Not logged in");
      }
    });
  });
  return (
    <div className="container">
      <FlexDiv justify="center" style={{ margin: 32, minHeight: 500 }}>
        <AmplifyAuthenticator>
          <AmplifySignIn />
        </AmplifyAuthenticator>
      </FlexDiv>
    </div>
  );
};

export default Login;
