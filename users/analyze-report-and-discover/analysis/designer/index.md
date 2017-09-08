# Design an Analysis

To design an Analysis you will need to add [Tiles](../concepts/tile.md) to the current [View](../concepts/view.md). You can do this by clicking the red circular plus button on the bottom right of the [View](../concepts/view.md).

In the [Tile](../concepts/tile.md) pane you can select the kind of [Visualization](../visualizations.md) you want for the [Tile](../concepts/tile.md).

The [Tile](../concepts/tile.md) pane contains configutation for the selected [Tile](../concepts/tile.md) . Different [Tiles](../concepts/tile.md)  use different configuration settings, although many are common.
There are four sections on the [Tile](../concepts/tile.md) pane:
* Visualization Selector
* Data Selector
* Formatting 
* Actions

Most [Visualizations](../visualizations.md) work by only specifying [Categories](../concepts/category.md) and/or [Values](../concepts/value.md) on the **Data Selector** tab.

Example:
Assume there are two [Categories](../concepts/category.md) called "Customer" and "Invoice".
Assume an "Invoice" is connected to a "Customer", and that there is a field called "Amount" in an invoice.
1. Click the red plus-button to add a [Tile](../concepts/tile.md)
2. Click on "Bar Chart" on the **Visualization Selector**
3. In the **Data Selector**, under **Primary Category**, select "Customer" in the **Data Source** dropdown
4. In the **Data Selector**, under **Values**, expand the automatically added "Value1". If none was added, click on **Add Value**.
5. In the **Data Source** dropdown, select "Invoice"
6. In the **Field** dropdown, select "Amount"
7. Save the **Analysis**
8. Select **Preview** in the **Tools** menu


## How To
### Add a view
An *Analysis* can contain multilpe [Views](../concepts/view.md), which can contain multiple [Tiles](../concepts/tile.md). Adding a [Views](../concepts/view.md) is done by clicking the plus symbol on the [View](../concepts/view.md) tab at the bottom of the designer.
### Delete a view
Clik the menu dots on the view tab. Select *Delete*.
### Add a tile
A [View](../concepts/view.md) can contain multiple [Tiles](../concepts/tile.md). Add a tile by clicking the red plus button.
### Make a copy of a tile
Clik the menu dots in the upper right corner of the tile. Select **Duplicate**.
### Delete a tile
Clik the menu dots in the upper right corner of the tile. Select **Delete**.
###Open an Analysis
Analyses are opened from the Navigation Pane, or from the Discover Task Pane.

Analyses can be published as shortcuts in the navigation pane by system administrators. To open an Analysis from the navigation pane, locate the shortcut, and simply click it. To open the Analysis in a new window, right click the shortcut, and select Open in New Window.

All the Analyses a user has access to can be opened from the Discorver Task Pane. In the Tasks section, click Open. In the list of Analyses, Reports, and Data Extracts, locate the Analysis, select it, and click OK.



