## Create a New Identifier Domain

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, click the **Object Classes** folder.
3.  In the **File** menu, point to **New**, and then click **Identifier Domain**.
4.  Select the logical database where the table for the Object Class is located. Logical databases are defined in [Genus Configuration](../../installation-and-configuration/configure-and-maintain-genus-server.md).
5.  If your directory contains more than one data set, in the **Read Database Dictionary from Data Set** box, select which data set to access when reading the database dictionary. The database dictionary is used for reading the definitions for the tables stored in your database.
6.  Click **Next**.
7.  In the **Database Table** box, select the table containing data for the Object Class.
8.  In the **Name** box, type a name for the Object Class.
9.  In the **Identifier Type** box, select if identifiers are generated using a sequential counter, or extracted from a pool of predefined identifiers. Note that if identifiers are generated using a sequential counter, the table must contain one row with an initial value for the column containing the next available identifier.
10.  Click **Next**.
11.  If you have selected **Sequential Counter** as identifier type in step 8, in the **Identifier Column** box, select the column containing the counter value. You can only choose among columns with an integer data type.
12.  If you have selected **Pool** as identifier type in step 8, in the **Identifier Column** box, select the column containing the pool of identifiers. You can only choose among columns with an integer or a character based data type. The selected column will be defined as primary key for the Object Class. In the **State Column** box, select the column containing the identifier state. You can only choose among columns with an integer data type.
13.  Click **Next**.
14.  To modify the properties created for the identifier- and state column, click the property in the list, and then click **Modify**. More information on how to define a property is described in the article [Modify an Object Class Property](../object-class-property/modify-an-object-class-property.md).
15.  To save the Object Class, click **Finish**.

See Also

*   [Modify an Object or Identifier Domain](modify-an-object-or-identifier-domain.md)
*   [Modify an Object Class Property](../object-class-property/modify-an-object-class-property.md)