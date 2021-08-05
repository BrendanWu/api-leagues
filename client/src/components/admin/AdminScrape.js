import React from "react";
import FlexDiv from "../../design-system/FlexDiv";
import makeApiRequest from "../../services/makeApiRequest";
import { Input } from "../../design-system/Input";
import { Icon } from "../../design-system/Icon";
import Button from "../../design-system/Button";
const AdminScrape = ({ auth }) => {
  const [url, setUrl] = React.useState("https://urbantoronto.ca");
  const [parentQuery, setParentQuery] = React.useState(".feed-article-title");
  const [pathToChild, setPathToChild] = React.useState("firstChild.innerText");
  const [columnName, setColumnName] = React.useState();
  const [maxQueries, setMaxQueries] = React.useState(1);
  const [scraped, setScraped] = React.useState([]);
  const [tableRows, setTableRows] = React.useState([]);
  const [tableHeaders, setTableHeaders] = React.useState([]);

  // const exampleTableRow = {column1:12, column2:1232, column3:323,column4:null, column5:null}
    React.useEffect(()=>{

        for (let index = 0; index < tableRows.length; index++) {
            const row = tableRows[index]
            for (const c of tableHeaders) {
                if(!Object.keys(row).includes(c)){
                    row[c] = null;
                }
                
            }
            
        }
    },[tableRows, tableHeaders])
  const handleScrape = async () => {
    const body = { url, maxQueries, parentQuery, pathToChild };

    const response = await makeApiRequest(
      "scraper/scrapeWebsiteElement",
      "POST",
      body,
      auth.token
    );
    console.log(response);
    if (response.data.scraped.length) {
      setScraped(response.data.scraped);
      if (!tableHeaders.includes(columnName))
        setTableHeaders([...tableHeaders, columnName]);
      const rows = [];
      for (let index = 0; index < response.data.scraped.length; index++) {
        const row = {};
        //const element = [index];
        console.log(columnName);
        for (let i = 0; i < tableHeaders.length; i++) {
          row[tableHeaders[i]] = null;
        }
        row[columnName] = response.data.scraped[index];
        rows.push(row);
      }
      const trs = [...tableRows, ...rows];
      setTableRows(trs);
      console.log(trs);
      //   const row = {}
      //   row[columnName] = [scraped]
    }
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleColumnName = (e) => {
    setColumnName(e.target.value);
  };
  const handlePathToChild = (e) => {
    setPathToChild(e.target.value);
  };
  const handleParentQuery = (e) => {
    setParentQuery(e.target.value);
  };
  const handleMaxQueries = (e) => {
    setMaxQueries(e.target.value);
  };
  return (
    <FlexDiv vert>
      <FlexDiv vert>
        {/* <h3>Admin scrape route</h3> */}
        <FlexDiv>
          <Input altTheme label="url" value={url} onChange={handleUrl} />
          <Input
            altTheme
            label="columnName"
            value={columnName}
            onChange={handleColumnName}
          />
          <Input
            altTheme
            label="parentQuery"
            value={parentQuery}
            onChange={handleParentQuery}
          />
          <Input
            altTheme
            label="pathToChild"
            value={pathToChild}
            onChange={handlePathToChild}
          />
          <Input
            altTheme
            label="maxQueries"
            value={maxQueries}
            onChange={handleMaxQueries}
          />
        </FlexDiv>
        <Button label="Scrape" onClick={handleScrape} />
      </FlexDiv>

      <FlexDiv vert style={{background:"green"}}>
        {/* {scraped.length &&
          scraped.map((d, i) => {
            return <FlexDiv>{d}</FlexDiv>;
          })} */}
        <table>
          <tr>
            {tableHeaders &&
              tableHeaders.map((h, i) => {
                return <th>{h}</th>;
              })}
          </tr>
          {tableRows &&
            tableRows.length > 0 &&
            tableRows.map((row, i) => {
              return (
                <tr>
                  {Object.values(row).map((col, i) => {
                    return <td style={{border:"1px solid black"}}>{col}</td>;
                  })}
                </tr>
              );
            })}
        </table>
      </FlexDiv>
    </FlexDiv>
  );
};

export default AdminScrape;
