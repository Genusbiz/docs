# Time and date controls

The date and time controls are used to display and edit time and date information in various formats. Some controls are bound to a single field in a data source, while some are more advanced and are bound to more than one field.

See [Common Control Properties](common-control-properties.md), in addition to the control specific properties below.


## Date Time Edit

The date time edit combines the functionality of a single-line text editor, button editor and dropdown calendar with support for time input. The editor's dropdown displays a single-month calendar that allows end-users to select dates, and navigate through months and years. Specifying a date by selecting it on the calendar, or manual entry into the text box changes the editor's edit value.


Property                |  Description
------------------------|------------------------------------------------------------------------
Min Value               | The earliest date accepted by the control.
Max                     | The latest date accepted by the control.
Show Today              | Highlight todays date in the calendar popup.
Show Week Numbers       | Show week numbers in the calendar popup.


## Duration Edit

The duration edit control is used for properties ... (@eriksandnes)


## Integer Time Edit

The integer time edit control is used for integer encoded time in the form HHMM, two digit hour and two digit minute.

For example: *10:15*.


## Integer Date Edit

The integer date edit control is used for integer encoded dates, and offers full date picker functionality in a popup calendar.


Property                |  Description
------------------------|------------------------------------------------------------------------
Type                    | The type of date accepted and required by the control.<br><br><ul><li>**DD.MM.YYYY** - Full date is required.</li><li>**(MM).YYYY** - Year is required. Month is optional. Day is not accepted.</li><li>**(DD.MM).YYYY** - Year is required. Month and day are optional.</li></ul>


## Date Range Bar

The date range bar provides an easy and visual way to display and select a range of date or time. The control defines the intervals to select from, he range to select within, and the selected range.


Property                |  Description
------------------------|------------------------------------------------------------------------
Intervals               | The intervals that are available to choose from. One or more intervals can be included, even if they are not adjacent.<br><br><ul><li> **Year**</li><li>**Quarter**</li><li>**Month**</li><li>**Day**</li><li>**Hour**</li><li>**Minute**</li><li>**Second**</li></ul>
Range End               | A [data binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding") for the last value in the range to select from.
Range Start             | A [data binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding") for the first value in the range to select from.
Selection Start         | A [data binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding") for the first value in the range currently selected.
Selection End           | A [data binding](../../../../../../users/search-and-refine/data-binding.md "Data Binding") for the last value in the range currently selected.

