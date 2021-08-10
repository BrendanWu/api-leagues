import React from "react";
import FlexDiv from "../design-system/FlexDiv";
import Button from "../design-system/Button";
import Container from "../design-system/Container";
import { Link } from "react-router-dom";
import PostView from "./admin/components/PostView"
import useBreakpoint from "../hooks/useBreakpoint";
import makeApiRequest from "../services/makeApiRequest";
const Home = ({ changeTheme, auth, handleLogout, validateUserAuthToken }) => {
  // console.log(auth);

  const [posts, setPosts] = React.useState([])

  React.useEffect(async () => {
    const response = await makeApiRequest(
      `blog/getPostsByCategory/${"homePage"}`,
      "GET",
      {},
      auth.token
    )
    console.log(response)
    if (response.data.success) {

      setPosts(response.data.posts)
    }

  }, [])

  const breakpoint = useBreakpoint()
  React.useEffect(() => { console.log(breakpoint) }, [breakpoint])


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
      <img src="https://i.ytimg.com/vi/_7ce-YnCRC4/maxresdefault.jpg" style={{ width: "100%" }} />
      <FlexDiv card vert padding={16}>
        <h1>Welcome to Leagues Toronto</h1>
        <FlexDiv>
          <Button label="Start a team" />
          <Button label="Join a team" />

        </FlexDiv>
      </FlexDiv>
      <FlexDiv vert>
        {posts.map((post, i) => {
          return <PostView post={post} />
        })}
      </FlexDiv>
    </Container>
  );
};

export default Home;
