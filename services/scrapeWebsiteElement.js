const puppeteer = require("puppeteer");
const fs = require("fs");
const async = require("async");

const scrapeWebsiteElement = async (
  url,
  parentQuery,
  pathToChild,
  maxQueries
) => {
    try {
        let browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            headless: false,
          });
          let page = await browser.newPage();
        
          await page.goto(url, {
            waitUntil: "networkidle0",
          });
        
          let listings = [];
          let queries = maxQueries; //set max page queries
          let isLastPage = false;
          //   console.log(pathToChild, parentQuery);
        
          const pathSplit = pathToChild.split(".");
          console.log(pathSplit);
        
          for (let index = 0; index < 1; index++) {
            // console.log(`Scanning page ${index}`);
            const data = await page.evaluate(
              (parentQuery, pathSplit) => {
                console.log("inside eval");
                console.log(parentQuery);
                // console.log(pathToChild);
                let d = Array.from(document.querySelectorAll(parentQuery), (e) => {
                  let x = e;
                  for (const c of pathSplit) {
                    x = x[c];
                  }
                  return x;
                });
                return d;
              },
              parentQuery,
              pathSplit
            );
            listings.push(...data);
          }
          console.log(listings);
        
          return listings;
    } catch (error) {
        return error;
    }
 
};

module.exports.scrapeWebsiteElement = scrapeWebsiteElement;
