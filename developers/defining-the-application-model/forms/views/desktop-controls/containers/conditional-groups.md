# Conditional groups

Conditional groups can contain several group controls or group box controls, and only one of these groups is displayed at a given time. The groups are ordered by priority, and a condition is defined for each group. The first group with a condition that is fulfilled, is displayed. To always display a default group if none of the groups counditions are fulfilled, add a group without a condition as the last group.

During design, a tab is displayed for each group, and by selecting a tab it is possible to modify the content of the group, or remove the group.

![IDF2E4AF2540A6400D.png](media/IDF2E4AF2540A6400D.png)

![ID25E5F0AE4DFB464D.png](media/ID25E5F0AE4DFB464D.png)

To remove a group, select the tab for the group, and press DELETE. To change the order of the groups, right click one of the tabs, and click **Sort Groups**. To add a new group, select the conditional group control and then double click the Group control or the Group Box control in the control pane.


## Conditional groups properties

See [Common Container Properties](common-container-properties.md) and [Common Control Properties](../common-control-properties.md), in addition to the control specific properties below.

Property                 | Description
-------------------------|--------------------------------
Group Visibility         | Contains a list all the groups in the prioritized order. For each group there is a [condition](../../../../common-concepts/conditions.md) which determines if the group is visible or not. If more than one group has a condition that is true, the first group in the prioritized order is displayed. If no condition is defined for a group, this is interpreted as the condition is fulfilled. To modify the condition for a group, click the "..." button in the Condition column for the group.
