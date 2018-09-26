# Navigation pane

The navigation pane appears in the main window in Genus Desktop, and provides centralized navigation and easy access to objects such as tables, reports, forms and tasks. The pane is divided in different views (**View Buttons**) which can contain **Folders**, **Groups** and **Shortcuts**.

If you are an end-user (and not a developer), please refer to [this](../../../users/navigate-view-modify-and-control/navigation-pane.md) article for more information.

To modify the content of your navigation pane, open [Genus Studio](../getting-started/how-to-open-genus-studio.md), and in the **Directory** tree, in the **User Interface** section, click the **Navigation Pane** folder.

The content of the navigation pane is displayed in a tree view to the right of the directory tree, i.e. in the main area of Genus Studio:
* First level of the tree contains view buttons.
* Second level of the tree contains folders, groups and shortcuts. You can add folders, groups and shortcuts to a view button.
* Below a group or a folder, you can add folders and shortcuts, i.e. more levels to your navigation pane.

View buttons, folders, groups and shortcuts all have **Properties**. These are located by right-clicking a view button, folder etc, and in the shortcut menu, click **Properties**.

The term **Item** is used as a common name for all the various types of objects that are available in the navigation pane, e.g. view buttons, folders, shortcuts, tables, etc.

## View detailed information for items in the navigation pane tree

To get a quick overview of all detailed information for all items in the navigation pane tree, click the **View Details** check box at the lower left-part of the window.

## Add a view button

Right-click in the white area of the tree view, and then in the shortcut menu, click **Add View Button**.

## Add a group to a view button

Right-click the view button which you want to add a group to, and then in the shortcut menu, click **Add Group**.

If you want the child entries in a group to appear as options buttons (radio buttons), open the group's properties, and in the section **Child Entry Symbols**, click **Option Buttons**.

Groups are intially expanded. If you want collapse a group, open the group's properties and clear the **Initially Expanded** check box.

## Add a folder to a view button, group or folder

Right-click the view button, group or folder which you want to add a folder to, and then in the shortcut menu, click **Add Folder**.

You can choose to display all shortcuts within a folder in a single view. When the folder is clicked in the navigation pane, the shortcuts are opened and arranged according to the layout for the folder.

To specify a layout for a folder, open the folder's properties, locate the **Layout** dropdown and select among **None**, **Across**, **Down**, **Tiled** or **Horizontal Folders**.

Note:
* If a layout is specified, the folder can not be expanded in the navigation pane.
* The folder can not contain any subfolders.
* Only shortcuts which points to list entry forms, tables, and reports can be displayed in a single view.

## Add a shortcut to a view button, group or folder

1.  Right-click the view button, group or folder that you want to add a shortcut to, and then in the shortcut menu, click **Add Shortcut**.
2.  Follow the instructions in the **Create Shortcut** wizard. You can create shortcuts to tables, forms, reports, search folders, tasks, internet addresses (urls) etc.

## Change the name displayed in the window title bar when a shortcut is opened

Open the shortcut's properties, click **Edit** and then **Next**. In the section **Choose which name to display in the window title bar**, you can choose to display the name of the target for the shortcut (default), the name for the shortcut or both.

## Specify how to display table views

1. Open the shortcut's properties and click **Edit**.
2. In the **Views** section click **Add one shortcut** and select a view to be used initially.
3. To add individual shortcuts to several of the views in the table, click **Add one shortcut to each of the following views** and then click **Add** or **Remove** to specify the shortcuts.

## Specify a symbol for the shortcut

1.  Open the shortcut's properties and click **Edit**, and then click **Next**.
2.  In the **Symbol** section, click **Browse** to select an image file from your disk.
3.  Click **Clear** to remove an existing symbol.

## Specify to open in the same window or a new window

1.  Open the shortcut's properties and click **Edit**.
2.  In the **Open target in** section, click **The current window** to open the shortcut in the same window, or click **A new window** to open the shortcut in a new window.

## Show the number of objects next to a shortcut on start

Shortcut to tables can display the number of objects on start, i.e. even before the shortcut has been activated.

1.  Open the shortcut's properties and click **Edit**.
2.  In the **Open target in** section, under **The current window**, select the **Show number of Objects on Start** check box to let the number of objects be displayed on start. This option is only available for shortcuts that open in the current window.

## Refresh the content every time you activate the shortcut

The content of the shortcut can be refreshed when the shortcut is activated. This is useful for example, when moving between tables with frequently changing content. 

1.  Open the shortcut's properties and click **Edit**.
2.  In the **Open target in** section, under **The current window**, select the **Refresh on Activate** check box to let the target of the shortcut refresh every time it is activated. This option is only available for shortcuts that open in the current window.

## Specifying data filters for shortcuts to reports

1.  Open the shortcut's properties and click **Edit**.
2.  In the **Edit** shortcut wizard, click **Customize**. Follow the instructions in the [step-by-step procedure](../../how-to/exchange-data-with-other-applications/edit-report-links.md) on how to edit a link.

## Specifying data filters for shortcuts to tasks

1.  Open the shortcut's properties and click **Edit**.
2.  In the **Edit** shortcut wizard, click **Customize**. To specify a data filter, select a data source in the list and click **Modify**. Follow the instructions in the [step-by-step procedure](../logic/action-orchestration/data-sources/index.md) on how to filter data for a data source. If no data filter is specified, the task will attempt to use the default data filtering. Default filtering is only available for tasks published without context to the run command.

## Change the symbol for a view button or a folder

1. Open the view button's or the folder's properties, and in the **Symbol** box, click **Change**.
2. In the **Change symbol** dialog box, select a bitmap file. The size of the bitmap file can be a maximum of 16x16 pixels.

## Change the display order for items in the navigation pane

Right-click the item in the navigation pane for which you want to change the display order, and then in the shortcut menu, click **Move Up** or **Move Down**.

You can also sort items by name, by right-clicking an item within a view button, group or folder, and then in the shortcut menu, click **Sort by name**.

## Set a default entry for a view button

To set a default entry, open the view button's properties, and in the **Default Selected Entry** dropdown, select an entry.

## Hide an item in the navigation pane

In the item's properties, click to clear the **Enabled** check box.

## Grant permissions to an item in the navigation pane

To grant permissions to an item in the navigation pane, open the item's properties, click the **Security** tab and follow the [step-by-step procedure on how to grant permissions to a user](../security/security-permissions.md).

Note that when you add an item to a view button, group or folder, permissions are by default copied from the view button, group or folder.

## Copy permissions from one item to another in the navigation pane

To copy permissions, do the following:

1. Right-click the item that you want to copy permissions from and click **Copy**.
2. Right-click the item that you want to copy permissions to, and click **Paste security**.
3. In the **Paste Security** dialog box, click **Add** to add the copied permissions to existing permissions. Click **Replace** to replace existing permissions with the copied permissions. If you paste permissions on a view button, group or folder, select **Apply on all child objects** if permissions should be added or replaced on all items within the view button, group or folder.

## Bind an item in the navigation pane to a data set

By default, an item in the navigation pane is not bound to a data set. That is, the item is available in all data sets. The only exception to this is shortcuts which points to objects that is bound to a data set, for example a report. To restrict access to an item to a specific data set, do one of the following:

1. Binding view buttons, groups and folders to a data set: In the item's properties, in the **Data Set Binding** section, click **Data Set**, and then select a data set.
2. Binding shortcuts to a data set: In the shortcut's properties, click **Edit**. In the **Edit shortcut** wizard, click **Data Set** in the **Data Set Binding** section, and then select a data set.

## Add screenTip to a view button, group, folder or shortcut

In the properties dialog box, in the **ScreenTip** box, enter the screen tip text.