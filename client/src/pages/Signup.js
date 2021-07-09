import React from "react";
import {
  AmplifySignUp,
  AmplifyAuthenticator,
} from "@aws-amplify/ui-react";
import FlexDiv from "../design-system/FlexDiv";
// import SignUpContainer from "../components/SignUpContainer"

const Signup = () => {
  return (

    <div className="container">
      <FlexDiv justify="center" align="center" style={{ margin: 32,minHeight:500}}>
        <AmplifyAuthenticator>
          <AmplifySignUp />
        </AmplifyAuthenticator>
      </FlexDiv>
    </div>
  );
};

export default Signup;
