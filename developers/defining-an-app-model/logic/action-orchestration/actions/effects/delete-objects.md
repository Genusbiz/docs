# Delete objects

Use this effect to delete objects in a data source, sign in history for accounts, execution history for agents, or event history for objects. For information on committing changes, adjusting transaction timeouts, running with elevated privileges, and suppressing user notifications, see [Scope](../blocks/scope.md).

## Delete objects in a data source

Deletes all objects contained in a data source, or a filtered set of objects. In some cases, you can delete objects on a type level, that is, deleting objects which not are present in your data source. To do this, click to clear the **Restrict to objects in a data source** check box. This is useful if you want to delete large volumes of data and do not want to load the objects into a data source. To speed up performance, no integrity check is performed when objects are deleted. This option is only available for data sources which satisfies the following requirements:

* The data source has to be of type object
* The data source cannot be composed of other data sources
* The data source is not restricted by security permissions
* The data source cannot be part of another data source restricted by security permissions
* Audit trails are not logged in the event history for the data source

> [!NOTE]
> If the delete operation not is restricted to objects in the data source, the transaction is committed immediately regardless of the commit settings of any scope the effect is defined within.

## Delete event history

To control the growth of history, Genus Apps provides capabilities to define "retention rules" for history logs, like the sign in history, agent exeution history, and the event history,
For more information, see [Deleting log entries in the history](../../../../../guidelines-and-best-practices/deleting-log-entries-in-the-history.md)
