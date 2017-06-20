## View History

To view the changes, deletions etc. to your objects, right-click a row in your table, and in the menu, click **History**.

![ID4DAC55F434E142E0.IDC3233A7072DC4178.png](media/ID4DAC55F434E142E0.IDC3233A7072DC4178.png)

In the **History** dialog box, specify a search in the **Search** pane and click **Refresh**. Click an event to list the changes, like the old and new values shown below.

![ID4DAC55F434E142E0.IDDF44B0F4E8214230.png](media/ID4DAC55F434E142E0.IDDF44B0F4E8214230.png)

See [Event History](../../../../terminology.md "Event History") for more information. For information on how to search the history, see [Search in History](../../working-in-forms/advanced/view-history.md).

The availability of **History** is dependent on your specific application. Contact your system administrator if the **History** feature seems to lack in your specific context.


## Event Types

The format and contents of the details for an event vary depending on the <span style="FONT-STYLE: italic">event type.

**Executed**

A detailed execution log containing the start time, end time and status for the execution. The amount of information traced for each execution can be specified in the history setup for the object. Available for Tasks, Agents and Web Services. For more information, see:****

*   [**View the execution history for a Task**](../../../../developers/defining-an-app-model/logic/tasks.md)
*   [**View the execution history for an Agent**](../../../../developers/defining-an-app-model/agents.md)
*   [**View the execution history for a Web Service**](../../../../developers/defining-an-app-model/web-services/view-the-execution-history-for-a-web-service.md)

**Modify**

The source of a modified event can be one of the following:

*   The value for a property was modified. Both the old and the new value is recorded.
*   An object which is part of a composition was created.
*   An object which is part of a composition was deleted.

**Delete**

Not applicable when viewing the Event History for a single object.

**Link and Unlink**

The object which was linked or unlinked, and the property the object was linked to or unlinked from.

**Search**

Not applicable when viewing the Event History for a single object.

**Authorize**

The permissions granted or revoked for a security group or a user account on an object.

No details are logged for the event types **Read** and **Created**.

Note that if an object is part of a [composition](../../../../developers/installation-and-configuration/composition.md "Composition"), audit trails for the object are logged in the Event History both for the object and the composition. Events such as **Created**, **Modified** and **Deleted**, are logged as a **Modified** event on the composition. For example, if <span style="FONT-STYLE: italic">Contact Person is part of <span style="FONT-STYLE: italic">Customer, and a new <span style="FONT-STYLE: italic">contact person is added to a <span style="FONT-STYLE: italic">customer, the event is logged as a **Create** event on the <span style="FONT-STYLE: italic">contact person and a **Modified** event on the <span style="FONT-STYLE: italic">customer.

