# Date Format

When using a date field as your value you will get access to a field called date 
format where you can write a formatting string.
This will then be used to parse all of these date values for display purposes.

**Example:**
Given the date 2018/01/08 and the string 'MMM Do Y' the date would be 
translated to Jan 8th 2018

All formats accepted by moment.js are supported. 
See [Moment.js](https://momentjs.com/docs/#/displaying/) for full details.
