//
// Read release notes from Actio and populate markdown files on docs.genus.no,
// folder developers/release-notes and files like release-notes-2017.5.md
//
// The program is to be run as a scheduled background task in Azure.
// For more info: https://docs.microsoft.com/en-us/azure/app-service/web-sites-create-web-jobs
//  
// Algorithm:
//
// Read all versions from Actio (2017.1, 2017.2 etc).
// For each version, starting with the latest one:
//   Read all approved release notes for this version.
//   
// 

var request = require('request'); // https://github.com/request/request

// https://github.com/request/request
// http://services.groupkt.com/country/get/all
request('https://actio.genus.net/genus/api/public/rest/release/releaseNotes?Release=2017.3&ReleaseNoteTypeID=8',
  function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);
  }
);

// var releaseNotes = JSON.parse(releaseNotesString);

