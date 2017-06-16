# Text and number controls

Text and number controls are used to display and edit textual and numeric information in various formats, and are typically bound to a single field in a data source.

See [Common Control Properties](common-control-properties.md), in addition to the control specific properties below.


## E-Mail address edit

The control displays and accepts entry of a properly formatted e-mail address.

For example: *[firstname.lastname@mydomain.com](mailto:firstname.lastname@mydomain.com)*.


## HTML edit

Control for displaying HTML encoded text. The control can be bound to a property with XHTML data interpretation.

To edit the text, define an event with the **Open HTML / Rich Text Edit** effect type.


## Label

The control displays a single line label.

For multi line label see [Text](#text).


## Number Edit

The Number Edit displays and accepts entry of numbers. The number can be an integer or a decimal number, and can be restricted to a minimum value and maximum value. Spin buttons and arrow keys can be used to change the value.


Property                |  Description
------------------------|------------------------------------------------------------------------
Increment               | The number to increase or decrease the value of the control with, when using the spin buttons, or when pressing the UP ARROW key or the DOWN ARROW key.
Is Float Value          | The control displays and accepts decimal values.
Min Value               | The minimum allowed value. Leave the property blank for no limit.
Max Value               | The maximum allowed value. Leave the property blank for no limit.
Show Spin Button        | Displays two small buttons inside the control, that can be used to change the value in increments by clicking on them.
Spin Button Orientation | The orientation of the spin buttons.<br><br><ul><li>**Horizontal** - The buttons are displayed side by side with a left arrow and a right arrow.</li><li>**Vertical** - The buttons are displayed one above the other, with an up arrow and a down arrow.</li></ul>


## Password Edit

This control allows you to display and edit passwords. While the password is accepted as the actual text that is entered, it is not displayed legibly, but every charachter is displayed as the same optional character (for example: "*" or "#"). For ensuring password strength, authentication, etc. use [data validation](../../../object-class-property/modify-an-object-class-property/data-validation.md), [actions](../../../action-orchestration.md), etc.


Property      | Description
--------------|------------------------------------------------------------------------
Password Char | The character to display for each of the entered characters in the passoword.


## Rich Text Edit

Control for displaying and editing RTF encoded text. The control can be bound to a property with Rich Text Format data interpretation.

To edit the text, define an event with the **Open HTML / Rich Text Edit** effect type.


## Text

The control displays unformatted text as a multiline label.

For basic single line label see [Label](#label).


Property       | Description
---------------|------------------------------------------------------------------------
Content        | A static text, to be used if data binding is not defined.
Text Alignment | Alignment of the text within the control<br><br><ul><li>**Left** - The text is aligned to the left edge of the control.</li><li>**Center** - The text is aligned to the center of the control.</li><li>**Right** - The text is aligned to the right edge of the control.</li></ul>


## Text Edit

A control for displaying or editing single or multi-line unformatted text.

### General

Property       | Description
---------------|------------------------------------------------------------------------
Multiline      | The control displays and accepts newline characters.
Scrollbar      | Displays scrollbars inside the control to allow scrolling the text horizontally, vertically, or both directions.
Word Wrap      | Lines of text are wrapped to the next line, if they are too long to be displayed on one line in the control.


### Format

Property       | Description
---------------|------------------------------------------------------------------------
Font Effect    | Adds effekts to the font of the text.<br><br><ul><li>**Underline** - The text is underlined.</li><li>**Strikethrough** - The text is displayed with a horizontal line running through the middle of each line of text.</li><li>**Overline** - Displays a line over each line of text.</li><li>**Baseline** - The text is displayed with a horizontal line under the text, slightly above where an underline would appear.</li></ul>


## Text Popup Edit

A control for editing unformatted multiline text. When the control is not active, it only occupies the space of a single line control. To view and edit the entire text, the user can click the down arrow to open a popup.


Property       | Description
---------------|------------------------------------------------------------------------
Accepts Tab    | Accepts TAB characters as part of the text.
Allow Resize   | Allows the user to resize the popup window.
Popup Height   | Limits the number of lines in the popup window.
Scrollbar      | Displays scrollbars inside the control to allow scrolling the text horizontally, vertically, or both directions.
Word Wrap      | Lines of text are wrapped to the next line, if they are too long to be displayed on one line in the control.


## Url Edit

Displays and accepts a properly formatted URL.

For example: *[www.genus.no](http://www.genus.no/) or [http://www.genus.biz](http://www.genus.biz/)*
