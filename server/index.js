const serverless = require("serverless-http");
const express = require("express");
const app = express();
const airtable = require("./controllers/airtable");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.set("Cache-control", "public, max-age=60");
  next();
});

const queryData = async () => {
  const response = await Promise.all([
    airtable.getAboutData(),
    airtable.getExperienceData(),
  ]);

  return { about: response[0], experiences: response[1] };
};

app.get("/", async (req, res) => {
  try {
    result = await queryData();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports.handler = serverless(app);
