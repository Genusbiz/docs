## Tasks

With a Task you can define complex and often time consuming manual operations, and publish the Task to Forms and Tables.

A Task is defined by:

*   Adding data sources used by actions as sources of information.
*   Adding actions used to perform different kinds of tasks.
*   Publish the Task to Forms and Tables.


## Create a Task

1.  [Open Genus Studio](getting-started/how-to-open-genus-studio.md "How to Open Genus Directory").
2.  In the **Directory** tree, click the **Tasks** folder, and then on the toolbar, click **New**![IDB95B882E01694F78.IDFB9EB60B2D1641C4.jpg](media/IDB95B882E01694F78.IDFB9EB60B2D1641C4.jpg).
3.  In the **Name** box, type a name for the Task.
4.  Optionally type a description in the **Description** box.
5.  Optionally select a symbol in the **Symbol** box. A symbol can make it easier for users to understand the purpose of the Task. You can choose between different effect symbols.
6.  Select the **Enable Run on Application Server check box** to disable effects with user interaction so that the task can be called by rules, agents, and web services.
7.  Select the **Enable Modify by Users without Version Deployment** check box to allow users to directly modify specific effects which offer this functionality, like the Merge Data to a Document effect.
8.  Follow the instructions described below for adding data sources and actions to the Task, and how to publish the Task.



## Add Data Sources to a Task

1.  Click the **Data Sources** tab.
2.  Follow the instructions in the [step-by-step procedure](logic/action-orchestration/data-sources.md "Data Sources") for adding a new data source.



## Add Actions to a Task

1.  Click the **Actions** tab.
2.  Follow the [step-by-step procedure](logic/action-orchestration/actions.md "Actions") for adding a new action.



## Publish a Task

A publication is used to make the Task available to users in Forms and Tables. You can define one or more publications for a Task.

1.  Click the **Publications** tab.
2.  Click **Add**.
3.  Optionally type a display name for the publication in the **Display Name** box. The display name is used in menus where the Task appears. If no name is given, the name of the Task is used as the display name.
4.  Optionally type a screen tip for the publication in the **Screen Tip** box. The screen tip is used in menus where the Task appears. If the screen tip span more than one line, add an empty line after the first line to make the first line the title of the screen tip. The title appears in bold, and is separated from the body text with a thin line.
5.  Optionally type a description explaining the purpose of the task in the **Description** box.
6.  In the **Choose the context for the publication** section, if **None** is selected as context, the Task can only be run from a shortcut to the Task in the Navigation Pane. This is useful for Tasks which not operates in a context, for example an administrative Task executed on an irregular basis. If you want the Task to be available in all Forms and Tables where an object appears, select **A data source** as context. Select **A form field** if the Task only should be available from a specified field in a form. For example you can define a Task which gives the user the opportunity to register a new customer directly from a project. To restrict the Task to a specified table, select **A table**.
7.  In the **Command** box, select a command to determine where the Task should appear in menus and on the toolbar. Select **Run** if you want the Task to appear in the **Task Pane** and in the **Actions** menu. If you have selected **None** as context, no other command is available. **New** and **Open** displays the Task in the **New** and **Open** menu respectively. If you want the Task to run when the user selects the default new or open command, click the **Default** check box. The choice regarding where you want the Task to appear should be based on the nature of the operation performed by the Task. The last two commands, **Copy** and **Paste Special**, are somewhat different. When a Task i published to **Copy**, the content of data sources representing a schema or a file are placed on the clipboard after the Task is run. Note that if the task contains any effects of type [Copy Data to the Clipboard](logic/action-orchestration/actions/effects/copy-data-to-the-clipboard.md "Copy Data to the Clipboard"), the content of the data sources are not placed on the clipboard. That is, the data placed on the clipboard by effects are prioritized. If you publish the Task to **Paste Special**, the Task will appear in the **Paste Special** dialog box. The task will only appear in the dialog if a) the option **Get object(s) from the clipboard** is selected as data filter for one or more data sources and b) the clipboard contains data that can be used to populate these data sources. See [copy and paste data](../how-to/exchange-data-with-other-applications/copy-and-paste-data.md "Copy and Paste Data") for examples on how to publish a Task to **Copy** and **Paste Special**.
8.  If you have chosen a context for the publication, the objects selected from the context are sent as input when running the task. These objects can be used for filtering your data sources, and gives you the opportunity to execute context sensitive actions. In the section **Allow running this task when**, choose if the task can run when a) **The user has selected one object**, b) **The user has selected one or more objects** or c) **Always**.
9.  In the section **Enabled**, click **Yes** if the Task should be enabled for any object selected by the user. If the Task only should be enabled for objects satisfying certain criteria, click **If this condition is true**. To specify a [condition](common-concepts/conditions.md "Conditions"), click **Set Condition**. The condition is evaluated before the Task is run. If the condition not is satisfied, the message typed in the **Display this message if the condition not is satisified** is displayed. Click **No** to temporarily disable the publication.
10.  Click the **Data Filters** tab.
11.  To specify a data filter, select a data source in the list and click **Modify**. Follow the instructions in the [step-by-step procedure](logic/action-orchestration/data-sources.md "Data Sources") on how to filter data for a data source. If you have selected a context for the publication, the objects selected from the context are available from the data source named **Context: <name-of-the-context>**, for example, *Context: Customer*.
12.  Click the **Advanced** tab.
13.  Refresh the data source the task is published to when the task has finished running.

<table style="WIDTH: 100%">

<tbody>

<tr>

<th>Command</th>

<th>Menu</th>

<th>Enabled as default command</th>

</tr>

<tr>

<td>Run</td>

<td>Actions, Task Pane Actions Page</td>

<td>-</td>

</tr>

<tr>

<td>New</td>

<td>File - New</td>

<td>X</td>

</tr>

<tr>

<td>Open</td>

<td>File - Open</td>

<td>X</td>

</tr>

<tr>

<td>Report</td>

<td>Report, Task Pane Report Page</td>

<td>-</td>

</tr>

<tr>

<td>Send</td>

<td>File - Send</td>

<td>-</td>

</tr>

<tr>

<td>Reply</td>

<td>File - Reply</td>

<td>-</td>

</tr>

<tr>

<td>Forward</td>

<td>File - Forward</td>

<td>-</td>

</tr>

<tr>

<td>Mail To</td>

<td>CTRL+click on a mail address in a table or a form.</td>

<td>-</td>

</tr>

<tr>

<td>Copy</td>

<td>Edit - Copy</td>

<td>-</td>

</tr>

<tr>

<td>Paste Special</td>

<td>Edit - Paste Special</td>

<td>-</td>

</tr>

</tbody>

</table>



## View the Execution History for a Task

1.  Right-click the Task, and then in the shortcut menu, click **Edit**.
2.  In the **File** menu, click **History**. The [event history](../../terminology.md "Event History") for the Task is shown.

You can also view the executions for a Task under the History entry in the navigation pane, by clicking the Execute History entry. Here it is possible to view the execution history for all Tasks.

The amount of information traced for each execution can be specified in the history setup for Task. To change this setting do the following:

1.  In the **File** menu, click **Properties**.
2.  Click the **History** tab.
3.  Select the **Save detailed execution trace in history** check box if you want to trace more detailed information for each execution. By default this setting is not activated. Note that activating this setting may generate a large amount of data for each execution.



See Also

*   [Data Sources](logic/action-orchestration/data-sources.md)
*   [Conditions](common-concepts/conditions.md)
*   [Actions](logic/action-orchestration/actions.md)
*   [Effects](logic/action-orchestration/actions/effects.md)