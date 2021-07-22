const express = require('express');
const scrapeWebsiteElement = require('../services/scrapeWebsiteElement').scrapeWebsiteElement;

const router = express.Router();

router.post("/scrapeWebsiteElement", async(req,res)=> {
    const {url, maxQueries, parentQuery, pathToChild} = req.body;
    console.log(req.body);
    const scraped = await scrapeWebsiteElement(url,parentQuery,pathToChild,maxQueries)
    try {
        res.status(200).json({scraped})
        
    } catch (error) {
        res.json(error)
    }

  })


module.exports = router;