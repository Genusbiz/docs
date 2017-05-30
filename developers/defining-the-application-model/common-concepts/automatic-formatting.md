## Automatic Formatting

Automatic formatting helps you visualize specific aspects of your data. You can apply automatic formatting to a row or cell in a table view. Whenever you analyze data, you often ask yourself questions, such as:

*   Where are the exceptions in a summary of profits over the past five years?
*   Which tasks are overdue?
*   Who has sold more than b,50,000 Euros this month?
*   Which products have greater than 10% revenue increases from year to year?

Automatic formatting helps to answer these questions by making it easy to highlight interesting rows or cells, emphasize unusual values, and visualize data by using data bars, colors and icon sets. An automatic format changes the appearance of a row or cell based on a rule. If the condition for the rule is true, the row or cell is formatted based on that rule.

Automatic formatting can be set up individually for each row and cell by defining a set of rules. To open the automatic formatting click **Automatic Formatting**.  

In the **Formatting Rules** list the rules are listed in order of priority. All the rules with conditions that are fulfilled are applied. When there are any conflicting formats in two or more rules (e.g. font color red and font color green), only the format in the first of these rule is applied. The rules for rows are applied before the rules for cells.

In the **Formatting Rules** list the rules are listed in order of priority. All the rules with conditions that are fulfilled are applied. When there are any conflicting formats in two or more rules (e.g. font color red and font color green), only the format in the first of these rule is applied. The rules for rows are applied before the rules for cells.

To set up or modify formatting rules, do the following:

1.  In the list of rules, select the rule you want to modify, or click **Add** to add a new rule.
2.  Define the formatting to be applied.
3.  Define the condition that has to be fulfilled to apply the formatting.

To change the priority of the rules, do the following:

1.  In the list of rules, select the rule you want to change priority for.

2.  Click **Move Up** to increase the priority by moving it before other rules, or click **Move Down** to decrease the priority by moving it after other rules.

Rule Properties:

<table>

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>Name</td>

<td>The name of the rule. This is used to distinguish between the rules in the list.</td>

</tr>

<tr>

<td>Apply to</td>

<td>

The scope of the rule. In the **Apply to** list click the field you want the format applied to, or click Row to apply the format to the whole row.

</td>

</tr>

<tr>

<td>Font...</td>

<td>

The font format to be applied.

</td>

</tr>

<tr>

<td>

Color...

</td>

<td>The background color to be applied.</td>

</tr>

<tr>

<td>

Data Bar...

</td>

<td>A visualization of the size of the values in each row relative to each other, as bars with different lengths. The column appears to have an integrated bar chart. A Data Bar can only be used when the format is applied to a cell. For a description of Data Bar, see [Automatic Formatting using Data Bars](automatic-formatting.md "Automatic Formatting using Data Bars")</td>

</tr>

<tr>

<td>

Icon

</td>

<td>Symbol that is displayed. In the Icon list click the icon you want to use, or **Transparent** to use a blank icon. Click **None** to not display an icon. An Icon can only be used when the format is applied to a cell.</td>

</tr>

<tr>

<td>Show Icon Only</td>

<td>

Hides the value of the field in the cell.

</td>

</tr>

<tr>

<td>

Display Text

</td>

<td>Text that is displayed. A Display Text can only be used when the format is applied to a cell.</td>

</tr>

<tr>

<td>Condition...</td>

<td>The condition that has to be fulfilled for the formatting to be applied. Click Condition to open the condition dialog. For defining condition, see [Conditions](conditions.md "Conditions")</td>

</tr>

</tbody>

</table>


## Automatic Formatting using Data Bars

<span lang="EN-US" style="LINE-HEIGHT: 115%; COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">A data bar helps you see the value of a cell relative to other cells. The length of the data bar represents the value in the cell. A longer bar represents a higher value, and a shorter bar represents a lower value. Data bars are useful in spotting higher and lower numbers, especially with large amounts of data, such as top selling and bottom selling toys in a holiday sales report.</font>

<span lang="EN-US" style="LINE-HEIGHT: 115%; COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Data Bar <span lang="EN-US" style="LINE-HEIGHT: 115%; COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Properties</font> :</font>

 <span lang="EN-US" style="LINE-HEIGHT: 115%; COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US">

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Property</th>

<th>Description</th>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">**Bar Range and Position**</font>

</td>

<td></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Type - Minimum</font>

</td>

<td><span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Defines what value the shortest bar should be based on. To use the smallest value in the column, select **Automatic**, to use a specific number select **Fixed Value**.</font></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Value - Minimum</font>

</td>

<td><span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">If the minimum type was set to **Fixed Value**, this field contains the value the shortest bar should be based on.</font></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Type - Maximum</font>

</td>

<td><span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Defines what value the longest bar should be based on. To use the largest value in the column, select **Automatic**, to use a specific number select **Fixed Value**.</font></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Value - Maximum</font>

</td>

<td><span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">If the maximum type was set to **Fixed Value**, this field contains the value the longest bar should be based on.</font></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Direction</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The direction of the bar for increasing values, **Left to Right** or **Right to Left**.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">**Zero Position**:</font>

</td>

<td></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">- Automatic</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Display the zero position at variable position based on the range of negative and positive values.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">- Cell Midpoint</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Display the zero position at the cell midpoint regardless of the range of negative and positive values.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">- Cell Edge</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Display the zero position at the left or right cell edge depending on the bar direction. Negative and positive bars are shown in the same direction.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Show Bar Only</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Hides the value of the field in the cell.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">**Bar Appearance**</font>

</td>

<td></td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Fill</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The type of fill used for the bar, **Solid Fill** or **Gradient Fill**.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Border</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The type of border used for the bar, **No Border** or **Solid Border**.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Fill Color - Positive Bar</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The color of the bar for positive values.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Border Color - Positive Bar</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The color of the border of the bar for positive values.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Fill Color - Negative Bar</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The color of the bar for negative values.</font>

</td>

</tr>

<tr>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">Border Color - Negative Bar</font>

</td>

<td>

<span lang="EN-US" style="COLOR: #454545; FONT-SIZE: 10pt; mso-bidi-font-family: Arial; mso-ansi-language: EN-US"><font face="Calibri">The color of the border of the bar for negative values.</font>

</td>

</tr>

</tbody>

</table>

