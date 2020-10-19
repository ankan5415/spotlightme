const AWS = require("aws-sdk");
const helper = require("./helper");

const Bucket = process.env.BUCKET;

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
});

const s3 = new AWS.S3();

const readObject = async (obj) => {
  let params = {
    Bucket: Bucket,
    Key: obj,
  };
  let res = await s3.getObject(params).promise();
  return JSON.parse(res.Body);
};

const addBucketObject = async (body) => {
  let params = {
    Bucket: Bucket,
    Key: `${helper.getTimeInMs()}.json`,
    Body: JSON.stringify(body),
  };
  let res = await s3.upload(params).promise();
  return res;
};

const deleteBucketObject = async (key) => {
  let params = { Bucket: Bucket, Key: key };
  let res = await s3.deleteObject(params).promise();
  return res;
};

const allBucketKeys = async () => {
  const params = {
    Bucket: Bucket,
  };

  var keys = [];
  for (;;) {
    var data = await s3.listObjects(params).promise();

    data.Contents.forEach((elem) => {
      keys = keys.concat(elem.Key);
    });

    if (!data.IsTruncated) {
      break;
    }
    params.Marker = data.NextMarker;
  }

  return keys;
};

module.exports = {
  readObject,
  allBucketKeys,
  deleteBucketObject,
  addBucketObject,
};
