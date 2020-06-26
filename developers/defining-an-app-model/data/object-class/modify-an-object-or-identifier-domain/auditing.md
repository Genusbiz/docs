# Auditing

Genus Apps allows you to add auditing capabilities to an Object Class. Audit trails for an Object Class is stored in the [Event History](../../../../../terminology.md) which is a chronological sequence of audit trails, each of which contains evidence directly pertaining to and resulting from an event. The Event History enables users to reconstruct and examine the sequence of events and/or changes in an event for an object.

If an Object Class is part of a [composition](../../../../installation-and-configuration/composition.md "Composition"), audit trails for an object are logged in the Event History both for the object and the composition. Events such as **Created**, **Modified** and **Deleted**, are logged as a **Modified** event on the composition. For example, if _Contact Person_ is part of _Customer_, and a new _contact person_ is added to a _customer_, the event is logged as a **Create** event on the _contact person_ and a **Modified** event on the _customer_.


## Events Tracked in the Event History

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Event</th>

<th>Description</th>

</tr>

<tr>

<td>**Read**</td>

<td>Occurs when an object is opened for reading. For example, if an object is opened in a Form or sent to a printer.</td>

</tr>

<tr>

<td>**Execute**</td>

<td>Occurs when an object with dynamic content is executed, for example an Report or an Agent.</td>

</tr>

<tr>

<td>**Create**</td>

<td>Occurs when an object is created.</td>

</tr>

<tr>

<td>**Modify**</td>

<td>Occurs when one or more properties for an object have been changed, or an object which is part of a composition is created, modified or deleted.</td>

</tr>

<tr>

<td>**Delete**</td>

<td>Occurs when an object is deleted.</td>

</tr>

<tr>

<td>**Link and Unlink**</td>

<td>Occurs when an object is linked/unlinked to/from another object. For example, if an *employee* is assigned as a key account manager for a *customer*, this will generate a link event on the *employee object*.</td>

</tr>

<tr>

<td>**Search**</td>

<td>Occurs when a search for objects of this type is performed.</td>

</tr>

<tr>

<td>**Authorized**</td>

<td>Occurs when permissions are granted/revoked for a security group or a user account on an object.</td>

</tr>

</tbody>

</table>

## Activating Auditing for an Object Class

1.  Select the Object Class for which you want to activate auditing. Note that if the Object Class is part of a composition, auditing is activated on the composition the Object Class is part of.
2.  Right-click the Object Class, and then on the shortcut menu, click **Open**.
3.  Click the **Events** tab.
4.  In the section **Auditing**, select the **Enabling auditing** check box.
5.  Choose which events you want to track in the Event History. If the event should be tracked for all objects, click the **Mandatory** check box. To allow users to [select if the event should be tracked for individual objects](../../../../../users/navigate-view-modify-and-control/working-in-forms/advanced/view-history.md "Modify Auditing for an Object"), click the **Optional** check box. Note that the events **Create** and **Delete** not can be omitted from the Event History when auditing is activated. To disable auditing for an event, click the **Never** check box.

If auditing of _read_ events is enabled you also have to select the **Enable Read Audit Trail** checkbox of the data source in the form or task that you want to audit. This setting is set to false by default. When working with commit scopes in tasks, agents, rules, i.e. it is also possible to prevent auditing of the committed changes of the objects by selecting the **Disable Audit Trail** checkbox under the scope settings.


## Advanced Auditing Options

**Logging of Link and Unlink Events**

Logging of link and unlink events occurs when an object from the Object Class is linked to or unlinked from another object. You can reduce the number of events logged by specifying that these events not are logged for all properties.

1.  Click **Advanced**.
2.  In the **Advanced Auditing Options** dialog box, select the **Do not log events for these properties** check box.
3.  Click **Select**.
4.  In the **Select Properties** dialog box, all properties with a link to the Object Class are displayed.
5.  To add a property, select the property in the **Available List**, and then click **Add**.
6.  To remove a property, select the property in the **Selected Properties** list, and then click **Remove**.

**Logging of Events for Object Classes within this Composition**

By default, events are logged for all Object Classes within a composition. To disable logging for one or more Object Classes, follow these steps:

1.  Click **Advanced**.
2.  In the **Advanced Auditing Options** dialog box, select the **Do not log events for these Object Classes** check box.
3.  Click **Select**.
4.  In the **Event Logging** dialog box, click to clear the **Enabled** checkbox if you want to disable logging for an Object Class.
