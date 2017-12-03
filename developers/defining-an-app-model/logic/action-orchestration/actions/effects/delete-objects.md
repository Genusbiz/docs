# Delete objects

Use this effect to delete objects in a data source, sign in history for accounts, execution history for agents, or event history for objects. For information on committing changes, adjusting transaction timeouts, running with elevated privileges, and suppressing user notifications, see [Scope](../blocks/scope.md).

## Delete objects in a data source
Deletes all objects contained in a data source, or objects which satisfies a condition. In some cases, you can delete objects on a type level, that is, deleting objects which not are present in your data source. To do this, click to clear the **Restrict to objects in a data source** check box. This is useful if you want to delete large volumes of data and do not want to load the objects into a data source. To speed up performance, no integrity check is performed when objects are deleted. This option is only available for data sources which satisfies the following requirements:

* The data source has to be of type object
* The data source cannot be composed of other data sources
* The data source is not restricted by security permissions
* The data source cannot be part of another data source restricted by security permissions
* Audit trails are not logged in the event history for the data source

> [!NOTE]
> If the delete operation not is restricted to objects in the data source, the transaction is committed immediately regardless of the commit settings of any scope the effect is defined within.

## Delete the sign in history for accounts
Each time an account signs in, an entry is logged in the sign in history. The log entry contains information such as sign in date, computer name, and IP-address. You can delete log entries for all or a selected set of accounts where the sign in date is older than a number of days, months, or years. To delete all log entries irrespective of age, select **Now** in the **Older Than** box.  

## Delete the execution history for agents
Every time an agent runs, an entry is logged in the execution history. The log entry contains information such as start time, end time, and status for the execution. You can delete log entries for all or a selected set of agents where the start time is older than a number of days, months, or years. To delete all log entries irrespective of age, select **Now** in the **Older Than** box.

## Delete the event history for objects
The event history can be deleted for object classes defined in your directory and built-in classes such as tasks, agents, analysis, and reports. If the history is deleted for a defined object class, you can delete the history for all objects or objects contained in a data source. For built-in classes you can delete the history for all objects or a selected set of objects. In addition, you can specify the type of events which should be deleted and the age of the log entry. To delete all log entries irrespective of age, select **Now** in the **Older Than** box.  

See Also

*   [Deleting log entries in the history](../../../../../guidelines-and-best-practices/deleting-event-history-and-account-session-history.md)
