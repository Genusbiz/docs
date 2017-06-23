# Data Dependencies

**Range Properties**

Range properties provide a powerful means to search for data within a period of time. A range property is composed of two properties; one property which represents the lower boundary in the date range, and one property which represents the upper boundary in the date range. For example, if an Object Class has a _start date_ and an _end date_, you can define a Range Property _Duration_, where the _start date_ defines the lower boundary in the range, and the _end date_ the upper boundary in the range.

A special set of filter operators is provided when filtering data on a Range Property. The filter operators are described below.


## Add a Range Property

1.  In the **Range Properties** list, click **Add**.
2.  In the **Range Property** dialog box, type a name for the property in the **Name** box.
3.  In the **From Property** box, **s**elect the property that represents the lower boundary in the date range.
4.  In the **To Property** box, select the property that represents the upper boundary in the date range.
5.  In the **Default Filter Operator** box, choose which filter operator that should be selected as default in search dialog boxes.
6.  Click **OK**.



## Filter Operators for Range Properties

When filtering data for an Object Class on a Range Property, the search criterion entered by the user is compared with the values stored in the properties representing the lower- (from-date-property) and upper boundary (to-date-property) in the date range. The values can be compared using one of the following filter operators:

**Started Before**  
The from-date is before a given date.

_[from-date-property] < [date]_

**Started After**  
The from-date is after a given date.

_[from-date-property] > [date]_

**Ended Before**  
The to-date is before a given date.

_[to-date-property] < [date]_

**Ended After** The to-date is after a given date.

_[to-date-property] > [date]_

**Started Between** The from-date is within a given time period.

_[from-date-property] >= [first-date] AND [from-date-property] <= [second-date]_

**Ended Between** The to-date is within a given time period.

_[to-date-property] >= [first-date] AND [to-date-property] <= [second-date]_   

**Within**  
The from-date and to-date is within a given time period.

_[from-date-property] >= [first-date] AND [to-date-property] <= [second-date]_

**Overlapping** The from-date is equal to or before the end of a given time period, and the to-date is equal to or after the beginning of a given time period.

_[from-date-property] <= [second-date] AND [to-date-property] >= [first-date]  
OR  
[from-date-property] IS NULL AND [to-date-property] >= [first-date]  
OR  
[from-date-property] <= [second-date] AND [to-date-property] IS NULL_   

**Including** The from-date is equal to or before the beginning of a given time period, and the to-date is equal to or after the end of a given time period.  

_[from-date-property] <= [first-date] AND [to-date-property] >= [second-date]  
OR  
[from-date-property] IS NULL AND [to-date-property] >= [second-date]  
OR  
[from-date-property] <= [first-date] AND [to-date-property] IS NULL_

