# Automatic formatting

Automatic formatting helps you visualize specific aspects of your data. You can apply automatic formatting to a row or cell in a table view. Whenever you analyze data, you often ask yourself questions, such as:

* Where are the exceptions in a summary of profits over the past five years?
* Which tasks are overdue?
* Who has sold more than 50,000 Euros this month?
* Which products have greater than 10% revenue increases from year to year?

Automatic formatting helps to answer these questions by making it easy to highlight interesting rows or cells, emphasize unusual values, and visualize data by using data bars, colors and icon sets. An automatic format changes the appearance of a row or cell based on a rule. If the condition for the rule is true, the row or cell is formatted based on that rule.

Automatic formatting can be set up individually for each row and cell by defining a set of rules. To open the automatic formatting click **Automatic Formatting**.  

In the **Formatting Rules** list the rules are listed in order of priority. All the rules with conditions that are fulfilled are applied. When there are any conflicting formats in two or more rules (e.g. font color red and font color green), only the format in the first of these rule is applied. The rules for rows are applied before the rules for cells.

To set up or modify formatting rules, do the following:

1. In the list of rules, select the rule you want to modify, or click **Add** to add a new rule.
2. Define the formatting to be applied.
3. Define the condition that has to be fulfilled to apply the formatting.

To change the priority of the rules, do the following:

1.  In the list of rules, select the rule you want to change priority for.

2.  Click **Move Up** to increase the priority by moving it before other rules, or click **Move Down** to decrease the priority by moving it after other rules.

Rule properties:

| Property       | Description |
| -------------- | ----------- |
| Name           | The name of the rule. This is used to distinguish between the rules in the list. |
| Apply to       | The scope of the rule. In the **Apply to** list click the field you want the format applied to, or click Row to apply the format to the whole row. |
| Font...        | The font format to be applied. |
| Color...       | The background color to be applied. |
| Data Bar...    | A visualization of the size of the values in each row relative to each other, as bars with different lengths. The column appears to have an integrated bar chart. A Data Bar can only be used when the format is applied to a cell. For a description of Data Bar, see [Automatic Formatting using Data Bars](automatic-formatting.md "Automatic Formatting using Data Bars") |
| Icon           | Symbol that is displayed. In the Icon list click the icon you want to use, or **Transparent** to use a blank icon. Click **None** to not display an icon. An Icon can only be used when the format is applied to a cell. |
| Show Icon Only | Hides the value of the field in the cell. |
| Display Text   | Text that is displayed. A Display Text can only be used when the format is applied to a cell. |
| Condition...   | The condition that has to be fulfilled for the formatting to be applied. Click Condition to open the condition dialog. For defining condition, see [Conditions](conditions.md "Conditions") |

## Automatic formatting using data bars

A **Data Bar** helps you see the value of a cell relative to other cells. The length of the data bar represents the value in the cell. A longer bar represents a higher value, and a shorter bar represents a lower value. Data bars are useful in spotting higher and lower numbers, especially with large amounts of data, such as top selling and bottom selling toys in a holiday sales report.</font>

Data bar properties:

| Property                    | Description |
| --------------------------- | ----------- |
| **Bar Range and Position**  | |
| Type - Minimum              | Defines what value the shortest bar should be based on. To use the smallest value in the column, select **Automatic**, to use a specific number select **Fixed Value**. |
| Value - Minimum             | If the minimum type was set to **Fixed Value**, this field contains the value the shortest bar should be based on. |
| Type - Maximum              | Defines what value the longest bar should be based on. To use the largest value in the column, select **Automatic**, to use a specific number select **Fixed Value**. |
| Value - Maximum             | If the maximum type was set to **Fixed Value**, this field contains the value the longest bar should be based on. |
| Direction                   | The direction of the bar for increasing values, **Left to Right** or **Right to Left**. |
| **Zero Position**           | |
| Automatic                   | Display the zero position at variable position based on the range of negative and positive values. |
| Cell Midpoint               | Display the zero position at the cell midpoint regardless of the range of negative and positive values. |
| Cell Edge                   | Display the zero position at the left or right cell edge depending on the bar direction. Negative and positive bars are shown in the same direction. |
| Show Bar Only               | Hides the value of the field in the cell. |
| **Bar Appearance**          | |
| Fill                        | The type of fill used for the bar, **Solid Fill** or **Gradient Fill**. |
| Border                      | The type of border used for the bar, **No Border** or **Solid Border**. |
| Fill Color - Positive Bar   | The color of the bar for positive values. |
| Border Color - Positive Bar | The color of the border of the bar for positive values. |
| Fill Color - Negative Bar   | The color of the bar for negative values. |
| Border Color - Negative Bar | The color of the border of the bar for negative values. |
