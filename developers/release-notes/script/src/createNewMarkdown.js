const { removeNonAsciiChars } = require("./utils/removeNonAsciiChars");

// ------------------------------------------------------------
function releaseNotesToStr(rNotes) {
  if (rNotes.length == 0) return "";

  var str = "";
  var subjectLine = "";

  for (var r = 0; r < rNotes.length; r++) {
    str += "<!--ID " + rNotes[r].id + " -->\n";
    subjectLine = "**#" + rNotes[r].no + " " + rNotes[r].subject + "**";
    if (rNotes[r].products != null && rNotes[r].products != "")
      subjectLine += " (" + rNotes[r].products + ")";
    str += subjectLine + "\n";
    if (rNotes[r].description) str += "\n" + rNotes[r].description + "\n\n";
    else str += "\n";
  }
  return str;
}

function createNewMarkdown(aRelease) {
  const startTagSuffix =
    " DO NOT CHANGE THESE TAGS. ANY CHANGES BELOW WILL BE OVERWRITTEN.-->\n";

  const endTagSuffix =
    " DO NOT CHANGE THESE TAGS. ANY CHANGES ABOVE WILL BE OVERWRITTEN.-->\n";

  // Copy INTRO from original markdown.
  var aSection = aRelease.findSection("intro");
  aRelease.newMarkdown = aSection.content;

  var rNotes;
  var rNotesStr;

  // INSTALLATION / UPGRADE
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 1);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown +=
    "<!--rntype01-start INSTALLATION / UPGRADE." + startTagSuffix;
  if (rNotesStr != "") {
    aRelease.newMarkdown += "\nSee also the following notes.\n\n";
    aRelease.newMarkdown += rNotesStr;
  } else aRelease.newMarkdown += "\n"; // Not necessary to add anything special if no release notes of this kind.
  aRelease.newMarkdown +=
    "<!--rntype01-end   INSTALLATION / UPGRADE." + endTagSuffix;

  // Copy text inbetween INSTALLATION / UPGRADE and END-OF-LIFE from original markdown.
  aSection = aRelease.findSection("end-of-life");
  aRelease.newMarkdown += aSection.content;

  // END-OF-LIFE
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 3);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype03-start END-OF-LIFE." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else
    aRelease.newMarkdown +=
      "There are no end-of-life functionality identified in this release.\n";
  aRelease.newMarkdown += "<!--rntype03-end   END-OF-LIFE." + endTagSuffix;

  // Copy text inbetween END-OF-LIFE AND DEPRECATED from original markdown.
  aSection = aRelease.findSection("deprecated");
  aRelease.newMarkdown += aSection.content;

  // DEPRECATED
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 4);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype04-start DEPRECATED." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else
    aRelease.newMarkdown +=
      "There is no deprecated functionality in this release.\n";
  aRelease.newMarkdown += "<!--rntype04-end   DEPRECATED." + endTagSuffix;

  // Copy text inbetween DEPRECATED AND BREAKING from original markdown.
  aSection = aRelease.findSection("breaking");
  aRelease.newMarkdown += aSection.content;

  // BREAKING
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 5);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype05-start BREAKING." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else
    aRelease.newMarkdown += "There are no breaking changes in this release.\n";
  aRelease.newMarkdown += "<!--rntype05-end   BREAKING." + endTagSuffix;

  // Copy text inbetween BREAKING and MAJOR from original markdown.
  aSection = aRelease.findSection("major");
  aRelease.newMarkdown += aSection.content;

  // MAJOR
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 6);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype06-start MAJOR." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else
    aRelease.newMarkdown +=
      "There are no major new functionality in this release.\n";
  aRelease.newMarkdown += "<!--rntype06-end   MAJOR." + endTagSuffix;

  // Copy text inbetween MAJOR and MINOR from original markdown.
  aSection = aRelease.findSection("minor");
  aRelease.newMarkdown += aSection.content;

  // MINOR
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 7);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype07-start MINOR." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else
    aRelease.newMarkdown +=
      "There are no minor new functionality in this release.\n";
  aRelease.newMarkdown += "<!--rntype07-end   MINOR." + endTagSuffix;

  // Copy text inbetween MINOR and BUGS (= RESOLVED ISSUES) from original markdown.
  aSection = aRelease.findSection("bugs");
  aRelease.newMarkdown += aSection.content;

  // BUGS (= RESOLVED ISSUES)
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 8);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown +=
    "<!--rntype08-start RESOLVED ISSUES." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else
    aRelease.newMarkdown += "There are no resolved issues in this release.\n";
  aRelease.newMarkdown += "<!--rntype08-end   RESOLVED ISSUES." + endTagSuffix;

  // Copy text inbetween BUGS (= RESOLVED ISSUES) and ISSUES from original markdown.
  aSection = aRelease.findSection("issues");
  aRelease.newMarkdown += aSection.content;

  // ISSUES
  rNotes = aRelease.releaseNotes.filter((rn) => rn.type == 9);
  rNotesStr = releaseNotesToStr(rNotes);
  aRelease.newMarkdown += "<!--rntype09-start KNOWN ISSUES." + startTagSuffix;
  if (rNotesStr != "") aRelease.newMarkdown += rNotesStr;
  else aRelease.newMarkdown += "There are no known issues in this release.\n";
  aRelease.newMarkdown += "<!--rntype09-end   KNOWN ISSUES." + endTagSuffix;

  // Copy text inbetween ISSUES and CHANGELOG from original markdown.
  aSection = aRelease.findSection("changelog");
  aRelease.newMarkdown += aSection.content;

  // CHANGE LOG (it is really just an end tag for the whole document).
  aRelease.newMarkdown +=
    "<!--changelog CHANGELOG. DO NOT CHANGE THIS TAG. ANY CHANGES BELOW WILL BE DELETED.-->\n";

  // Code norwegian letters as html codes, since they are converted automatically by GitHub,
  // which results in a compare mismatch, when new markdown is compared with the old (from GitHub).
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/æ/g, "&aelig;");
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/ø/g, "&oslash;");
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/å/g, "&aring;");
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/Æ/g, "&Aelig;");
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/Ø/g, "&Oslash;");
  aRelease.newMarkdown = aRelease.newMarkdown.replace(/Å/g, "&Aring;");

  // See the other usage of removeNonAsciiChars for comments.
  aRelease.newMarkdown = removeNonAsciiChars(aRelease.newMarkdown);
}

module.exports = { createNewMarkdown };
