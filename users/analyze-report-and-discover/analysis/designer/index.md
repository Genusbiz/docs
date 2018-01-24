# Design an analysis

To design an analysis you will add [Tiles](../concepts.md#tile) to the current [View](../concepts.md#view). You do this by clicking the red circular plus button on the bottom right of the view.

In the [Tile](../concepts.md#tile) pane you can select the kind of [Visualization](../visualizations.md) you want for the [Tile](../concepts.md#tile).

The [Tile](../concepts.md#tile) pane contains configuration for the selected [Tile](../concepts.md#tile) . Different [Tiles](../concepts.md#tile)  use different configuration settings, although many are common.
There are four sections on the [Tile](../concepts.md#tile) pane:
* Visualization selector
* Data selector
* Formatting 
* Actions

Most *Visualizations* work by only specifying [Categories](../concepts.md#category) and/or [Values](../concepts.md#value) on the **Data Selector** tab.

Example:
Assume there are two [Categories](../concepts.md#category) called "Customer" and "Invoice".
Assume an "Invoice" is connected to a "Customer", and that there is a field called "Amount" in an invoice.
1. Click the red plus-button to add a [Tile](../concepts.md#tile)
2. Click on "Bar Chart" on the **Visualization Selector**
3. In the **Data Selector**, under **Primary Category**, select "Customer" in the **Data Source** dropdown
4. In the **Data Selector**, under **Values**, expand the automatically added "Value1". If none was added, click on **Add Value**.
5. In the **Data Source** dropdown, select "Invoice"
6. In the **Field** dropdown, select "Amount"
7. Save the **Analysis**
8. Select **Preview** in the **Actions** menu


## How to add a view
An analysis can contain multiple views, which can contain multiple tiles. Adding a view is done by clicking the plus symbol on the **View** tab at the bottom of the designer.

## How to delete a view
Clik the menu dots on the **View** tab. Select **Delete**.

## How to add a tile
A view can contain multiple tiles. Add a tile by clicking the red plus button.

## How to make a copy of a tile
Clik the menu dots in the upper right corner of the tile. Select **Duplicate**.

## How to delete a tile
Clik the menu dots in the upper right corner of the tile. Select **Delete**.

## How to open an analysis
Analyses are opened from the navigation pane, or from the discover task pane.

Analyses can be published as shortcuts in the navigation pane by system administrators. To open an analysis from the navigation pane, locate the shortcut, and simply click it. To open the analysis in a new window, right click the shortcut, and select **Open in New Window**.

All the analyses a user has access to can be opened from the discover task pane. In the **Tasks** section, click **Open**. In the list of analyses, reports, and data extracts, locate the analysis, select it, and click **OK**.

## How to open a form
A desktop client form can be opened from an analysis by using the **Open a Form** command in actions. Mapping provides the filtering of data from the analysis to the form.

To enable a form to be opened from an analysis, open the form in Genus Studio and do the following:
* Access the **General Settings** to check the option **Enabled for user defined actions**
* Make sure the master data source is not private. Click the master data source and make sure **Private** is unchecked

## How to open a table
A desktop client table can be opened from an analysis by using the **Open a Table** command in actions. Mapping provides the filtering of data from the analysis to the table.

To enable a table to be opened from an analysis, open the table in Genus Studio and do the following:
* Access the **General Settings** to check the option **Enabled for user defined actions**.
* Make sure the master data source(s) is not private. Click the data source(s) and make sure **Private** is unchecked.
