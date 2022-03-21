// ------------------------------------------------------------
// Markdown section
function mdSection(name, content, start, end) {
  this.name = name;
  this.content = content;
  this.start = start; // Start and end positions in original markdown
  this.end = end;
}

// ------------------------------------------------------------
function logAndExit(str, releaseName, sectionName) {
  console.log(
    "Couldn't find '" +
      str +
      "' in original markdown for release " +
      releaseName +
      "(" +
      sectionName +
      ")"
  );
  process.exit(1);
}

// ------------------------------------------------------------
function interpretSection(
  md,
  releaseName,
  sectionName,
  startPos,
  startTag,
  endTag
) {
  var start = md.indexOf(startTag, startPos);
  if (start == -1) logAndExit(startTag, releaseName, sectionName);
  var startTagEnd = "-->";
  start = md.indexOf(startTagEnd, start);
  if (start == -1) logAndExit(startTagEnd, aRelease.name);
  start += 3;

  var end = md.indexOf(endTag, start);
  if (end == -1) logAndExit(str, releaseName, sectionName);
  var content = md.substring(start, end).trim() + "\n";

  return new mdSection(sectionName, content, start, end);
}

// ------------------------------------------------------------
// To be able to compare old and new markdown,
// we must first copy the editable sections from the old markdown.
function breakOriginalMarkdownIntoSections(aRelease) {
  var md = aRelease.originalMarkdown;

  // From start of text to start of INSTALLATION.
  var str = "<!--rntype01-start";
  var end = md.indexOf(str);
  if (end == -1) logAndExit(str, aRelease.name);
  var section = new mdSection("intro", md.substring(0, end), 0, end); //#JAN
  aRelease.originalSections.push(section);

  // From end of INSTALLATION to start of END-OF-LIFE
  var section = interpretSection(
    md,
    aRelease.name,
    "end-of-life",
    end,
    "<!--rntype01-end",
    "<!--rntype03-start"
  );
  aRelease.originalSections.push(section);

  // From end of END-OF-LIFE to start of DEPRECATED
  var section = interpretSection(
    md,
    aRelease.name,
    "deprecated",
    end,
    "<!--rntype03-end",
    "<!--rntype04-start"
  );
  aRelease.originalSections.push(section);

  // From end of DEPRECATED to start of BREAKING
  var section = interpretSection(
    md,
    aRelease.name,
    "breaking",
    end,
    "<!--rntype04-end",
    "<!--rntype05-start"
  );
  aRelease.originalSections.push(section);

  // From end of BREAKING to start of MAJOR
  var section = interpretSection(
    md,
    aRelease.name,
    "major",
    end,
    "<!--rntype05-end",
    "<!--rntype06-start"
  );
  aRelease.originalSections.push(section);

  // From end of MAJOR to start of MINOR
  var section = interpretSection(
    md,
    aRelease.name,
    "minor",
    end,
    "<!--rntype06-end",
    "<!--rntype07-start"
  );
  aRelease.originalSections.push(section);

  // From end of MINOR to start of BUGS (= resolved issues)
  var section = interpretSection(
    md,
    aRelease.name,
    "bugs",
    end,
    "<!--rntype07-end",
    "<!--rntype08-start"
  );
  aRelease.originalSections.push(section);

  // From end of BUGS (= resolved issues) to start of ISSUES
  var section = interpretSection(
    md,
    aRelease.name,
    "issues",
    end,
    "<!--rntype08-end",
    "<!--rntype09-start"
  );
  aRelease.originalSections.push(section);

  // From end of ISSUES to CHANGELOG tag
  var section = interpretSection(
    md,
    aRelease.name,
    "changelog",
    end,
    "<!--rntype09-end",
    "<!--changelog"
  );
  aRelease.originalSections.push(section);
}

module.exports = { breakOriginalMarkdownIntoSections };
