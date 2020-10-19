const serverless = require("serverless-http");
const express = require("express");
const app = express();
const s3 = require("./controllers/s3");
const helper = require("./controllers/helper");
const airtable = require("./controllers/airtable");
const ttl = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const queryData = async (bucketKeys) => {
  const aboutObj = await airtable.getAboutData();
  const exprObj = await airtable.getExperienceData();
  const result = { about: aboutObj, experiences: exprObj };

  await s3.addBucketObject(result);

  return result;
};

app.get("/", async (req, res) => {
  try {
    let bucketKeys = await s3.allBucketKeys();
    let modified = false;

    let result = {};
    if (bucketKeys.length == 0) {
      result = await queryData(bucketKeys);
      modified = true;
    } else {
      let lastQuery = parseInt(bucketKeys[0].split(".")[0]);

      if (helper.getTimeInMs() - ttl > lastQuery) {
        result = await queryData(bucketKeys);
        modified = true;
      } else {
        result = await s3.readObject(bucketKeys[0]);
      }
    }

    res.send(result);

    if (modified) {
      for (let i = 0; i < bucketKeys.length; i++) {
        await s3.deleteBucketObject(bucketKeys[i]);
      }
      await s3.addBucketObject(result);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// app.listen(8080);

module.exports.handler = serverless(app);
