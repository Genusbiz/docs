# Agents

With an agent, you can define actions to perform once or recurring at a scheduled time.

An agent is defined by:

*   Adding data sources used by actions as sources of information.
*   Adding actions used to perform dfferent kinds of tasks.
*   Defining a schedule.


## Create an agent

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, click the **Agents** folder, and then on the toolbar, click **New**  ![ID51D3C2D9C7E84ECD.IDE73D4C586E0C4198.jpg](media/ID51D3C2D9C7E84ECD.IDE73D4C586E0C4198.jpg).
3.  In the **Name** box, type a name for the Agent.
4.  Optionally type a description in the **Description** box.
5.  If you want to receive an alert each time the Agent has finished running, select the **Notify owner each time the agent has finished running** check box. To change the owner for an agent, see below.
6.  Follow the instructions described below for adding data sources, adding actions, defining a time schedule, and enabling the Agent.

If there are more than one [Data Set](../general-settings/data-sets.md), the agent schedules one execution for each data set. To limit the execution to one data set, do the following:

1.  In the **File** menu, click **Properties**.
2.  In the **Data Set Binding** section, click **Data Set** and then select the data set from the list.

If the Agent fails to execute, the owner or the delegate for the Agent will receive an alert. When you create a new Agent, you would automatically be assigned the ownership. To change the owner or delegate the Agent to another user account, do the following:

1.  In the **File** menu, click **Properties**.
2.  Click the **Details** tab.
3.  In the **Owner** or **Delegate** box, select a user account.



## Add Data Sources to an Agent

1.  Click the **Data Sources** tab.
2.  Follow the instructions in the [step-by-step procedure](action-orchestration/data-sources.md "Data Sources") for adding a new data source.



## Add Actions to an Agent

1.  Click the **Actions** tab.
2.  Follow the instructions in the [step-by-step procedure](action-orchestration/actions.md "Actions") for adding a new action.



## Define a Schedule for an Agent

Scheduling of Agents are done in the Execution Monitor. You can add new schedules or copy existing schedules from other agents.

**Add Schedule**

To schedule an Agent do the following:

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Agents** folder, and then click the **Execution Monitor** folder.
3.  In the list of Agents, right-click the Agent to schedule, and click **Schedule**.
4.  In the **Schedule Type** list, select the type of schedule. You can choose between a daily, weekly or monthly schedule, or if the Agent should be run only once.
5.  In the **Start Time** box, enter the time to run the Agent.

Depending on the type of schedule selected, the information about when to run the Agent will vary:

<table style="WIDTH: 100%">

<tbody>

<tr>

<td>**Schedule once**</td>

<td>

1.  Enter the date the Agent should run on.

</td>

</tr>

<tr>

<td>

**Schedule daily**

</td>

<td>

1.  Enter a day interval, that is, if the Agent should run every day, every 2 days, every 3 days and so on

</td>

</tr>

<tr>

<td>**Schedule weekly**</td>

<td>

1.  Enter a week interval, that is, if the Agent should run every week, every 2 weeks, every 3 weeks and so on.
2.  Choose which weekdays to run the Agent.

</td>

</tr>

<tr>

<td>**Schedule monthly**</td>

<td>

1.  Select which day of the month, which weekday to run the Agent, or the last day of the month.
2.  Select which month(s) to run the Agent.

</td>

</tr>

</tbody>

</table>

The next run time for the Agent is acquired from the Application Server when you save the schedule, and is displayed in the **Next Run Time** column.

**Advanced scheduling options**

You can specify a period an Agent should run, and schedule it to repeat in an interval less than one day:

1.  Click **Advanced**.
2.  In the **Start Date** box, enter the date the agent should start.
3.  To specify when the agent should stop running, select the **End Date** check box, and enter the date of the last day the agent should run.
4.  Select the **Repeat Agent** check box.
5.  Specify the number of minutes or hours in which you want the Agent to be repeated.
6.  Specify the time to end repeating the Agent or the duration to repeat the Agent.

Add multiple schedules:

1.  Select the **Show multiple schedules** check box.
2.  To add a new schedule, click **New**. To remove a schedule, select the schedule and click **Delete**.

Specify max queue time:

*   Select the **Max Queue Time** check box, and specify the maximum number of seconds from the scheduled start time that the Agent can be queued before it is executed. The instant an Agent is scheduled to run it is placed in a queue and executed as soon as possible. For Agents which repeats in an interval less than one day, it may be critical for the result that the execution is not delayed. If this time limit is exceeded, the Agent is removed from the queue.

Specify max running time:

*   This setting allows you to limit the amount of time an Agent is allowed to run. Select the **Max Running Time** check box, and specify the maximum number of seconds the Agent is allowed to run. If the Agent is forced to stop when this time limit is exceeded, the owner or the delegate for the Agent will receive an alert.

The agent may be interrupted before max running time is exceeded, due to the [App Services Recycling](../../installation-and-configuration/configure-and-maintain-genus-server/app-services-recycling.md) settings on the application server.

**Copy Schedule**

 To copy an existing schedule from an Agent, do the following:

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Agents** folder, and then click the **Execution Monitor** folder.
3.  In the list of Agents, right-click the Agent to copy the schedule from, and click **Copy**.
4.  Click the Agent to copy the schedule to, and click **Paste Schedule**. 



## Enable or Disable an Agent

To enable or disable an agent, or to see the current status of an agent, open the **Execution Monitor**. Every agent is listed with information on whether is is enabled or disabled, current state, time and date of the last execution, time and date of next planned execution, the schedule, and which data set it belongs to.

![IDE00908FA7452448D.png](media/IDE00908FA7452448D.png)

To disable or enable an agent do the following

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md)
2.  In the **Directory** tree, expand the **Agents** folder, and then click the **Execution Monitor** folder.
3.  If the agent is disabled, right-click the agent and click **Enable**.
4.  If the agent is enabled, right click the agent and click **Disable**.



## View the Execution History for an Agent

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, expand the **Agents** folder, and then click the **Execution Monitor** folder.
3.  Right-click the Agent, and then on the shortcut menu, click **Execution History**.
4.  To view more details for an execution, select the execution in the log and click **View Event**.

In the Execution Monitor, stopped agents are listed in gray font color, failed agent executions are listed in red font color, successful executions with warnings are listed in blue font color.

You can also view the executions for an Agent under the **History** entry in the navigation pane, by clicking the Execute History entry. Here it is possible to view the execution history for all Agents.

An execution will report one of the following statuses:

*   **Stopped**. The agent is stopped, either temporarily by the system, or after being disabled by a user.
*   **Scheduled**. An agent is scheduled for execution after having been stopped.
*   **Queued**. The next run time is passed, and the Agent is placed in queue for execution.
*   **Timed Out**. The Agent has been queued for a period longer than the defined maximum queue time.
*   **Running**. The Agent is still running.
*   **Succeeded**. Execution of the Agent finished successfully.
*   **Failed**. Execution of the Agent failed. You should inspect the details for the execution to find the source of the error.

By default only the last 100 executions are displayed. If you want to change the number of executions displayed, do one of the following:

*   Click **Display the last <n> executions** and enter the number of executions.
*   Click **Display all executions since** and enter a date.

 The amount of information traced for each execution can be specified in the history setup for the Agent. To change this setting do the following:

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the Directory tree, expand the **Agents** folder.
3.  Right-click the Agent, and then click **Open**.
4.  In the **File** menu, click **Properties**.
5.  Click the **History** tab.
6.  Select the **Save detailed execution trace in history** check box if you want to trace more detailed information for each execution. By default this setting is not activated. Note that activating this setting may generate a large amount of data for each execution. 



## Test Run an Agent

1.  If you have changed the definition for the Agent, you must [deploy](../getting-started/deploy-changes-in-the-directory.md) these changes to your computer (i.e. **Deploy Directory to This Computer**).
2.  Start the Genus desktop client.
3.  In the **File** menu, point to **Test Run** and then click **Agent**.
4.  Follow the instructions in the **Test Run** wizard.

Note that it is important to follow the steps above in the given sequence. Do *not change the definition of the agent or related parts of your application model after the deploy, and then do the test run. In such circumstances the test run might fail of subtle technical reasons.*



See Also

*   [Data Sources](action-orchestration/data-sources.md)
*   [Conditions](../common-concepts/conditions.md)
*   [Actions](action-orchestration/actions.md)
*   [Effects](action-orchestration/actions/effects.md)