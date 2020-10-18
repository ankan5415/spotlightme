const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base(
  "appez3evloomAtLPX"
);

const getAboutData = () => {
  return new Promise((res, rej) => {
    base("About")
      .select({
        view: "Grid view",
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          rej(err);
        }
        let obj = records.map((record) => {
          return {
            name: record.get("Name"),
            type: record.get("Type"),
            display: record.get("Display"),
          };
        });

        res(obj);
      });
  });
};

const getExperienceData = () => {
  return new Promise((res, rej) => {
    base("Experience")
      .select({
        view: "Grid view",
      })
      .firstPage((err, records) => {
        if (err) {
          console.error(err);
          rej(err);
        }
        let obj = records.map((record) => {
          return {
            name: record.get("Name"),
            type: record.get("Type"),
            role: record.get("Role"),
            experience: record.get("Experience"),
            location: record.get("Location"),
            awards: record.get("Awards"),
            technologies: record.get("Technologies"),
            startDate: record.get("Start Date"),
            end: record.get("End Date"),
            status: record.get("Status"),
            display: record.get("Display"),
            link: record.get("Link"),
          };
        });

        res(obj);
      });
  });
};

module.exports = {
  getExperienceData,
  getAboutData,
};
