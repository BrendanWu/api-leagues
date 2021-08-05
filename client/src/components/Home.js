import React from "react";
import FlexDiv from "../design-system/FlexDiv";
import Button from "../design-system/Button";
import Container from "../design-system/Container";
import { Link } from "react-router-dom";

import useBreakpoint from "../hooks/useBreakpoint";
const Home = ({changeTheme, auth, handleLogout, validateUserAuthToken}) => {
    // console.log(auth);

  const breakpoint = useBreakpoint()
  React.useEffect(()=>{console.log(breakpoint)},[breakpoint])
  

  return (
    <Container>
      <FlexDiv justify="space-between" align="center">
        <FlexDiv>
{/* <Icon size={64} tooltip="aasdf" variant="r"/> */}
        <h3>LEAGUES API</h3>
        </FlexDiv>
        {!auth.loggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
          {breakpoint !== 'xs' && (
    <FlexDiv justify="flex-end" align="center">
    <Link to="/admin">Admin</Link>
  <Button
    onClick={() => {
      changeTheme();
    }}
    label="Change Theme"
  />
  <Button
    onClick={() => {
      handleLogout();
    }}
    label="Logout"
  />
</FlexDiv>

          )}
      </>
        )}
      </FlexDiv>
     
    </Container>
  );
};

export default Home;
