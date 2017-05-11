## Navigation Pane

The Navigation Pane which appears in the main window in the Genus desktop client, provides centralized navigation and easy access to objects such as Tables, Reports, Forms and Tasks. The pane is divided in different views which can contain folders, groups and shortcuts.

To modify the content of your Navigation Pane, do the following:

1.  [Open Genus Studio](genus studio basics/how to open genus studio.md).
2.  In the **Directory** tree, click the **Navigation Pane** folder.

The content of the Navigation Pane is displayed in a tree view. View buttons are displayed at the first level in the tree. You can add folders, groups and shortcuts to a view button. Below a group or folder, you can add folders and shortcuts.

More information on the functionality provided by the Navigation Pane to end users are described in the article [Navigation Pane](../navigation pane.md).

In this article

* * *

*   [Add a View Button](#add-a-view-button)

*   [Add a Group to a View Button](#add-a-group-to-a-view-button)

*   [Add a Folder to a View Button, Group or Folder](#add-a-folder-to-a-view-button-group-or-folder)

*   [Add a Shortcut to a View Button, Group or Folder](#add-a-shortcut-to-a-view-button-group-or-folder)

*   [Change the Symbol for a View Button or a Folder](#change-the-symbol-for-a-view-button-or-a-folder)

*   [Change the Display Order for Items in the Navigation Pane](#change-the-display-order-for-items-in-the-navigation-pane)

*   [Set a Default Entry for a View Button](#set-a-default-entry-for-a-view-button)

*   [Hide an Item in the Navigation Pane](#hide-an-item-in-the-navigation-pane)

*   [Grant Permissions to an Item in the Navigation Pane](#grant-permissions-to-an-item-in-the-navigation-pane)

*   [Bind an Item in the Navigation Pane to a Data Set](#bind-an-item-in-the-navigation-pane-to-a-data-set)

*   [View Detailed Information for Items in the Navigation Pane Tree](#view-detailed-information-for-items-in-the-navigation-pane-tree)

*   [Add ScreenTip to a View Button, Group, Folder or Shortcut](#add-screentip-to-a-view-button-group-folder-or-shortcut)

* * *

## Add a View Button

1.  Right-click in the white area of the tree view, and then in the shortcut menu, click **Add View Button**.
2.  Type a name for the view button in the box.



## Add a Group to a View Button

1.  Right-click the view button which you want to add a group to, and then in the shortcut menu, click **Add Group**.
2.  Type a name for the group in the box.

If you want the child entries in a group to appear as options buttons (radio buttons), do the following:

1.  Right-click the group, and then in the shortcut menu, click **Properties**.
2.  In the section **Child Entry Symbols**, click the **Option Button**.

Groups are intially expanded. If you want collapse a group, do the following:

1.  Right-click the group, and then in the shortcut menu, click **Properties**.
2.  Click to clear the **Initially Expanded** check box.



## Add a Folder to a View Button, Group or Folder <a name="add-a-folder-to-a-view-button-group-or-folder"/>

1.  Right-click the view button, group or folder which you want to add a folder to, and then in the shortcut menu, click **Add Folder**.
2.  Type a name for the folder in the box.

You can choose to display all shortcuts within a folder in a single view. When the folder is clicked in the Navigation Pane, the shortcuts are opened and arranged according to the layout for the folder. If a layout is specified, the folder can not be expanded in the Navigation Pane.

To specify a layout for a folder, do the following:

1.  Right-click the folder, and then in the shortcut menu, click **Properties**.
2.  Click the **General** tab.
3.  In the **Layout** section, click which layout to apply: **Across**, **Down**, **Tiled** or **Horizontal Folders**.

Note that the folder not can contain any sub folders. In addition, only shortcuts which points to List Entry Forms, Tables, and Reports can be displayed in a single view.



## Add a Shortcut to a View Button, Group or Folder <a name="add-a-shortcut-to-a-view-button-group-or-folder"/>

1.  Right-click the view button, group or folder that you want to add a shortcut to, and then in the shortcut menu, click **Add Shortcut**.
2.  Follow the instructions in the **Create Shortcut** wizard. You can create shortcuts to objects such as Tables, Forms, Reports, Search Folders, and Tasks. In addition you can create shortcuts to web documents.

**Change the name displayed in the window title bar when a shortcut is opened**

1.  Right-click the shortcut, and then in the shortcut menu, click **Properties**.
2.  In the **Properties** dialog box, click **Edit**.
3.  Click **Next**.
4.  In the section **Choose which name to display in the window title bar,** you can choose to display the name of the target for the shortcut (default), the name for the shortcut or both.

**Specify how to display table views**

1.  Right-click the shortcut, and then in the shortcut menu, click **Properties**.
2.  In the **Properties** dialog box, click **Edit**.
3.  In the **Views** section click **Add one shortcut** <span style="FONT-WEIGHT: normal">and select a view to be used initially.
4.  <span style="FONT-WEIGHT: normal">To add individual shortcuts to several of the views in the table, click **Add one shortcut to each of the following views** <span style="FONT-WEIGHT: normal">and then click **Add** <span style="FONT-WEIGHT: normal">or **R****emove** <span style="FONT-WEIGHT: normal">to specify the shortcuts.

**Specify a Symbol for the Shortcut**

1.  Right-click the shortcut, and then in the shortcut menu, click **Properties**.
2.  In the **Properties** dialog box, click **Edit**.
3.  Click **Next**.
4.  In the **Symbol** section of the **Properties** dialog box, click **Browse** to select an image file from your disk.
5.  Click **Clear** to remove an existing symbol.

**Specify to Open in the Same Window or a New Window**

**** **1.  <span style="FONT-WEIGHT: normal">Right-click the shortcut, and then in the shortcut menu, click Properties<span style="FONT-WEIGHT: normal">.
2.  <span style="FONT-WEIGHT: normal">In the Properties <span style="FONT-WEIGHT: normal">dialog box, click Edit<span style="FONT-WEIGHT: normal">.
3.  <span style="FONT-WEIGHT: normal">In the Open target in <span style="FONT-WEIGHT: normal">section, click The current window <span style="FONT-WEIGHT: normal">to open the shortcut in the same windos, or click A new window <span style="FONT-WEIGHT: normal">to open the shortcut in a new window,

 **Show the Number of Objects Next to a Shortcut on Start** 

 <span style="FONT-WEIGHT: normal"><span style="FONT-WEIGHT: normal">

Shortcut to Tables can display the number of objects on start, i.e. even before the shortcut has been activated.

1.  <span style="FONT-WEIGHT: normal">Right-click the shortcut, and then in the shortcut menu, click Properties<span style="FONT-WEIGHT: normal">.
2.  <span style="FONT-WEIGHT: normal">In the Properties <span style="FONT-WEIGHT: normal">dialog box, click <span style="FONT-WEIGHT: normal">Edit<span style="FONT-WEIGHT: normal">.
3.  <span style="FONT-WEIGHT: normal">In the Open target in <span style="FONT-WEIGHT: normal">section, under The current window<span style="FONT-WEIGHT: normal">, <span style="FONT-WEIGHT: normal">select the Show Number of Objects on Start <span style="FONT-WEIGHT: normal">check box to <span style="FONT-WEIGHT: normal">let the number of objects be displayed on start<span style="FONT-WEIGHT: normal">. This option is only available for shortcuts that open in the current window.

Refresh the content every time you activate the shortcut

 <span style="FONT-WEIGHT: normal"><span style="FONT-WEIGHT: normal">

The content of the shortcut can be refreshed when the shortcut is activated. This is useful for example, when moving between tables with frequently changing content. 

1.  <span style="FONT-WEIGHT: normal">Right-click the shortcut, and then in the shortcut menu, click Properties<span style="FONT-WEIGHT: normal">.
2.  <span style="FONT-WEIGHT: normal">In the Properties <span style="FONT-WEIGHT: normal">dialog box, click <span style="FONT-WEIGHT: normal">Edit<span style="FONT-WEIGHT: normal">.
3.  <span style="FONT-WEIGHT: normal">In the Open target in <span style="FONT-WEIGHT: normal">section, under **The current window**, <span style="FONT-WEIGHT: normal">select the Refresh on Activate <span style="FONT-WEIGHT: normal">check box to <span style="FONT-WEIGHT: normal">let the target of the shortcut refresh every time it is activated<span style="FONT-WEIGHT: normal">. This option is only available for shortcuts that open in the current window.** 

**Specifying Data Filters for Shortcuts to Reports**

1.  Right-click the shortcut, and then in the shortcut menu, click **Properties**.
2.  In the **Properties** dialog box, click **Edit**.
3.  In the **Edit Shortcut** wizard, click **Customize**. Follow the instructions in the [step-by-step procedure](../how to/exchange data with other applications/edit report links.md "Edit Report Links") on how to edit a link.

**Specifying Data Filters for Shortcuts to Tasks**

1.  Right-click the shortcut, and then in the shortcut menu, click **Properties**.
2.  In the **Properties** dialog box, click **Edit**.
3.  In the **Edit Shortcut** wizard, click **Customize**. To specify a data filter, select a data source in the list and click **Modify**. Follow the instructions in the [step-by-step procedure](action orchestration/data sources.md) on how to filter data for a data source. If no data filter is specified, the task will attempt to use the default data filtering. Default filtering is only available for tasks published without context to the run command.



## Change the Symbol for a View Button or a Folder

1.  Right-click the view button or folder, and then in the shortcut menu, click **Properties**.
2.  Click the **General** tab.
3.  In the **Symbol** box, click **Change**.
4.  In the **Change Symbol** dialog box, select a bitmap file. The size of the bitmap file can be a maximum of 16x16 pixels.



## Change the Display Order for Items in the Navigation Pane

1.  Right-click the item in the Navigation Pane for which you want to change the display order, and then in the shortcut menu, click **Move Up** or **Move Down**.

You can also sort items by name:

1.  Right-click an item within a view button, group or folder, and then in the shortcut menu, click **Sort by Name**.



## Set a Default Entry for a View Button

The default entry is selected the first time a user clicks on a view button. If the user selects another entry in the same view, the default entry is replaced with the selected entry.

1.  Right-click the view button, and then in the shortcut menu, click **Properties**.
2.  In the **Default Selected Entry** box, select an entry.

## Hide an Item in the Navigation Pane

1.  Right-click the item in the Navigation Pane, and then in the shortcut menu, click **Properties**.
2.  Click the **General** tab.
3.  Click to clear the **Enabled** check box.



## Grant Permissions to an Item in the Navigation Pane

To grant permissions to an item in the Navigation Pane, do the following:

1.  Right-click the item, and then in the shortcut menu, click **Properties**.
2.  Click the **Security** tab.
3.  Follow the [step-by-step procedure on how to grant permissions to a user](../security and privacy/security permissions.md "Grant Permissions to an Individual Object to a User").

Note that when you add an item to a view button, group or folder, permissions are by default copied from the view button, group or folder. You can also copy permissions from one item to another item. To copy permissions, do the following:

1.  Right-click the item that you want to copy permissions from, and then in the shortcut menu, click **Copy**.
2.  Right-click the item that you want to copy permissions to, and then in the shortcut menu, click **Paste Security**.
3.  In the **Paste Security** dialog box, click **Add** to add the copied permissions to existing permissions. Click **Replace** to replace existing permissions with the copied permissions. If you paste permissions on a view button, group or folder, select **Apply on all child objects** if permissions should be added or replaced on all items within the view button, group or folder.
4.  Click **OK**.



## Bind an Item in the Navigation Pane to a Data Set

By default, an item in the Navigation Pane is not bound to a data set. That is, the item is available in all data sets. The only exception to this is shortcuts which points to objects that is bound to a data set, for example a Report. To restrict access to an item to a specific data set, do one of the following:

View buttons, groups and folders:

1.  Right-click the item in the Navigation Pane, and then in the shortcut menu, click **Properties**.
2.  Click the **General** tab.
3.  In the **Data Set Binding** section, click **Data Set**, and then select a data set.

Shortcuts:

1.  Right-click the shortcut in the Navigation Pane, and then in the shortcut menu, click **Properties**.
2.  Click the **General** tab.
3.  Click **Edit**.
4.  In the **Edit Shortcut** wizard, click **Data Set** in the **Data Set Binding** section, and then select a data set.
5.  Click **Next**.
6.  Click **Finish**.



## View Detailed Information for Items in the Navigation Pane Tree

To view detailed information, such as data set binding and type, for items in the **Navigation Pane** tree, click the **View Details** check box at the lower left-part of the window.



## Add ScreenTip to a View Button, Group, Folder or Shortcut <a name="add-screentip-to-a-view-button-group-folder-or-shortcut"/>

1\. Right-click **View Button**, **Group**, **Folder** or **Shortcut**, and then in the menu, click **Properties**.  
2\. In the **ScreenTip**box, enter the screen tip text.

