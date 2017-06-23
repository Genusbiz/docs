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

