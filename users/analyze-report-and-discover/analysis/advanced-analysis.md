# Advanced Analysis

When a user selects items of interest in an analysis, it will provide feedback based on what is currently selected. All elements in the analysis are immediately updated based on which items in the underlying data mart are now relevant. All aggregated information like measures and charts are updated, lists display wich items are relevant and which are excluded, and so on. 

In this article, <span style="FONT-STYLE: italic">List</span> is used as a common term for various listing of items.



## Selected, Qualified, and Excluded Items <a name="selected-qualified-and-excluded-items"/>

An analysis gives feedback based on the items that are selected at any given time, if any. An item may be selected, qualified, or excluded. 

*   **Selected**: An item is selected if the user has selected it explicitly by clicking on it. Selected items are marked with a green, filled circle next to the item. An item may be visualized more than one place in an analysis, and if it is clicked and selected one place, it is visualized as selected all other places.
*   **Qualified**: An item is qualified if no selections has been made, or if it has a connection to an item that has been selected. The connection path between two items may go through one ore more intermediary items, as defined by the data mart. Items that are qualified are included in aggregations and calculations, and can be selected to further specify the subset. 
*   **Excluded**: Items are excluded if they have no connection to a selected item. Excluded items has a different background color than selected or qualified items.



## Selecting and deselecting items

There are several ways to change the selections in an analysis. 

**Select Items**  
To select an item in a list , click the item, or right click the item and select **Set as Selected** in the shortcut menu.

To select several items in a list, press and hold the CTRL key, then click the items, and then release the CTRL key. To select a sequence of items in a list, press and hold the SHIFT key, click the first item in the sequence, then click the last item in the sequence, and then release the SHIFT key.  

It is also possible to select items in charts, but the charts present aggregated information, and thereby every point or bar also represents an aggregated value for the given category. So when a point, bar, or pie slice is selected, what is actually selected is the category for that value. For example: In a chart showing sales amount per month, when selecting a bar, the month is selected. Similarly, in a pie chart showing sales amount per region, when selecting a pie slice, the region is selected. In a pie chart it is also possible to make selections by clicking items in the legend.  

To add items to an existing selection in a list, press and hold the **CTRL** key, click the items to add, and then release the **CTRL** key. 

In a list, it is sometimes possible to select items that are already excluded. When selecting an item that is excluded, it is no longer meaningful to maintain the existing selections, as this would exclude all items. Therefore when an excluded item is selected, all other selections are automatically cleared.

**Deselect Items**  
To deselect an item in a list, when it is the only selected item in the list, click the item.

To remove items from an existing selection in a list, press and hold the **CTRL** key, click the selected items to remove, and then release the **CTRL** key, or right click a selected item to remove, and select **Remove from Selection** in the shortcut menu.

It is only possible to deselect an item in a chart, when it is the only selected item.  

## Using the Selection menu

Each tile has a Selection menu that may be accessed by clicking the hand-icon in the upper right corner of the tile.

**Add All Items**

Selects all the items in the tile.

The result of selecting all items, and selecting none, is not necessarily the same. This is the case where there are combinations of data which are not connected to any items in the list. Selecting no items excludes nothing, while selecting all items excludes everything that is not connected.

**Replace with Excluded**

Selects all items that are excluded in the tile.

**Replace with Qulified**

Selects all items that are not excluded in the tile.

**Clear Other Selections**

De-selects all items in all other tiles. Leaves the selection in the focused tile intact. 

**Clear Selection**

De-selects all items in the focused tile.



## Back and forward

When using an analysis to discover new insight about your data, each selection that is made is like a step into uncharted territory. Sometimes it reveals new discoveries, sometimes it leads nowhere. Instead of having to remember each step, to be able to retreat the same way you came, use **Back** to undo the last steps. If you change your mind, use **Forward** to re-do the selection again. The last 100 steps are stored, so step back and forward freely to re-play the sequence and better visualize and understand the data.



## Bookmarks

A bookmark saves the current set of selections in the analysis, and lets you easily re-apply the selections at a later time. This is useful if you discover something in your data that you need to take a closer look at. Create a personal bookmark, or share it with others and even send them a link.

**Add a bookmark**

To add a bookmark for the current set of selections, in the toolbar click the Add Bookmark button in the main menu. Revise the values in the **Edit bookmark**-window and click **Save**.

*   **Name.** The name of the bookmark. Use informative names that are easy to understand, especially if the bookmark is shared with other users. The default name for C% new bookmark is a timestamp.
*   **Description**. Optionally enter a description to give more information about what the bookmark displays when it is applied.
*   **Shared**. Select this option if the bookmark should be available for all the users that have access to the analysis.

**Apply a bookmark**  

To apply a bookmark, in the toolbar click the **Open Bookmarks** button in the main menu. In the list of bookmarks, click the bookmark to apply. When a bookmark is applied, all the current selections are cleared and replaced with the selections stored in the bookmark

**Modify an existing bookmark**

To modify an existing bookmark, click the **Open bookmarks** button in the main menu and select **Edit** from the bookmarks context menu.

**Manage bookmarks**

You can manage your bookmarks to get an overview, modify them, remove them, copy their URL or show a QR-code for them by clicking the **Open Bookmarks** button in the main menu and selecting the appropriate item in each bookmarks context menu.
