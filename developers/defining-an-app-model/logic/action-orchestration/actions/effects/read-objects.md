# Read objects

With this effect you can read objects into a data source restricted by a data filter, and optionally display a dialog where the user can select one or more objects from the read objects (available in tasks). You can choose if the objects are added to, kept in or removed from existing objects in the data source, or if existing objects are replaced by the read objects. The objects can be read from the database or from another datasource of the same type.

Objects can be read into data sources of type *Object*, *File*, and *Schema*. It is not possible to select data sources which are enumerated. Data sources of type *File* and *Schema* reads objects from the clipboard, and is available in tasks.

The number of objects read is restricted by defining a [data filter](../../data-sources/specifying-a-data-filter-for-a-data-source.md). If you want to clear all objects in the data source, leave the data filter blank and click **Replace existing objects with read objects**.

## Reading objects from another data source
Instead of reading objects from the database, you can read objects from another data source of the same type. To do this, select the **Read from Data Source** check box, and then select a data source. Normally when data is read from another data source, objects are copied from the source to the target data source. Read objects are marked as synchronized with storage to avoid that uncommitted changes in the source are applied twice. In some cases you may want to move an object from one data source to another and keep the current state of the object. To do this, select the **Transfer objects** check box.

## Prompt users to select object
To allow the user to select one or more objects from the read objects, click the **User Interaction** tab, and then click the **Prompt users to select objects** check box. This option is only available for data sources of type *Object*. You can configure the dialog by defining elements such as

* A dialog title and prompt
* Which fields to display
* Sorting and grouping of data
* The number of objects which can be selected (one or unbounded)
* Initial selection (none or all)
* Which dialog buttons to display

To abort execution of succeeding effects if a user chooses the *Cancel* or *No* button in the dialog box, select the **Abort execution on cancel** check box.

To store the user respons, click the **Set a fields value equal to the exit code** check box. You can either store the user response as a boolean value or an integer value. See the article [Dialog box exit codes](dialog-box-exit-codes.md) for an overview of exit codes.

## Reading data into built-in data sources
The effect supports reading data into two built-in data sources:

* [Account](../../data-sources/the-account-data-source.md)
* [Event History](../../data-sources/the-event-history-data-source.md)

The data sources are added in the same way as any other data source based on an object class.

### Reading account data
The account data source provides general information about an account, and which security groups the account is member of. The effect allows you to lookup an account by specifying a user name and optionally a password in the data filter. The effect returns a maximum of one account matching the user name and password.

### Reading the event history
The event history data source provides all the information stored in audit trails for different types of events. The event history can be read for all objects in a given object class, or objects restricted by a data filter. In addition you can filter on properties such as

* Event
* Date
* Object class properties modified in events of type *Modify*

A typical usage for reading the event history is to provide persons with a copy of all personal data a company stores about them (as imposed by the EU's General Data Protection Regulation). 

> [!NOTE]
> Reading the event history can be a heavy operation, and you should limit the history to one or a few objects from a given object class.
