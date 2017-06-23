# General Settings

**Object Class**

The Object Class the property is contained in.

**Display Name**

The display name for the property.

**Type**

A property can be defined as a **Data** or a **Function** property. Values for properties of type **Data** are stored in the database in the table column specified as **RDBMS Column Name** if data binding is **One-Way Bound** or **Two-Way Bound**, or in memory if data binding is **Unbound**. Values for properties of type **Function** are calculated using a [formula or a RDBMS expression](data-calculation.md). The value for a function property is recalculated whenever data are read or modified.

**Data Type**

Defines the kind of data the property can hold. For example integer or character. The following data types are supported:

*   Character or String
*   Float
*   16-bit Integer
*   32-bit Integer
*   64-bit Integer
*   Date
*   Date and Time
*   Time
*   Binary Fixed
*   Binary Variable
*   Binary Large Object
*   Textual Large Object

For more information, see [Mapping of Property Data Types and RDBMS Data Types](../mapping-of-property-data-types-and-rdbms-data-types.md "Mapping of Property Data Types and RDBMS Data Types").

For <span style="FONT-STYLE: italic">Character or String or <span style="FONT-STYLE: italic">Textual Large Objects some characters are illegal. See [Character String Requirements](../../../../../users/navigate-view-modify-and-control/advanced/character-string-requirements.md "Character String Requirements") for more information.

**Data Size**

Applies to properties with data type **Character or String** and binary data types.

The data size for binary data types is the maximum number of bytes that can be used to store the data. The data size for a character or string is the maximum number of characters the property can hold. Data size is required if the data type for the property is **Character or String** or **Binary Fixed**.

**Significant Decimals**

Applies to properties with data type **Float**.

The number of decimals used when comparing floating-point data during concurrency control. Concurrency control is performed when data for an object is updated, to avoid that one user overwrites another user's changes.

**Data Interpretation**

Defines how to interpret data of a given type. For example, string data can be interpreted as an e-mail address or an Internet URL. Most data types have a default interpretation, that is, data are interpreted based on the data type itself.

Data can be interpreted as a **simple type,** a **complex** **type** or a **complex association**.

*   **Simple types** represents a single piece of information, such as a number or a text. For more information, see the article [Simple Data Interpretations for a Property](../simple-data-interpretations-for-a-property.md "Simple Data Interpretations for a Property").
*   A **complex type** represents an Object Class in your Directory. For example, a numeric property containing the employee id for the manager of a project, should be interpreted as an employee. In the context of relational databases, this represents a foreign key, which is a referential constraint between two tables. Note that only Object Classes which has [a primary key which comprises a single property](../../object-class/modify-an-object-or-identifier-domain/data-integrity.md) can be used for complex interpretation. In addition, only Object Classes which has a primary key with the same data type and size as the property are available as complex interpretations. A special case exists for the property which represent the primary key for an Object Class. Data interpretation for this property has to be defined as the Object Class itself.
*   **Complex association** is used when the property can represent any Object Class within a predefined set of Object Classes. A common use of complex association is an Object Class containing a single outbound reference to a varying number of Object Classes. For example, an Object Class which represents a document can be attached to an employee, a customer, a project or an activity. For more information, see the article [Complex Association Data Interpretation for a Property](../complex-association-data-interpretation-for-a-property.md "Complex Association Data Interpretation for a Property").

**Data Encoding**

Applies to properties with a binary data type.

Determines how to encode binary data. Supported binary to text encoding schemes are **Base64**.

**Thumbnail Pixel Width**

Represents the width in pixels the thumbnail image is resized to, if it is wider. Only applicable for properties with data interpretation as thumbnail data file

 **Thumbnail Pixel Height**

Represents the height in pixels the thumbnail image is resized to, if it is higher. Only applicable for properties with data interpretation as thumbnail data file. 

**Provider Name**

For properties of type **Data**, with data binding **One-Way Bound** or **Two-Way Bound**, the value is required and specifies the name of the column in the table or view where data for the Object Class Property is stored.

For other properties a value is not required, and is only used in certain situations, like when using name binding to/from JSON or XML. For example when using the [Import Data](../../../logic/action-orchestration/actions/effects/import-data.md) effect.

**Outbound Reference Constraint**

Applies to properties with a complex data interpretation.

An outbound reference constraint is used to establish and enforce a link between data in two Object Classes. The constraint is linked to the primary key in the referenced Object Class. Although the main purpose of an outbound reference constraint is to control the data that can be stored in an Object Class, it also controls changes to data in the referenced Object Class. For example if an object is deleted in the referenced Object Class, the relational integrity between the two Object Classes are broken.

An outbound reference constraint prevents this situation. The contraint enforces referential integrity by guaranteeing that changes cannot be made to objects in the referenced Object Class if those changes invalidate the link to objects in another Object Class.

In some cases you may want to delete linked objects when an object in the referenced Object Class is deleted. To enable this option, click **Cascade Delete**.

For example, if an Object Class represents a <span style="FONT-STYLE: italic">membership in a <span style="FONT-STYLE: italic">student union, and a property represents a link to a <span style="FONT-STYLE: italic">student, the <span style="FONT-STYLE: italic">membership should be deleted whenever a <span style="FONT-STYLE: italic">student is deleted. The <span style="FONT-STYLE: italic">membership is owned by the <span style="FONT-STYLE: italic">student union, that is, it is part of the <span style="FONT-STYLE: italic">student union [composition](../../../../installation-and-configuration/composition.md "Composition"). If a <span style="FONT-STYLE: italic">student union is deleted, all <span style="FONT-STYLE: italic">memberships are automatically deleted. However, the <span style="FONT-STYLE: italic">membership is not automatically deleted if a <span style="FONT-STYLE: italic">student is deleted unless this option is selected.

Normally the outbound reference constraint should be enabled to enforce referential integerity. However, you are allowed to disable the contstraint. For example, if an Object Class are based on a read only RDBMS view, you do not want that the link between the view and the referenced Object Class prevents users to delete objects in the referenced Object Class.

**Data Binding**

The data binding defines the connection between the property and the RDBMS column. The data flow can go from the RDBMS column to the property, for example when data are changed by Live Update, and/or from the property to the RDBMS column, for example when the content of a property is changed by a user. Unbound properties are not connected to an RDBMS column, and data must flow from/to the property through other means, like data calculations, rules, tasks etc.

*   **Unbound**. There is no connection to an RDBMS column. Data is not retrieved or persisted directly, but the data flow must be defined specifically in each case.
*   **One-Way Bound**. Changes in the data only flows from the RDBMS column to the property. This type of binding is appropriate for data which are read-only.
*   **Two-Way Bound**. The data flows both ways. This type of binding is appropriate for fully interactive applications.

**** **

Read on Demand

Applies to properties with a binary data type and functions calculated using an RDBMS expression.

When reading object data from the database, the value for a property with this option selected, would not be read. For example, if the property represents a calculated measure which only is used for aggregation purposes, you should select this option.

For example, a <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">sales data object contains information about <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">quantity and <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">price. The <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">sales amount is calculated as <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">quantity * price using an [RDBMS expression](data-calculation.md). The <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">sales amount should not be read as part of the object data when accessing a single <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">sales data object. However, when aggregating data, the <span style="FONT-WEIGHT: normal; FONT-STYLE: italic">sales amount should be used to calculate an aggregated value.

Applies to properties with a binary data type and functions calculated using an RDBMS expression.

Description  
Documentation of the purpose and content of the property.

** 

See Also

*   [Mapping of Property Data Types and RDBMS Data Types](../mapping-of-property-data-types-and-rdbms-data-types.md)
*   [Simple Data Interpretations for a Property](../simple-data-interpretations-for-a-property.md)
*   [Complex Association Data Interpretation for a Property](../complex-association-data-interpretation-for-a-property.md)