// ------------------------------------------------------------
// The expression [^\x00-\x7E] matches any character NOT in the codepoint
// range 0x00 to 0x7E (127, the tidle '~' character), all others will be removed.
function removeNonAsciiChars(str) {
  return str.replace(/[^\x00-\x7E]+/g, "");
}

module.exports = { removeNonAsciiChars };
