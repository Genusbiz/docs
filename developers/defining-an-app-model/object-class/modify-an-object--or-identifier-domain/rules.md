## Rules

With Rules you can define a rule base for an Object Class which contains the knowledge on how to respond to different events. When an event occurs, for example when a property is modified, the Rule is triggered and any actions specified for that rule are carried out.

A rule can be triggered by the following events:

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Event</th>

<th>Description</th>

</tr>

<tr>

<td>**On Before Read**</td>

<td>Occurs before a request to read an object is submitted.</td>

</tr>

<tr>

<td>**On After Read**</td>

<td>Occurs after an object has been read.</td>

</tr>

<tr>

<td>**On Before Create**</td>

<td>Occurs the instant an object is created and before the control of the object is transferred for further processing.</td>

</tr>

<tr>

<td>**On After Create**</td>

<td>Occurs after a new object has been successfully saved. Note that the event **On After Modify** is triggered immediately after this event.</td>

</tr>

<tr>

<td>**On Before Modify**</td>

<td>Occurs after the control for a new or an exisiting object is transferred for save. Both the original object and current object are available as data sources.</td>

</tr>

<tr>

<td>**On After Modify**</td>

<td>Occurs after a new or an exisiting object has been successfully saved. Both the original object and the current object are available as data sources.</td>

</tr>

<tr>

<td>**On Before Delete**</td>

<td>Occurs before an object is deleted.</td>

</tr>

<tr>

<td>**On Before Validate**</td>

<td>Occurs before the value for a property is changed. The property still contains the old value when this event occurs.</td>

</tr>

<tr>

<td>**On After Validate**</td>

<td>Occurs after a valid value has been assigned to a property.</td>

</tr>

</tbody>

</table>


## Add a Rule

1.  In the Rules list, click **Add**.
2.  In the **Name** box, type a name for the Rule.
3.  Optionally type a description in the **Description** box.
4.  Select the **Enabled** check box to activate the Rule.
5.  In the drop-down list **Choose the event which triggers this rule**, select an event.
6.  Follow the instructions described below for adding data sources and actions to the rule.

The Rule is added to the end of the list displaying all Rules for the Object Class. The Rules will be evaluated in the order shown. To change the evaluation order for a Rule, click the Rule in the list, and then click **Move Up** or **Move Down**.



## Add Data Sources to a Rule

Data sources are used by actions as sources of information. When you add a new Rule to an Object Class, the Object Class itself is automatically added as a data source. In actions and effects, this data source is referred to as **Current Object**. If the rule is triggered by the event **On After Modify**, you will also have access to the **Original Object** as a separate data source.You can add other data sources to the Rule and interconnect them by filtering the data sources. That is, when an event occurs for an object this may affect releated objects. For example, if the budget amount for an _activity_ is changed, the total budget amount for the _project_ has to be updated.

1.  Click the **Data Sources** tab.
2.  In the drop-down list **Select the object class this rule applies to**, the current Object Class has automatically been selected as a data source.
3.  Optionally select one or more properties the Rule is constrained to. This option is only available if the Rule triggers on an event where the value for a property may have been changed; **On After Create**, **On Before Modify**, **On After Modify**, **On Before Validate**, **On After Validate**. For example, when a _project_ is closed, the end date should be updated with the current date. The state transition for the _project_ is defined using conditional actions. At this point you will only constrain the rule to trigger on any change for the _State_ property. To constrain the Rule to one or more properties, click **Select**.
4.  You can define different selections of properties. The Rule will trigger if any of the selections contains a set of properties where the value for all of the properties have changed. To add properties to a selection, click **[...]**. To add a new selection, click **Add>>**. To delete a selection, click **Delete**.
5.  To add additional data sources, follow the [step-by-step procedure](../../logic/action-orchestration/data-sources.md "Data Sources") for adding a new data source.



## Add Actions to a Rule

1.  Click the **Actions** tab.
2.  Follow the [step-by-step procedure](../../logic/action-orchestration/actions.md "Actions") for adding a new action.



See Also

*   [Data Sources](../../logic/action-orchestration/data-sources.md)
*   [Conditions](../../common-concepts/conditions.md)
*   [Actions](../../logic/action-orchestration/actions.md)
*   [Effects](../../logic/action-orchestration/actions/effects.md)