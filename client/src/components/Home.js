import React from "react";
import FlexDiv from "../design-system/FlexDiv";
import Button from "../design-system/Button";
import Container from "../design-system/Container";
import { Link } from "react-router-dom";
import makeApiRequest from "../services/makeApiRequest";
import { Input } from "../design-system/Input";
import { Icon } from "../design-system/Icon";
const Home = ({changeTheme, auth, handleLogout, validateUserAuthToken}) => {
    console.log(auth);
  const [url, setUrl] = React.useState('https://urbantoronto.ca')
  const [parentQuery, setParentQuery] = React.useState('.feed-article-title')
  const [pathToChild, setPathToChild] = React.useState('firstChild.innerText')
  const [maxQueries, setMaxQueries] = React.useState(1)
  const [scraped, setScraped] = React.useState([])

  const handleScrape = async ()=>{
   
    const body = {url,maxQueries,parentQuery,pathToChild}

    const response = await makeApiRequest("scraper/scrapeWebsiteElement", "POST", body, auth.token)
    console.log(response);
    if(response.data.scraped.length) {

      setScraped(response.data.scraped)
    }
  }

  const handleUrl = (e) => {
    setUrl(e.target.value)
  }
  const handlePathToChild = (e) => {
    setPathToChild(e.target.value)
  }
  const handleParentQuery = (e) => {
    setParentQuery(e.target.value)
  }
  const handleMaxQueries = (e) => {
    setMaxQueries(e.target.value)
  }

  return (
    <Container>
      <FlexDiv justify="space-between" align="center">
        <FlexDiv>
<Icon size={64} tooltip="aasdf" variant="r"/>
        <h3>LEAGUES API</h3>
        </FlexDiv>
        {!auth.loggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
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
      </FlexDiv>
      <FlexDiv vert>
        <h3>Courts near me</h3>
        <FlexDiv vert>
          <Input lines={4} altTheme label="url" value={url} onChange={handleUrl}/>
          <Input altTheme label="parentQuery" value={parentQuery} onChange={handleParentQuery}/>
          <Input altTheme label="pathToChild" value={pathToChild} onChange={handlePathToChild}/>
          <Input altTheme label="maxQueries" value={maxQueries} onChange={handleMaxQueries}/>
        </FlexDiv>
        <Button label="Scrape" onClick={handleScrape}/>
      </FlexDiv>
      <FlexDiv vert>
        {scraped.length && scraped.map((d,i)=>{
          return <FlexDiv>{d}</FlexDiv>

        })}
        {/* <p>Validate user auth token</p>
        <Button onClick={validateUserAuthToken} label="Validate" /> */}
      </FlexDiv>
    </Container>
  );
};

export default Home;
