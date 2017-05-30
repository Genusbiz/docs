## Display

Controls how the data for the property is displayed in the end-user interface, for example, in Forms and Reports.

**Screen Tip**

Text displayed when the user hovers the mouse over a graphical user interface control associated with the property. Use screen tips to explain the purpose and the content of the property.

**Average Display Length**

The default number of characters occupied by the property when data for the property is displayed in a table column.

**Average Display Height**

Applies to properties with data type **Character or String** and binary data types.

The default number of lines when data for the property is displayed in an edit control.

**Number Format**

Applies to properties with a numeric or date data type.

The format used when data for the property is displayed in an edit or a table control.

**Display Value**

Applies to properties with data interpretation **File URL** or **Internet URL**.

Value to display for a file- or Internet URL. You can display a constant value or a value stored in another property.

**Case Conversion**

Applies to properties with data type **Character or String**.

Determines if the text for the property is converted to uppercase or lowercase when displayed in an edit or a table control. The converted value will be stored if the user has access to modify the property.

**Enable Auto Complete**

Applies to properties with a data type referencing an object class. The value of the property is therefore a key which identifies an object in an object class.

When Auto Complete is disabled, the key is displayed instead of the name of the object defined for the referenced object class. It is also not possible to type a key or a name to automatically look up a new object when entering a value.

This is possible for both foreign keys and primary keys, but the main usage is for object classes where the primary key is also a meaningful value to the user. For example, in a <span style="FONT-STYLE: italic">Bank Account object class, where the <span style="FONT-STYLE: italic">Bank Account No is also the primary key, the Enable Auto Complete can be cleared to make it possible to both enter and display the value in a form or a table.

**Important****:** Auto Complete requires that the object you are looking up, has a default view defined.  
For example, the property Department in the object Employee has Auto Complete enabled. If the object Department has no default view, you have to define a default view for the object Department.