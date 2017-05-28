## Character String Requirements

Any data in your database(s) with data type _Character or String_ or _Textual Large Object_ must be in accordance with the valid set of characters as given in the XML 1.0 specification.

The only valid characters with ASCII values below 32 (space) is TAB (9), CR (13) and LF (10). Note that there also exists invalid characters above ASCII 32.

The usage of any invalid characters will result in a run-time error in Genus App Platform.