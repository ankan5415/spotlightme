const serverless = require('serverless-http');
const express = require('express')
const Airtable = require('airtable');
const app = express()
const base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base('appez3evloomAtLPX');

app.get('/', function (req, res) {
//  let obj = []
  base('About').select({
    view: 'Grid view'
  }).firstPage((err, records) => {
      if (err) { console.error(err); return; }
      let obj = records.map(record => {
          return { 
            name: record.get("Name"),
            type: record.get("Type"),
            display: record.get("Display")
      }});


    });
  });
  
module.exports.handler = serverless(app);