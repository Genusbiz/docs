## Create a New Object Domain

1.  [Open Genus Studio](../genus-studio-basics/how-to-open-genus-studio.md).
2.  In the **Directory** tree, click the **Object Classes** folder.
3.  In the **File** menu, point to **New**, and then click **Object Domain**.
4.  In the Data Provider box, select **RDBMS**to bind the object class to a RDBMS table, or select **None** to create an unbound object class.
5.  If you want to define the object class and add the object class properties manually, click to clear the **Create from RDBMS Table** checkbox, and then click **Finish**.
6.  If you want to use an RDBMS table as template, leave the **Create from RDBMS Table** checkbox selected.
7.  Select the logical database where the table for the Object Class is located. Logical databases are defined in [Genus App Services Configuration](../../installation-and-configuration/configure-and-maintain-genus-server.md).
8.  If your directory contains more than one data set, in the **Read Database Dictionary from Data Set** box, select which data set to access when reading the database dictionary. The database dictionary is used for reading the definitions for the tables stored in your database.
9.  Click **Next**.
10.  In the **Database Table** box, select the table containing data for the Object Class.
11.  In the **Name** box, type a name for the Object Class.
12.  Click **Next**.
13.  Select which table columns to add as properties to the Object Class. To add one or more column, press CTRL and click the columns in the **Available Table Columns** list, and then click **Select**. To remove one or more selected columns, press CTRL and click the columns in the **Selected Table Columns** list, and then click **Remove**. To select or remove all columns, click **Select All** or **Remove All** respectively.
14.  Click **Next**.
15.  In the **Primary Key** list, select which properties that comprises the primary key for the Object Class. To add a property to the primary key, click **Add**.
16.  In the **Property** box, select a property.
17.  In the **Type** section, select **Simple Primary Key** if the primary key consists of only one property. Select **Composite Primary Key** if the primary key consists of two or more properties.
18.  Select the **Generate Identifiers Automatically** check box to let the system generate identifiers for the key. This option is only available for properties with data type integer or string. A numeric key is generated as a sequential number that uniquely identifies an object. A text key is generated using a [GUID (Globally Unique Identifier)](../glossary.md). Note that the data size for the property must be at least 32 characters to store a GUID.
19.  Select the **Change Data Interpretation to Concept** check box to give the primary key property a complex data interpretation of the object class. This is often the case for objects with an internal identifier as primary key, while objects with a code or a number as primary key will use the content of the property directly. This option is always selected when the **Generate Identifiers Automatically** is selected.
20.  Click **Next**.
21.  For each table column selected in step 9, a property is created. To modify the definition for a property, click the property in the list, and then click **Modify**. More information on how to define a property is described in the article [Modify an Object Class Property](../object-class-property/modify-an-object-class-property.md).
22.  Click **Next**.
23.  To define how objects are named, add one or more properties from the Object Class. The name identify an object to the user, and does not have to be unique. For example, the *article number* and *name* of a *product*. For a given object, the name is constructed by concatenating the values for the selected properties.
24.  Click **Next**.
25.  To make this Object Class a part of an existing Object Class, a Composition, select **Part of Object Class** and in the list select the Object Class. In the **Parent/Child Property** box, select the property that identifies the connection between the Object Classes. If the Object Class defines a simple relation between two Object Classes, for example, tags used to categorize pictures or files, you can specify a **Domain Property**. For more information on these settings, see [Object Class General Settings](modify-an-object--or-identifier-domain/general-settings.md).
26.  To save the Object Class, click **Finish**.

See Also

*   [Modify an Object or Identifier Domain](modify-an-object-or-identifier-domain.md)
*   [Modify an Object Class Property](../object-class-property/modify-an-object-class-property.md)