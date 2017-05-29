## Data and Time Types

### CalendarTime Type

Represents an instant in time or a period of a time unit (e.g. a specific day or month), typically expressed as a date and time of day.

The CalendarTime type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**compare**</td>

<td>

CalendarTime.compare(_value1__, value2_ _[, resolution]_)

Compares two CalendarTime values and returns an integer that indicates whether the first value represents a time that is earlier than, the same as, or later than the second value. The comparison may optionally take a resolution argument indicating the time resolution that should be used for the operation.

Return Type: Integer

A signed number indicating the ordering of value1 and value2\. If the returned value is less than zero value1 is earlier than value2, zero indicates that value1 is the same as value2, and a value greater than zero indicates that value1 is later than value2.

<dl>

<dt>value1</dt>

<dd>

Type: CalendarTime

A CalendarTime value to compare.

</dd>

<dt>value2</dt>

<dd>

Type: CalendarTime

A CalendarTime value to compare.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeResolution

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**convertLocalTimeToUtc**</td>

<td>

CalendarTime.convertLocalTimeToUtc(_localTimeValue_)

Converts the specified local date and time to Coordinated Universal Time (UTC).

Return Type: CalendarTime

<dl>

<dt>localTimeValue</dt>

<dd>

Type: CalendarTime

The local date and time to to be converted to Coordinated Universal Time (UTC).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**convertUtcToLocalTime**</td>

<td>

CalendarTime.convertUtcToLocalTime(_utcValue_)

Converts the specified Coordinated Universal Time (UTC) value to the local date and time.

Return Type: CalendarTime

<dl>

<dt>utcValue</dt>

<dd>

Type: CalendarTime

The Coordinated Universal Time (UTC) value to be converted to local date and time.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**maxValue**</td>

<td>

CalendarTime.maxValue(_[resolution]_)

Return Type: CalendarTime

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeResolution

Default Value: TimeResolution.second

The resolution of the CalendarTime returned. Default is a resolution of second.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**minValue**</td>

<td>

CalendarTime.minValue(_[resolution]_)

Return Type: CalendarTime

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeResolution

Default Value: TimeResolution.second

The resolution of the CalendarTime returned. Default is a resolution of second.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

CalendarTime.new(_year_ _[, month]_ _[, day]_ _[, hour]_ _[, minute]_ _[, second]_ _[, millisecond]_)

Returns a new instance of CalendarTime, with a resolution based on the number of parameters specified.

Return Type: CalendarTime

<dl>

<dt>year</dt>

<dd>

Type: Integer

The year (1 through 9999).

</dd>

<dt>month (Optional)</dt>

<dd>

Type: Integer

The month (1 through 12).

</dd>

<dt>day (Optional)</dt>

<dd>

Type: Integer

The day (1 through number of days in the month).

</dd>

<dt>hour (Optional)</dt>

<dd>

Type: Integer

The hours (0 through 23).

</dd>

<dt>minute (Optional)</dt>

<dd>

Type: Integer

The minutes (0 through 59).

</dd>

<dt>second (Optional)</dt>

<dd>

Type: Integer

The seconds (0 through 59).

</dd>

<dt>millisecond (Optional)</dt>

<dd>

Type: Integer

The milliseconds (0 through 999).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**now**</td>

<td>

CalendarTime.now(_[resolution]_)

Returns current date and time on this computer, expressed as the local time.

Return Type: CalendarTime

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeResolution

Default Value: TimeResolution.second

The resolution of the CalendarTime returned. Default is a resolution of second.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**referenceDay**</td>

<td>

CalendarTime.referenceDay

Returns the current reference date. If no reference date has been set, the current date on this computer, expressed as the local time, is returned.

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**today**</td>

<td>

CalendarTime.today

Returns current date on this computer, according to the local time.

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**tryParseExact**</td>

<td>

CalendarTime.tryParseExact(_s__, format__, culture_ _[, resolution]_)

Converts the specified string representation of a date and time to its CalendarTime equivalent using the specified format and culture information. The format of the string representation must match the specified format exactly.

Return Type: CalendarTime

An instance of CalendarTime or NULL if the string was not successfully converted to date and time. The conversion fails if either the s or format parameter is NULL, is an empty string, or does not contain a date and time that correspond to the pattern specified in format, or culture is not a valid culture.

<dl>

<dt>s</dt>

<dd>

Type: String

A string containing a date and time to convert.

</dd>

<dt>format</dt>

<dd>

Type: String

The required format of s. For more details, see the MSDN articles "Standard Date and Time Format Strings" (http://msdn.microsoft.com/library/az4se3k1) and "Custom Date and Time Format Strings" (http://msdn.microsoft.com/library/8kb3ddd4).

</dd>

<dt>culture</dt>

<dd>

Type: String

The culture name. A NULL value or empty string is interpreted as InvariantCulture, while a single dash "-" is interpreted as CurrentCulture. Otherwise, the value indicates the name of a culture. culture is not case-sensitive. For a list of predefined culture names, see the National Language Support (NLS) API Reference (http://go.microsoft.com/fwlink/?LinkId=200048).

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeResolution

Default Value: TimeResolution.second

The resolution of the CalendarTime returned. Default is a resolution of second.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**utcNow**</td>

<td>

CalendarTime.utcNow(_[resolution]_)

Returns current date and time on this computer, expressed as the Coordinated Universal Time (UTC).

Return Type: CalendarTime

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeResolution

Default Value: TimeResolution.second

The resolution of the CalendarTime returned. Default is a resolution of second.

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

<td>**addDays**</td>

<td>

_instance._addDays(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.days

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addHours**</td>

<td>

_instance._addHours(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.hours

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMilliseconds**</td>

<td>

_instance._addMilliseconds(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.milliseconds

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMinutes**</td>

<td>

_instance._addMinutes(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.minutes

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMonths**</td>

<td>

_instance._addMonths(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.months

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addSeconds**</td>

<td>

_instance._addSeconds(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.seconds

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addYears**</td>

<td>

_instance._addYears(_value_ _[, resolution]_)

Return Type: CalendarTime

<dl>

<dt>value</dt>

<dd>

Type: Real

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.years

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**day**</td>

<td>

_instance._day

Returns the day component of the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**firstInDay**</td>

<td>

_instance._firstInDay

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**firstInHour**</td>

<td>

_instance._firstInHour

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**firstInMinute**</td>

<td>

_instance._firstInMinute

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**firstInMonth**</td>

<td>

_instance._firstInMonth

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**firstInQuarter**</td>

<td>

_instance._firstInQuarter

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**firstInWeek**</td>

<td>

_instance._firstInWeek

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**firstInYear**</td>

<td>

_instance._firstInYear

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**hour**</td>

<td>

_instance._hour

Returns the hour component of the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**lastInDay**</td>

<td>

_instance._lastInDay

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lastInHour**</td>

<td>

_instance._lastInHour

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lastInMinute**</td>

<td>

_instance._lastInMinute

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lastInMonth**</td>

<td>

_instance._lastInMonth

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lastInQuarter**</td>

<td>

_instance._lastInQuarter

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lastInWeek**</td>

<td>

_instance._lastInWeek

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**lastInYear**</td>

<td>

_instance._lastInYear

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**millisecond**</td>

<td>

_instance._millisecond

Returns the millisecond component of the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**minute**</td>

<td>

_instance._minute

Returns the minute component of the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**month**</td>

<td>

_instance._month

Returns the month component of the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**next**</td>

<td>

_instance._next

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**previous**</td>

<td>

_instance._previous

Return Type: CalendarTime

</td>

</tr>

<tr>

<td>**resolution**</td>

<td>

_instance._resolution

Return Type: TimeResolution

</td>

</tr>

<tr>

<td>**second**</td>

<td>

_instance._second

Returns the second component of the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**timeOfDay**</td>

<td>

_instance._timeOfDay

Returns the time of day for this instance.

Return Type: CalendarTimeSpan

</td>

</tr>

<tr>

<td>**toLongDateTimeString**</td>

<td>

_instance._toLongDateTimeString

Return Type: String

</td>

</tr>

<tr>

<td>**toShortDateTimeString**</td>

<td>

_instance._toShortDateTimeString

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

<tr>

<td>**toString**</td>

<td>

_instance._toString(_format_)

Return Type: String

<dl>

<dt>format</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**week**</td>

<td>

_instance._week

Returns the week number for the date.

Return Type: Integer

</td>

</tr>

<tr>

<td>**year**</td>

<td>

_instance._year

Returns the year component of the date.

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

### CalendarTimeSpan Type

Represents the difference between two instances of CalendarTime. The type is also used to represent time of day.

The CalendarTimeSpan type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**fromDays**</td>

<td>

CalendarTimeSpan.fromDays(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of days, accurate to the nearest millisecond.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.days

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromHours**</td>

<td>

CalendarTimeSpan.fromHours(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of hours, accurate to the nearest millisecond.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.hours

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromMilliseconds**</td>

<td>

CalendarTimeSpan.fromMilliseconds(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of milliseconds.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.milliseconds

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromMinutes**</td>

<td>

CalendarTimeSpan.fromMinutes(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of minutes, accurate to the nearest millisecond.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.minutes

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromMonths**</td>

<td>

CalendarTimeSpan.fromMonths(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of months.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.months

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromSeconds**</td>

<td>

CalendarTimeSpan.fromSeconds(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of seconds, accurate to the nearest millisecond.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.seconds

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**fromYears**</td>

<td>

CalendarTimeSpan.fromYears(_value_ _[, resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>value</dt>

<dd>

Type: Real

A number of years, accurate to the nearest month.

</dd>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.years

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**maxValue**</td>

<td>

CalendarTimeSpan.maxValue(_[resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.seconds

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**minValue**</td>

<td>

CalendarTimeSpan.minValue(_[resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.seconds

The time resolution.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**zero**</td>

<td>

CalendarTimeSpan.zero(_[resolution]_)

Return Type: CalendarTimeSpan

<dl>

<dt>resolution (Optional)</dt>

<dd>

Type: TimeSpanResolution

Default Value: TimeSpanResolution.seconds

The time resolution.

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

<td>**days**</td>

<td>

_instance._days

Return Type: Integer

</td>

</tr>

<tr>

<td>**hours**</td>

<td>

_instance._hours

Return Type: Integer

</td>

</tr>

<tr>

<td>**milliseconds**</td>

<td>

_instance._milliseconds

Return Type: Integer

</td>

</tr>

<tr>

<td>**minutes**</td>

<td>

_instance._minutes

Return Type: Integer

</td>

</tr>

<tr>

<td>**months**</td>

<td>

_instance._months

Return Type: Integer

</td>

</tr>

<tr>

<td>**seconds**</td>

<td>

_instance._seconds

Return Type: Integer

</td>

</tr>

<tr>

<td>**toLongDurationString**</td>

<td>

_instance._toLongDurationString

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

<tr>

<td>**totalDays**</td>

<td>

_instance._totalDays

Return Type: Real

</td>

</tr>

<tr>

<td>**totalHours**</td>

<td>

_instance._totalHours

Return Type: Real

</td>

</tr>

<tr>

<td>**totalMilliseconds**</td>

<td>

_instance._totalMilliseconds

Return Type: Real

</td>

</tr>

<tr>

<td>**totalMinutes**</td>

<td>

_instance._totalMinutes

Return Type: Real

</td>

</tr>

<tr>

<td>**totalMonths**</td>

<td>

_instance._totalMonths

Return Type: Real

</td>

</tr>

<tr>

<td>**totalSeconds**</td>

<td>

_instance._totalSeconds

Return Type: Real

</td>

</tr>

<tr>

<td>**totalYears**</td>

<td>

_instance._totalYears

Return Type: Real

</td>

</tr>

<tr>

<td>**toTimeOfDayString**</td>

<td>

_instance._toTimeOfDayString

Return Type: String

</td>

</tr>

<tr>

<td>**years**</td>

<td>

_instance._years

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

### Date Type

Represents an instant in time, expressed as a date.

The Date type exposes the following members.

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

Date.new(_year__, month__, day_)

Return Type: Date

<dl>

<dt>year</dt>

<dd>

Type: Integer

</dd>

<dt>month</dt>

<dd>

Type: Integer

</dd>

<dt>day</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**now**</td>

<td>

Date.now

Return Type: Date

</td>

</tr>

<tr>

<td>**utcNow**</td>

<td>

Date.utcNow

Return Type: Date

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

<td>**addDays**</td>

<td>

_instance._addDays(_value_)

Return Type: Date

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMonths**</td>

<td>

_instance._addMonths(_value_)

Return Type: Date

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addYears**</td>

<td>

_instance._addYears(_value_)

Return Type: Date

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**day**</td>

<td>

_instance._day

Return Type: Integer

</td>

</tr>

<tr>

<td>**dayOfWeek**</td>

<td>

_instance._dayOfWeek

Return Type: Integer

</td>

</tr>

<tr>

<td>**iso8601DayOfWeek**</td>

<td>

_instance._iso8601DayOfWeek

Return Type: Integer

</td>

</tr>

<tr>

<td>**month**</td>

<td>

_instance._month

Return Type: Integer

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

_instance._toString(_format_)

Return Type: String

<dl>

<dt>format</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**year**</td>

<td>

_instance._year

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

### DateTime Type

Represents an instant in time, expressed as a date and time of day.

The DateTime type exposes the following members.

**Type members**

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Name</th>

<th>Description</th>

</tr>

<tr>

<td>**convertLocalTimeToUtc**</td>

<td>

DateTime.convertLocalTimeToUtc(_localTimeValue_)

Converts the specified local date and time to Coordinated Universal Time (UTC).

Return Type: DateTime

<dl>

<dt>localTimeValue</dt>

<dd>

Type: DateTime

The local date and time to to be converted to Coordinated Universal Time (UTC).

</dd>

</dl>

</td>

</tr>

<tr>

<td>**convertUtcToLocalTime**</td>

<td>

DateTime.convertUtcToLocalTime(_utcValue_)

Converts the specified Coordinated Universal Time (UTC) value to the local date and time.

Return Type: DateTime

<dl>

<dt>utcValue</dt>

<dd>

Type: DateTime

The Coordinated Universal Time (UTC) value to be converted to local date and time.

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

DateTime.new(_year__, month__, day_)

Return Type: DateTime

<dl>

<dt>year</dt>

<dd>

Type: Integer

</dd>

<dt>month</dt>

<dd>

Type: Integer

</dd>

<dt>day</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

DateTime.new(_year__, month__, day__, hour__, minute__, second_)

Return Type: DateTime

<dl>

<dt>year</dt>

<dd>

Type: Integer

</dd>

<dt>month</dt>

<dd>

Type: Integer

</dd>

<dt>day</dt>

<dd>

Type: Integer

</dd>

<dt>hour</dt>

<dd>

Type: Integer

</dd>

<dt>minute</dt>

<dd>

Type: Integer

</dd>

<dt>second</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

DateTime.new(_year__, month__, day__, hour__, minute__, second__, millisecond_)

Return Type: DateTime

<dl>

<dt>year</dt>

<dd>

Type: Integer

</dd>

<dt>month</dt>

<dd>

Type: Integer

</dd>

<dt>day</dt>

<dd>

Type: Integer

</dd>

<dt>hour</dt>

<dd>

Type: Integer

</dd>

<dt>minute</dt>

<dd>

Type: Integer

</dd>

<dt>second</dt>

<dd>

Type: Integer

</dd>

<dt>millisecond</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**now**</td>

<td>

DateTime.now

Return Type: DateTime

</td>

</tr>

<tr>

<td>**utcNow**</td>

<td>

DateTime.utcNow

Return Type: DateTime

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

<td>**addDays**</td>

<td>

_instance._addDays(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addHours**</td>

<td>

_instance._addHours(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMilliseconds**</td>

<td>

_instance._addMilliseconds(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMinutes**</td>

<td>

_instance._addMinutes(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMonths**</td>

<td>

_instance._addMonths(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addSeconds**</td>

<td>

_instance._addSeconds(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addYears**</td>

<td>

_instance._addYears(_value_)

Return Type: DateTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**date**</td>

<td>

_instance._date

Return Type: Date

</td>

</tr>

<tr>

<td>**day**</td>

<td>

_instance._day

Return Type: Integer

</td>

</tr>

<tr>

<td>**dayOfWeek**</td>

<td>

_instance._dayOfWeek

Return Type: Integer

</td>

</tr>

<tr>

<td>**hour**</td>

<td>

_instance._hour

Return Type: Integer

</td>

</tr>

<tr>

<td>**iso8601DayOfWeek**</td>

<td>

_instance._iso8601DayOfWeek

Return Type: Integer

</td>

</tr>

<tr>

<td>**millisecond**</td>

<td>

_instance._millisecond

Return Type: Integer

</td>

</tr>

<tr>

<td>**minute**</td>

<td>

_instance._minute

Return Type: Integer

</td>

</tr>

<tr>

<td>**month**</td>

<td>

_instance._month

Return Type: Integer

</td>

</tr>

<tr>

<td>**second**</td>

<td>

_instance._second

Return Type: Integer

</td>

</tr>

<tr>

<td>**time**</td>

<td>

_instance._time

Return Type: Time

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

_instance._toString(_format_)

Return Type: String

<dl>

<dt>format</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

<tr>

<td>**year**</td>

<td>

_instance._year

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

### IntegerDate Type

Represents an instant in time (year, month and day), using an integer on the form YYYYMMDD. The actual date's month and day part may be optional. E.g. the integer value 19750608 represents the date 8 June 1975.

The IntegerDate type exposes the following members.

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

IntegerDate.new(_year__, month__, day_)

Return Type: IntegerDate

<dl>

<dt>year</dt>

<dd>

Type: Integer

</dd>

<dt>month</dt>

<dd>

Type: Integer

</dd>

<dt>day</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**now**</td>

<td>

IntegerDate.now

Return Type: IntegerDate

</td>

</tr>

<tr>

<td>**utcNow**</td>

<td>

IntegerDate.utcNow

Return Type: IntegerDate

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

<td>**addDays**</td>

<td>

_instance._addDays(_value_)

Return Type: IntegerDate

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMonths**</td>

<td>

_instance._addMonths(_value_)

Return Type: IntegerDate

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addYears**</td>

<td>

_instance._addYears(_value_)

Return Type: IntegerDate

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**day**</td>

<td>

_instance._day

Return Type: Integer

</td>

</tr>

<tr>

<td>**month**</td>

<td>

_instance._month

Return Type: Integer

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

<td>**year**</td>

<td>

_instance._year

Return Type: Integer

</td>

</tr>

</tbody>

</table>

* * *

### IntegerTime Type

Represents an instant in time, expressed as the hour and minute of the day, using an integer on the form HHMM. E.g. the integer value 1356 represents the time of 1:56 PM.

The IntegerTime type exposes the following members.

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

IntegerTime.new(_hour__, minute_)

Return Type: IntegerTime

<dl>

<dt>hour</dt>

<dd>

Type: Integer

</dd>

<dt>minute</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**now**</td>

<td>

IntegerTime.now

Return Type: IntegerTime

</td>

</tr>

<tr>

<td>**utcNow**</td>

<td>

IntegerTime.utcNow

Return Type: IntegerTime

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

<td>**addHours**</td>

<td>

_instance._addHours(_value_)

Return Type: IntegerTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMinutes**</td>

<td>

_instance._addMinutes(_value_)

Return Type: IntegerTime

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**hour**</td>

<td>

_instance._hour

Return Type: Integer

</td>

</tr>

<tr>

<td>**minute**</td>

<td>

_instance._minute

Return Type: Integer

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

* * *

### Time Type

Represents an instant in time, expressed as time of day.

The Time type exposes the following members.

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

Time.new(_hour__, minute__, second_)

Return Type: Time

<dl>

<dt>hour</dt>

<dd>

Type: Integer

</dd>

<dt>minute</dt>

<dd>

Type: Integer

</dd>

<dt>second</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**new**</td>

<td>

Time.new(_hour__, minute__, second__, millisecond_)

Return Type: Time

<dl>

<dt>hour</dt>

<dd>

Type: Integer

</dd>

<dt>minute</dt>

<dd>

Type: Integer

</dd>

<dt>second</dt>

<dd>

Type: Integer

</dd>

<dt>millisecond</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**now**</td>

<td>

Time.now

Return Type: Time

</td>

</tr>

<tr>

<td>**utcNow**</td>

<td>

Time.utcNow

Return Type: Time

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

<td>**addHours**</td>

<td>

_instance._addHours(_value_)

Return Type: Time

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMilliseconds**</td>

<td>

_instance._addMilliseconds(_value_)

Return Type: Time

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addMinutes**</td>

<td>

_instance._addMinutes(_value_)

Return Type: Time

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**addSeconds**</td>

<td>

_instance._addSeconds(_value_)

Return Type: Time

<dl>

<dt>value</dt>

<dd>

Type: Integer

</dd>

</dl>

</td>

</tr>

<tr>

<td>**hour**</td>

<td>

_instance._hour

Return Type: Integer

</td>

</tr>

<tr>

<td>**millisecond**</td>

<td>

_instance._millisecond

Return Type: Integer

</td>

</tr>

<tr>

<td>**minute**</td>

<td>

_instance._minute

Return Type: Integer

</td>

</tr>

<tr>

<td>**second**</td>

<td>

_instance._second

Return Type: Integer

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

_instance._toString(_format_)

Return Type: String

<dl>

<dt>format</dt>

<dd>

Type: String

</dd>

</dl>

</td>

</tr>

</tbody>

</table>