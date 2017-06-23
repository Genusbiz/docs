# Value Types

## Boolean Type

Represents a Boolean value. Instances of this type have values of either true or false.

The Boolean type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

</tbody>

</table>

* * *

## Guid Type

Represents a globally unique identifier (GUID). A GUID is a 128-bit integer (16 bytes) that can be used across all computers and networks wherever a unique identifier is required.

The Guid type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**new**</td>

<td>

Guid.new(_value_)

Creates a new instance of the Guid class using the value represented by the specified string.

Return Type: Guid

<dl>

<dt>value</dt>

<dd>

Type: String

A String that contains a GUID in one of the following formats ('d' represents a hexadecimal digit whose case is ignored): "dddddddddddddddddddddddddddddddd", "dddddddd-dddd-dddd-dddd-dddddddddddd", or "{dddddddd-dddd-dddd-dddd-dddddddddddd}".

</dd>

</dl>

</td>

</tr>

<tr>

<td>**newGuid**</td>

<td>

Guid.newGuid

Creates a new instance of the Guid class with a new, random value.

Return Type: Guid

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString(_format_)

Returns a string representation of the value of this Guid instance, according to the provided format specifier. The following list shows the accepted format specifiers for the format parameter. "0" represents a digit; hyphens ("-"), braces ("{", "}"), and parentheses ("(", ")") appear as shown: "N" (32 digits): 00000000000000000000000000000000 "D" (32 digits separated by hyphens): 00000000-0000-0000-0000-000000000000 "B" (32 digits separated by hyphens, enclosed in braces): {00000000-0000-0000-0000-000000000000} "P" (32 digits separated by hyphens, enclosed in parentheses): (00000000-0000-0000-0000-000000000000) "X" (Four hexadecimal values enclosed in braces, where the fourth value is a subset of eight hexadecimal values that is also enclosed in braces): {0x00000000,0x0000,0x0000,{0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00}}.

Return Type: String

The value of this Guid, represented as a series of lowercase hexadecimal digits in the specified format.

<dl>

<dt>format</dt>

<dd>

Type: String

A single format specifier that indicates how to format the value of this Guid. The format parameter can be "N", "D", "B", "P", or "X". If format is null or an empty string (""), "D" is used.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## Integer Type

Represents a 32-bit signed integer, with values ranging from negative 2,147,483,648 through positive 2,147,483,647.

The Integer type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**abs**</td>

<td>

_instance._abs

Returns the absolute value of the number. The absolute value of a number is the number without its sign.

Return Type: Integer

</td>

</tr>

<tr>

<td>**sqrt**</td>

<td>

_instance._sqrt

Returns a positive square root of the number.

Return Type: Real

</td>

</tr>

<tr>

<td>**toReal**</td>

<td>

_instance._toReal

Converts the 32 bit integer value to a floating-point value.

Return Type: Real

A floating-point value based on the 32 bit integer value.

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString(_format__, culture_)

Converts the numeric value to its equivalent string representation using the specified format and culture-specific format information.

Return Type: String

The string representation of the value as specified by format and provider.

<dl>

<dt>format</dt>

<dd>

Type: String

A numeric format string. For more details, see the MSDN articles "Standard Numeric Format Strings" (http://msdn.microsoft.com/library/dwhawy9k) and "Custom Numeric Format Strings" (http://msdn.microsoft.com/library/0c899ak8).

</dd>

<dt>culture</dt>

<dd>

Type: String

The culture name. A NULL value or empty string is interpreted as InvariantCulture, while a single dash "-" is interpreted as CurrentCulture. Otherwise, the value indicates the name of a culture. culture is not case-sensitive. For a list of predefined culture names, see the National Language Support (NLS) API Reference (http://go.microsoft.com/fwlink/?LinkId=200048).

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## LargeInteger Type

Represents a 64-bit signed integer, with values ranging from negative 9,223,372,036,854,775,808 through positive 9,223,372,036,854,775,807.

The LargeInteger type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**toInteger**</td>

<td>

_instance._toInteger

Converts the 64 bit integer value to a 32 bit integer.

Return Type: Integer

A 32 bit integer value or null if the 64 bit integer was not successfully converted to a 32 bit integer.

</td>

</tr>

<tr>

<td>**toReal**</td>

<td>

_instance._toReal

Converts the 64 bit integer value to a floating-point value.

Return Type: Real

A floating-point value based on the 64 bit integer value.

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString(_format__, culture_)

Converts the numeric value to its equivalent string representation using the specified format and culture-specific format information.

Return Type: String

The string representation of the value as specified by format and provider.

<dl>

<dt>format</dt>

<dd>

Type: String

A numeric format string. For more details, see the MSDN articles "Standard Numeric Format Strings" (http://msdn.microsoft.com/library/dwhawy9k) and "Custom Numeric Format Strings" (http://msdn.microsoft.com/library/0c899ak8).

</dd>

<dt>culture</dt>

<dd>

Type: String

The culture name. A NULL value or empty string is interpreted as InvariantCulture, while a single dash "-" is interpreted as CurrentCulture. Otherwise, the value indicates the name of a culture. culture is not case-sensitive. For a list of predefined culture names, see the National Language Support (NLS) API Reference (http://go.microsoft.com/fwlink/?LinkId=200048).

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## Real Type

Represents a 64-bit double-precision floating-point number with values ranging from negative 1.79769313486232e308 to positive 1.79769313486232e308.

The Real type exposes the following members.

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**abs**</td>

<td>

_instance._abs

Returns the absolute value of the number. The absolute value of a number is the number without its sign.

Return Type: Real

</td>

</tr>

<tr>

<td>**ceiling**</td>

<td>

_instance._ceiling

Returns the smallest whole number (64 bit integer) greater than or equal to this number.

Return Type: LargeInteger

The smallest whole number (64 bit integer) greater than or equal to this number.

</td>

</tr>

<tr>

<td>**ceilingInteger**</td>

<td>

_instance._ceilingInteger

Returns the smallest whole number (32 bit integer) greater than or equal to this number. WARNING: Please consider potential integer overflow.

Return Type: Integer

The smallest whole number (32 bit integer) greater than or equal to this number.

</td>

</tr>

<tr>

<td>**floor**</td>

<td>

_instance._floor

Returns the largest whole number (64 bit integer) less than or equal to this number.

Return Type: LargeInteger

The largest whole number (64 bit integer) less than or equal to this number.

</td>

</tr>

<tr>

<td>**floorInteger**</td>

<td>

_instance._floorInteger

Returns the largest whole number (32 bit integer) less than or equal to this number. WARNING: Please consider potential integer overflow.

Return Type: Integer

The largest whole number (32 bit integer) less than or equal to this number.

</td>

</tr>

<tr>

<td>**log10**</td>

<td>

_instance._log10

Returns the base-10 logarithm of a number.

Return Type: Real

</td>

</tr>

<tr>

<td>**round**</td>

<td>

_instance._round(_[numDigits]_)

Rounds the number to a specified number of decimal places.

Return Type: Real

<dl>

<dt>numDigits (Optional)</dt>

<dd>

Type: Integer

Specifies the number of decimal places to which you want to round number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**roundDown**</td>

<td>

_instance._roundDown(_[numDigits]_)

Rounds the number down, toward zero.

Return Type: Real

<dl>

<dt>numDigits (Optional)</dt>

<dd>

Type: Integer

Specifies the number of decimal places to which you want to round number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**roundUp**</td>

<td>

_instance._roundUp(_[numDigits]_)

Rounds the number down, toward zero.

Return Type: Real

<dl>

<dt>numDigits (Optional)</dt>

<dd>

Type: Integer

Specifies the number of decimal places to which you want to round number.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**sqrt**</td>

<td>

_instance._sqrt

Returns a positive square root of the number.

Return Type: Real

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString(_format__, culture_)

Converts the numeric value to its equivalent string representation using the specified format and culture-specific format information.

Return Type: String

The string representation of the value as specified by format and provider.

<dl>

<dt>format</dt>

<dd>

Type: String

A numeric format string. For more details, see the MSDN articles "Standard Numeric Format Strings" (http://msdn.microsoft.com/library/dwhawy9k) and "Custom Numeric Format Strings" (http://msdn.microsoft.com/library/0c899ak8).

</dd>

<dt>culture</dt>

<dd>

Type: String

The culture name. A NULL value or empty string is interpreted as InvariantCulture, while a single dash "-" is interpreted as CurrentCulture. Otherwise, the value indicates the name of a culture. culture is not case-sensitive. For a list of predefined culture names, see the National Language Support (NLS) API Reference (http://go.microsoft.com/fwlink/?LinkId=200048).

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## String Type

A sequential collection of characters, typically used to represent text.

The String type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**createCompactGuidString**</td>

<td>

String.createCompactGuidString

Creates a unique identifier.

Return Type: String

</td>

</tr>

<tr>

<td>**join**</td>

<td>

String.join(_separator__, values__, includeNullOrEmpty_)

Concatenates all the elements of a string collection, using the specified separator between each element.

Return Type: String

A string that consists of the elements of the string collection delimited by the specified separator string. If the string collection has no elements, the function returns the empty string.

<dl>

<dt>separator</dt>

<dd>

Type: String

The string to use as a separator. This string is included in the returned string only if the collection has more than one element.

</dd>

<dt>values</dt>

<dd>

Type: Collection(String)

A collection that contains the strings to concatenate.

</dd>

<dt>includeNullOrEmpty</dt>

<dd>

Type: Boolean

TRUE to include even collection elements that are null or the empty string; otherwise, FALSE to exclude such elements before concatenation.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

String.new(_[value]_)

Creates a new instance of the String class.

Return Type: String

<dl>

<dt>value (Optional)</dt>

<dd>

Type: String

A string of characters.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**containsAllWords**</td>

<td>

_instance._containsAllWords(_words_ _[, matching]_)

Checks if the string contains all of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not all the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: Collection(String)

</dd>

<dt>matching (Optional)</dt>

<dd>

Type: TextMatching

Default Value: TextMatching.startsWith

The text matching method to be used.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsAllWords**</td>

<td>

_instance._containsAllWords(_words_ _[, matching]_)

Checks if the string contains all of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not all the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: String

</dd>

<dt>matching (Optional)</dt>

<dd>

Type: TextMatching

Default Value: TextMatching.startsWith

The text matching method to be used.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsAnyWords**</td>

<td>

_instance._containsAnyWords(_words_ _[, matching]_)

Checks if the string contains any of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not any the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: Collection(String)

</dd>

<dt>matching (Optional)</dt>

<dd>

Type: TextMatching

Default Value: TextMatching.startsWith

The text matching method to be used.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsAnyWords**</td>

<td>

_instance._containsAnyWords(_words_ _[, matching]_)

Checks if the string contains any of the supplied words.

Return Type: Boolean

A boolean value indicating whether or not any the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: String

</dd>

<dt>matching (Optional)</dt>

<dd>

Type: TextMatching

Default Value: TextMatching.startsWith

The text matching method to be used.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsNearWords**</td>

<td>

_instance._containsNearWords(_words_ _[, maxSpan]_ _[, ordered]_)

Checks if the string contains all of the supplied words within a range of the number of words specified by "maxSpan".

Return Type: Boolean

A boolean value indicating whether or not the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: Collection(String)

Collection of search terms. The order in which the search terms are specified will only have significance if specified by "ordered" and the collection of search terms is inherently ordered.

</dd>

<dt>maxSpan (Optional)</dt>

<dd>

Type: Integer

Limits the smallest group of words in which all query terms occurs. The number of words in such a group may not exceed the specified value.

</dd>

<dt>ordered (Optional)</dt>

<dd>

Type: Boolean

A boolean value indicating whether the words must be found in the order in which the search terms are specified.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsNearWords**</td>

<td>

_instance._containsNearWords(_words_ _[, maxSpan]_ _[, ordered]_)

Checks if the string contains all of the supplied words within a range of the number of words specified by "maxSpan".

Return Type: Boolean

A boolean value indicating whether or not the words were found in the string.

<dl>

<dt>words</dt>

<dd>

Type: String

The search terms separated by space. Double quotes may be used to group several words. (Double quote characters may need to be escaped with backslash (\)).

</dd>

<dt>maxSpan (Optional)</dt>

<dd>

Type: Integer

Limits the smallest group of words in which all query terms occurs. The number of words in such a group may not exceed the specified value.

</dd>

<dt>ordered (Optional)</dt>

<dd>

Type: Boolean

A boolean value indicating whether the words must be found in the order in which the search terms are specified.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**containsWildcardText**</td>

<td>

_instance._containsWildcardText(_expression_)

Checks if the string contains text matching a wildcard expression.

Return Type: Boolean

A boolean value indicating whether the string matches the wildcard expression.

<dl>

<dt>expression</dt>

<dd>

Type: String

Contains the text to search for and may include "?" and "*" wildcard charracters. "?" matches one arbitrary character whereas "*" matches any number (including 0) of characters. Examples: G?nus, G*us, Gen*.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**indexOf**</td>

<td>

_instance._indexOf(_value_)

Reports the index of the first occurrence of the specified string in this string.

Return Type: Integer

The index position of value if that string is found, or -1 if it is not. If value is String.Empty, the return value is 0.

<dl>

<dt>value</dt>

<dd>

Type: String

The string to search for.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**insert**</td>

<td>

_instance._insert(_startIndex__, value_)

Inserts a specified string at a specified index position in this string.

Return Type: String

A new string equivalent to this string but with value inserted at position startIndex.

<dl>

<dt>startIndex</dt>

<dd>

Type: Integer

The index position of the insertion.

</dd>

<dt>value</dt>

<dd>

Type: String

The string to insert.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**length**</td>

<td>

_instance._length

Returns the number of characters in this string.

Return Type: Integer

</td>

</tr>

<tr>

<td>**remove**</td>

<td>

_instance._remove(_startIndex__, count_)

Deletes a specified number of characters from this string beginning at a specified position.

Return Type: String

A new string that is equivalent to this instance less count number of characters.

<dl>

<dt>startIndex</dt>

<dd>

Type: Integer

The index position to begin deleting characters.

</dd>

<dt>count</dt>

<dd>

Type: Integer

The number of characters to delete.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**replace**</td>

<td>

_instance._replace(_oldValue__, newValue_)

Replaces all occurrences of a specified string in this string, with another specified string.

Return Type: String

A new string equivalent to this string but with all instances of oldValue replaced with newValue.

<dl>

<dt>oldValue</dt>

<dd>

Type: String

A string to be replaced.

</dd>

<dt>newValue</dt>

<dd>

Type: String

A string to replace all occurrences of oldValue.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**satisfies**</td>

<td>

_instance._satisfies(_searchString_)

Checks if the string contains values that match the supplied search string.

Return Type: Boolean

A boolean value indicating whether values that match the search string were found.

<dl>

<dt>searchString</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**split**</td>

<td>

_instance._split(_separator_ _[, includeEmpty]_)

Identifies the substrings in the current string that are delimited by one or more characters, and then returns the substrings in a sequence of strings.

Return Type: Sequence(String)

A sequence of strings. If the current string contains none of the characters specified in the separator argument, the function returns a sequence consisting of a single element that contains the current string. If no separator is given, the function returns a sequence of strings delimited by white-space characters. Note that an empty string is returned for any substring in which two delimiters are adjacent, or if a delimiter is found at the beginning or end of the current string. To omit empty strings, set the includeEmpty argument to FALSE. Delimiter characters are not included in the substrings.

<dl>

<dt>separator</dt>

<dd>

Type: String

The string that delimit the substrings in the current string.

</dd>

<dt>includeEmpty (Optional)</dt>

<dd>

Type: Boolean

Default Value: true

TRUE to include substrings that are empty, FALSE to omit empty substrings.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**substring**</td>

<td>

_instance._substring(_startIndex_ _[, length]_)

Returns a substring from this string. The substring starts at a specified character position and has (optionally) a specified length.

Return Type: String

A new string equivalent to the substring of length length that begins at startIndex in this string. -or- String.Empty if startIndex is equal to the length of this string and length is zero.

<dl>

<dt>startIndex</dt>

<dd>

Type: Integer

The index of the start of the substring.

</dd>

<dt>length (Optional)</dt>

<dd>

Type: Integer

The number of characters in the substring.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**toInteger**</td>

<td>

_instance._toInteger

Converts the string to an integer.

Return Type: Integer

An integer value or null if the string was not successfully converted to an integer.

</td>

</tr>

<tr>

<td>**toLargeInteger**</td>

<td>

_instance._toLargeInteger

Converts the string to a large integer.

Return Type: LargeInteger

A large integer value or null if the string was not successfully converted to a large integer.

</td>

</tr>

<tr>

<td>**toLower**</td>

<td>

_instance._toLower

Returns a copy of this string in lowercase.

Return Type: String

A string in lowercase.

</td>

</tr>

<tr>

<td>**toReal**</td>

<td>

_instance._toReal

Converts the string to a floating-point value. The string MUST use "." as decimal separator. Thousands separator is not allowed.

Return Type: Real

A floating-point value or null if the string was not successfully converted to a floating-point number.

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

<tr>

<td>**toTitleCase**</td>

<td>

_instance._toTitleCase

Sets the first character in each word to uppercase and the rest to lowercase.

Return Type: String

</td>

</tr>

<tr>

<td>**toUpper**</td>

<td>

_instance._toUpper

Returns a copy of this string in UPPERCASE.

Return Type: String

A string in UPPERCASE.

</td>

</tr>

<tr>

<td>**trim**</td>

<td>

_instance._trim(_[trimChars]_)

Removes all occurrences of a set of characters specified in a string (or all white space characters) from the beginning and end of this string.

Return Type: String

A new string equalent to this string after all occurrences of the characters in trimChars are removed from the beginning and end of this instance. If trimChars is String.Empty, white space characters are removed instead.

<dl>

<dt>trimChars (Optional)</dt>

<dd>

Type: String

An optional string consisting of characters to be removed. If trimChars is left out all whitespace characters will be removed.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**trimEnd**</td>

<td>

_instance._trimEnd(_[trimChars]_)

Removes all occurrences of a set of characters specified in a string (or all whitespace characters) from the end of this string.

Return Type: String

A new string equalent to this string after all occurrences of the characters in trimChars are removed from the end of this string. If trimChars is null, white space characters are removed instead.

<dl>

<dt>trimChars (Optional)</dt>

<dd>

Type: String

An optional string consisting of characters to be removed. If trimChars is left out all whitespace characters will be removed.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**trimStart**</td>

<td>

_instance._trimStart(_[trimChars]_)

Removes all occurrences of a set of characters specified in a string (or all whitespace characters) from the beginning of this string.

Return Type: String

A new string equalent to this string after all occurrences of the characters in trimChars are removed from the beginning of this string. If trimChars is String.Empty, white space characters are removed instead.

<dl>

<dt>trimChars (Optional)</dt>

<dd>

Type: String

An optional string consisting of characters to be removed. If trimChars is left out all whitespace characters will be removed.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

* * *

## Url Type

Represents the address (Uniform Resource Locator) to a resource on the Internet.

The Url type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**createSlugString**</td>

<td>

Url.createSlugString(_value__, toLower_ _[, maxLength]_)

Creates a string that may be used directly as part of a URL based on a general string.

Return Type: String

A SEO (Search Engine Optimization) friendly string based on the specified value, but where all characters (including special characters and whitespace) that are not within the ranges "a".."z", "A".."Z", "0".."9", or "-" are converted to a character that is.

<dl>

<dt>value</dt>

<dd>

Type: String

A string value.

</dd>

<dt>toLower</dt>

<dd>

Type: Boolean

A value indicating whether the result should be returned as lowercase letters only.

</dd>

<dt>maxLength (Optional)</dt>

<dd>

Type: Integer

Default Value: 0

The result maximum length. (The default value of 0 means "unlimited").

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

Url.new(_url_)

Creates a new instance of the Url class with the specified URL.

Return Type: Url

<dl>

<dt>url</dt>

<dd>

Type: String

A string representing a URL.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

Url.new(_scheme__, host_ _[, port]_ _[, path]_ _[, query]_ _[, fragment]_)

Creates a new instance of the Url class with the specified scheme, host, port number, path, query string, and fragment identifier.

Return Type: Url

<dl>

<dt>scheme</dt>

<dd>

Type: String

An Internet access protocol.

</dd>

<dt>host</dt>

<dd>

Type: String

A DNS-style domain name or IP address.

</dd>

<dt>port (Optional)</dt>

<dd>

Type: Integer

An IP port number for the service.

</dd>

<dt>path (Optional)</dt>

<dd>

Type: String

The path to the Internet resource.

</dd>

<dt>query (Optional)</dt>

<dd>

Type: String

A query string. If a value is specified, it must always start with a question mark (?) sign.

</dd>

<dt>fragment (Optional)</dt>

<dd>

Type: String

A fragment identifier. If a value is specified, it must always start with a number (#) sign.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**urlDecode**</td>

<td>

Url.urlDecode(_value_)

Converts a string that has been encoded for transmission in a URL into a decoded string.

Return Type: String

Returns a decoded string. URL decoding replaces hexadecimal escape sequences with corresponding ASCII character equivalents.

<dl>

<dt>value</dt>

<dd>

Type: String

A URL-encoded string to decode.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**urlEncode**</td>

<td>

Url.urlEncode(_value_)

Converts a text string into a URL encoded string.

Return Type: String

URL encoding replaces all character codes except for letters, numbers, and the following punctuation characters: - (minus sign), _ (underscore), . (period), ! (exclamation point), * (asterisk), ( and ) (opening and closing parentheses).

<dl>

<dt>value</dt>

<dd>

Type: String

The text to URL-encode.

</dd>

</dl>

</td>

</tr>

</tbody>

</table>

**Instance members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**fragment**</td>

<td>

_instance._fragment

Gets the fragment portion of the URL. The property gets any text following a fragment marker (#) in the URL, including the fragment marker itself. Given the URL http://www.contoso.com/index.htm#main, the property would return #main.

Return Type: String

</td>

</tr>

<tr>

<td>**host**</td>

<td>

_instance._host

Gets the Domain Name System (DNS) host name or IP address of a server.

Return Type: String

</td>

</tr>

<tr>

<td>**path**</td>

<td>

_instance._path

Gets the path to the resource referenced by the URL. The property contains the path information that the server uses to resolve requests for information. Typically this is the path to the desired information on the server's file system, although it also can indicate the application or script the server must run to provide the information. The path information does not include the scheme, host name, or query portion of the URL.

Return Type: String

</td>

</tr>

<tr>

<td>**port**</td>

<td>

_instance._port

Gets the port number of the URL. The port number defines the protocol port used for contacting the server referenced in the URL. If a port is not specified as part of the URL, the property returns the default value for the protocol. If there is no default port number, this property returns null.

Return Type: Integer

</td>

</tr>

<tr>

<td>**query**</td>

<td>

_instance._query

Gets any query information included in the URL. The property contains any query information included in the URI. Query information is separated from the path information by a question mark (?) and continues to the end of the URL or to a number sign (#). The query information returned includes the leading question mark.

Return Type: String

</td>

</tr>

<tr>

<td>**scheme**</td>

<td>

_instance._scheme

Gets the scheme name of the URL. Possible values returned by the property include file, ftp, http, and https.

Return Type: String

</td>

</tr>

<tr>

<td>**toString**</td>

<td>

_instance._toString

Returns a string representation of the value.

Return Type: String

</td>

</tr>

</tbody>

</table>