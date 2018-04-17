# List and lookup controls

The list and lookup controls display and edit fields that reference other objects. Some of the controls can also be used with object binding type to set the [active object](../../../../common-concepts/active-object.md) of a data source.

See [Common Control Properties](common-control-properties.md), in addition to the control specific properties below.


## Combo Box

The combo box combines the functionality of a single-line text editor with a dropdown window. The dropdown displays a list of items which can be selected by the end-user. Selecting an item changes the editor's edit value. To empty a combo box, the user must press the CTRL + DELETE keys.

The control supports both data binding types

*   Value: the control can be bound to a field that references other objects
*   Object: the control can be bound to a data source


Property                |  Description
------------------------|------------------------------------------------------------------------
Data Filter             | Filters the data for the control.<br><br><ul><li>For data binding type Object, the data binding data source is filtered.</li><li>For data binding type Value, the data source referenced by the data binding field is filtered.</li></ul>
Display Value           | A field in the data source to display as the value in the list.
Open in Default Form    | The selected object can be opened using the [default form](../../../../data/object-class/modify-an-object-or-identifier-domain/explore.md) for the object class.
Show Special Items      | Show items to assist the user with selection<br><br><ul><li>**None** - the user can click to clear the value. Only displayed for Native and Radio Button styles.</li><li>**Select All** - the user can click this item to select all the items. Only displayed for Check Box style.</li></ul>
Sort Order              | Sort the list by display value<br><br><ul><li>**None** - Do not sort.</li><li>**Ascending** - Sort alphabetically ascending.</li><li>**Descending** - Sort alphabetically descending.</li></ul>
Style                   | Defines the visual style of the control<br><br><ul><li>**Native** - Show as standard combo box.</li><li>**Check Box** - Show as a list of check boxes.</li><li>**Radio Button** - Show as a list of radio buttons.</li></ul>


## List Box

The list box edit displays a list of items, from which one or more can be selected, depending on the selection mode.

The control supports both data binding types

*   Value: the control can be bound to a field that references other objects
*   Object: the control can be bound to a data source


### General

Property                |  Description
------------------------|------------------------------------------------------------------------
Data Filter             | Filters the data for the control.<br><br><ul><li>For data binding type Object, the data binding data source is filtered.</li><li>For data binding type Value, the data source referenced by the data binding field is filtered.</li></ul>
Default Selection       | Defines which items in the list that are selected initially. Only applicable for data binding type Object.<br><br><ul><li>**None** - No items are selected</li><li>**Mark First Item** - The first item in the list is selected.</li><li>**Condition** - A condition defines which items are initially selected.</li></ul>
Display Value           | A field in the data source to display as the value in the list.
Orientation             | <ul><li>**Horizontal** - The items in the list is displayed from left to right.</li><li>**Vertical** - The items in the list is displayed from top to bottom.</li></ul>
Selection Mode          | Defines how the control accepts selection of items.<br><br><ul><li>**Single** - Only one item can be selected at the time.</li><li>**Multiple** - Several items can be selected at the same time. An item is selected or de-selected by clicking on it.</li><li>**Extended** - Several items can be selected at the same time. To select consecutive items, click the first item, press and hold down SHIFT, and then click the last item. To select nonconsecutive items, press and hold down CTRL, and then click each item.</li></ul>
Show Special Items      | Show items to assist user with selection<br><br><ul><li>**None** - the user can click this item to clear the value. Only displayed for Native style Single selection mode.</li><li>**(Select All)** - the user can click this item to select all the items. Only displayed for Check Box style.</li></ul>
Sort Order              | Sort the list by display value<br><br><ul><li>**None** - Do not sort.</li><li>**Ascending** - Sort alphabetically ascending.</li><li>**Descending** - Sort alphabetically descending.</li></ul>
Style                   | <ul><li>**Native** - Displays a plain list of items. Can be combined with all selection modes.</li><li>**Check Box** - Displays a list of items where each item is preceeded by a check box. Only available in combination with selection mode Multiple.</li><li>**Radio Button** - Displays a list of items where each item is preceeded by a radio button. Only available in combination with selection mode Single.</li></ul>


### Size and Position

Property                |  Description
------------------------|------------------------------------------------------------------------
Maximum Lines           | The maximum number of lines the list box can display without scroll bars. If there are less items to display the size of the control is reduced accordingly.


## Search Box

The search box combines the functionality of a single-line text editor with a search button that opens a search window. Write a term in the box and press ENTER or TAB to do a quick lookup for an object, or click the search button to perform a more specific search based on fields in the object.

the control can be bound to a field that references other objects


Property                |  Description
------------------------|------------------------------------------------------------------------
Data Filter             | Filters the data for the control.
Display Value           | A field in the data source to display as the value in the list.
Open in Default Form    | The selected object can be opened using the [default form](../../../../data/object-class/modify-an-object-or-identifier-domain/explore.md) for the object class.
Hierarchy               | The hierarchy to use when displaying items in the data source. This is useful when selecting from items that are structured in an hierarchical manner. For example when selecting from units in an organisation with the following levels *Company - Department - Unit*.

## Tokenizer Edit

Tokenizer Edit is a input control supporting multiple items. The main features of the Tokenizer Edit (compared to Combo Box) are:
* Keyboard friendly lookup and modifying selected items. (similar to addressee field in Outlook. Use Ctrl+k to force lookup).
* Simpler and more explicit configuration. There is no need to configure "Part of Object Class with Parent/Child Property on the 'link table' OC.
* Configure control specific Default Values (on create) when a link object is created.
* Specify Search Restriction and Display name for lookup items. The control shares some features with existing Combo Box when configured with the Check Box-style and bound to a many-to-many relationship.
* Specify a field to be used whenever there are no matching results from the lookup (unresolved field).

Property                |  Description
------------------------|------------------------------------------------------------------------
Data Restriction        | Filters the data for the control.
Default Values          | Defining the default values for new entries.
Null Text               | Text to be displayed if there are no entries.
Lookup Field            | The field to be used for the lookup.
Lookup Restriction      | Filters the data for the control. 
Lookup Display Name     | A field in the data source to display as the value in the controller.
Unresolved Field        | A field in the data source to be used if the lookup is unsuccessful (no match).
Open in Default Form    | The selected object can be opened using the [default form](../../../../data/object-class/modify-an-object-or-identifier-domain/explore.md) for the object class.


### Usage example
A project has participants (person) with different roles (Role A, Role B, Role C etc.). A Tokenizer Editor for each project role may be added to a project-form. Data Restriction on the control can ensure only persons with 'Role A' is presented in Role A listing. In the same way, a default value may be defined for Role A control. Adding a person to the Role A will automatically assign appropriate role to the relational link object. The Tokenizer control properties 'Search Field', 'Search Restriction' and 'Display Name Field' provides customization of how to access and visualise Person items inside the control. The unresolved field can be used in this example as a holder for value combinations of a Person not registered in the system, but nevertheless has a role.
