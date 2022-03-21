var moment = require("moment");
var request = require("request");

// ------------------------------------------------------------
function callOperationsSampleRestService() {
  request.post({
    url: "https://operations-desktop.genus.net/genus/api/public/rest/probe/sample",
    json: {
      sampled_by: "update-release-notes.js",
      sample_code: "UPDATE_RELEASE_NOTES",
      value: 1,
      sample_datetime: moment().format("YYYY-MM-DD HH:mm:ss"),
      version: 7,
    },
  });
}

module.exports = { callOperationsSampleRestService };
