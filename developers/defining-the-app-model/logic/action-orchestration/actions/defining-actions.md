# Defining Actions

![IDF036A2BF3D414749.png](media/IDF036A2BF3D414749.png)


## Add Actions

To add a block, control or effect, locate the item in the **Constructs** pane on the right, and drag it to the correct location in the **Actions** view. It is possible to place a new item anywhere between existing actions, and if you place it directly on top of a block it is added as the last action within the block.

It is also possible to select an item in the **Actions** view, and then double-click a block, control, or effect in the **Constructs** pane, to add it immediately after the selected item, or at the end if the selected item is a block.



## Modify Action Properties

To modify the properties of an action in the **Actions** view, do one of the following:

*   Double-click the action.
*   Select the action, and then press Enter.
*   Right-click the action, and then select **Properties**.

Some important properties are available in the action tree, and can be edited directly here.

*   **Name**. To edit, click the name and press F2.
*   **Condition**. Applies to Decision blocks. To edit, hold down CTRL and click the condition.
*   **Diversion**. Applies to Redirect Execution controls. Click the **Diversion** arrow.
*   **Commit**. Applies to Scope blocks. Select the **Commit** check box, or click to clear it.



## Move Actions

To change the order of actions in the **Actions** view, do one of the following:

*   Select an item, and then press SHIFT+ALT+UP to move it up one position, or press SHIFT+ALT+DOWN to move it down one position.
*   Right-click an item, and then select **Move Up** to move it up one position, or select **Move Down** to move it down one position.
*   Select one or more adjacent items, and drag them to a new location. If the actions are placed on a block, they are added to the end of the block. It is not possible to drag actions into or out of enumerators. It is not possible to drag a Redirect Action control into or out of a block.  



## Clone Actions

It is possible to clone actions in the **Action** view. This is a useful if there are actions or blocks which are almost identical, and especially if they contain complex logic. For example a read objects effect with a complex data filter or a block with many steps.

To clone actions, do the following.

*   Right-click the effect, control or block to clone, and then select **Clone**.

The clone is placed directly after the original.



## Delete Actions

To delete actions, select one or more actions in the **Actions** view, and then do one of the following:

*   Press Delete
*   Right-click the selection, and select delete.

If a block is selected, the block and all actions within it is deleted.

