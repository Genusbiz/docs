## Add Properties to an Object Class from an RDBMS Table

You can add properties to an existing Object Class.

1.  [Open Genus Studio](../genus-studio-basics/how-to-open-genus-studio.md).
2.  In the Directory tree, click the **Object Classes** folder.
3.  In the table to the right, double-click the Object Class which you want to add properties to, and then double-click the **Properties** folder.
4.  Right-click in the list of properties, and select **New**, and then select Bound or Unbound. A bound property is connected to an RDBMS column, while an unbound property is not.
5.  For more information on how to define a property, see [Modify an Object Class Property](modify-an-object-class-property.md).

You can also add properties to an existing Object Class based on the columns in the RDBMS table associated with the Object Class.

1.  [Open Genus Studio](../genus-studio-basics/how-to-open-genus-studio.md).
2.  In the **Directory** tree, click the **Object Classes** folder.
3.  In the table to the right, right-click the Object Class which you want to add properties to, and then in the shortcut menu, click **Add Object Class Properties**.
4.  In the **Object Class Wizard**, click **Next**.
5.  Select which table columns to add as properties to the Object Class. To add one or more column, press CTRL and click the columns in the **Available Table Columns** list, and then click **Select**. To remove one or more selected columns, press CTRL and click the columns in the **Selected Table Columns** list, and then click **Remove**. To select or remove all columns, click **Select All** or **Remove All** respectively. Note that only columns which not have been added to the Object Class are displayed in the **Available Table Columns** list.
6.  Click **Next**.
7.  For each table column selected in step 4, a property is created. To modify the definition for a property, click the property in the list, and then click **Modify**. For more information on how to define a property, see [Modify an Object Class Property](modify-an-object-class-property.md).
8.  Click **Finish**.