const express = require("express");
const moment = require("moment");
const app = express();
const port = process.env.PORT || 3000;

app.get("/get_info", (req, res) => {
  // Get query parameters from the request URL
  const slackName = req.query.slackName || "Dkingony";
  const track = req.query.track || "Backend Development";

  // Current day of the week
  const currentDayOfWeek = moment().format("dddd");

  // Current UTC time with validation of +/-2 hours
  const currentUTCTime = new Date().toISOString();

  // GitHub URL of the file being run and full source code URL
  const githubFileURL = "https://github.com/Dkingony609/hng-stage-one";
  const githubSourceCodeURL =
    "https://github.com/Dkingony609/hng-stage-one/blob/master/app.js";

  // Response JSON object
  const response = {
    slackName,
    currentDayOfWeek,
    currentUTCTime,
    track,
    githubFileURL,
    githubSourceCodeURL,
    statusCode: "200",
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
