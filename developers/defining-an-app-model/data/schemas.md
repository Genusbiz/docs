# Schemas

XML Schemas provides functionality for defining the structure, content and semantics of XML documents. XML (Extensible Markup Language) is a simple and flexible text format, and is playing an increasingly important role in the exchange of a wide variety of data.  

An XML Schema is a set of components such as type definitions and element declarations. In Genus Studio you define a Schema by building a structure using declarative components such as **elements** and **attributes** which can be translated to XML. Sometimes the XML Schema is also referred to as a XSD (XML Schema Definition).

In Genus Apps the XML Schema is mainly used within Action Orchestration and Web Services.

*   Within Action Orchestration you may define a [data source](../logic/action-orchestration/data-sources.md) containing an XML document. The structure of the data source is established from a XML Schema defined within your application model. Any data [exported or imported](../../how-to/exchange-data-with-other-applications/export-and-import-data.md) using this data source should comply with the defined schema.
*   The [Merge Data to a Document](../../how-to/merge-data-to-a-document/index.md) effect uses a XML document as input. The structure of the input document is defined by a XML Schema.
*   When copying data between two Genus applications, an XML Schema is used to exchange data between the applications. For more information on how to copy and paste between two Genus applications, see [Copy and Paste Data Between Two Genus Applications](../../how-to/exchange-data-with-other-applications/copy-and-paste-data.md).
*   In Web Services, XML- messages are passed between the service endpoint and the consumer endpoint. The formats of these messages are defined by a XML Schema stored within your application model. For more information on how to setup a Web Service in Genus Studio, see [Create a Web Service](../services/web-services/create-a-web-service.md).


## Create a Schema

1.  [Open Genus Studio](../getting-started/how-to-open-genus-studio.md).
2.  In the **Directory** tree, click the **Schemas** folder, and then on the toolbar, click **New**.
3.  To create a new blank schema, select **New Blank Schema** and specify a **Namespace** for the Schema. For guidelines and best practices on creating a namespace, see [Web Service and XML and Web Service Namespaces](../../guidelines-and-best-practices/web-service-guidelines/xml-and-web-service-namespaces.md).
4.  To import the XML schema from file, select **Import XML Schema From File**, and then click [...] to select an existing XSD file.
5.  Click **OK** to open the Schema Editor.
6.  The structure of the Schema is displayed in a tree structure. If you started with a new blank Schema, the structure only contains the schema root element.
7.  Create and refine the structure of the schema as described in [Working with Schemas](schemas.md).



## Working with Schemas

The Schema workface screen is divided into the following 3 areas. The main area, where the schema elements are organized as nodes in a tree structure. The properties pane to the right, showing the attributes of the selected schema element. And the Log pane at the bottom, showing warnings and errors when the defined schema is in an invalid state.

You may preview the XML Schema at any time. To show the textual representation of your XML Schema, which is an XSD, on the **Data** menu, click **Preview XML Schema**. To export the schema as an .xsd file, on the **File** menu, click **Save to File**.

**Elements**

In the main area you can modify the schema by adding and removing elements. Select and right-click an element node, and then in the shortcut menu, click Add, Delete or Copy.

The order of the nodes is essential for certain element types, for example the element type sequence. You may change the order of nodes within the structure by moving a node up or down. Select and right-click an element node, and then in the shortcut menu, click **Move Up** or **Move Down**. You may also move a selected node by using the keyboard shortcut SHIFT+ALT+UP ARROW or SHIFT+ALT+DOWN ARROW. Changing the order of nodes in the schema can also be useful for improving readability.

**Attributes**

Each element type has one or more attributes. When you select an element node, the available attributes are shown in the properties pane. To set an attribute value, you should either select or type in the value.

**Types**

The **type** attribute available for **element** and **attribute** elements provides all built-in (primitive and derived) data types defined for the XML Schema language by W3C. You may also select a complex type defined within your schema as a type for the element. To extend your schema with types from other schemas defined within your application model, use the import element. In the namespace attribute of the import element, specify the namespace of the schema containing the types to import.

**Structure**

The basic structure of an XML Schema usually includes a Complex type, and an element using this Complex type.

1.  To add a Complex type, right-click the **schema** node, and then on the shortcut menu, click **Add** and select **complex Type**.
2.  In the **name** box on the properties panel, type a name for the new complex type.
3.  If the child elements of the complex type should appear in a certain strict order, you should add a **Sequence** element to the complex type. Optional add a **Choice** or **All** element. For more information on the valid element types, see Schema Element Types.
4.  To add a child element, right-click the **Sequence**, and then on the shortcut menu, click **Add** and select **element**.
5.  In the **name** box on the properties panel, type a name for the new element.
6.  In the **type** box, choose a data type for the element.
7.  Specify **minOccurs**=0 and **nillable**=false if the element should be omitted from the XML instance when the element contains no value. (Specifying nillable=false is excessive, as this is the default interpretation).
8.  To create an XML instance containing explicit nil information for the element, you should specify **minOccurs**=1 and **nillable**=true. (Specifying the minOccurs=1 is excessive, as this is the default interpretation).
9.  If the element is of a complex type that can appear more than once, you should set the **maxOccurs** to unbounded.
10.  Repeat steps 4-10 for each element you want to add to the complex type.
11.  To access the newly created complex type, add an element with this data type at the root level of the XML Schema.  



## Schema Elements and Attributes

The following tables shows a brief description of the Element Types and Element Attributes currently supported by Genus Apps.

Element Type       | Description                                                |
-------------------|------------------------------------------------------------|
schema             | The schema element defines the root element of a schema. |
import             | The import element is used to add multiple schemas with different target namespace to a document. |
simpleType         | The simpleType element defines a simple type and specifies the constraints and information about the values of attributes or text-only elements. |
complexType        | The complexType element defines a complex type. A complex type element is an XML element that contains other elements and/or attributes. |
element            | The element element defines an element. |
attribute          | The attribute element defines an attribute for an element. |
attributeGroup     | The attributeGroup element is used to group a set of attribute declarations so that they can be incorporated as a group into complex type definitions. |
group              | The group element is used to define a group of elements to be used in complex type definitions |
sequence           | The sequence element specifies that the child elements must appear in a sequence. Each child element can occur from 0 to any number of times. |
all                | The all element specifies that the child elements can appear in any order and that each child element can occur zero or one time. |
choice             | The choice element allows only one of the elements contained in the `<choice>` declaration to be present within the containing element. |
anyAttribute       | The anyAttribute element enables the author to extend the XML document with attributes not specified by the schema. |
simpleContent      | The simpleContent element contains extensions or restrictions on a text-only complex type or on a simple type as content and contains no elements |
complexContent     | The complexContent element defines extensions or restrictions on a complex type that contains mixed content or elements only. |


Element Attribute  | Description                                                |
-------------------|------------------------------------------------------------|
name               | Specifies a name for the element. |
ref                | Refers to the name of another element. The ref attribute can include a namespace prefix. This attribute cannot be used if the parent element is the schema element. |
type               | Specifies either the name of a built-in data type, or the name of a simpleType or complexType element. |
id                 | Specifies a unique ID for the element. |
minOccurs          | Specifies the minimum number of times this element can occur in the parent element. The value can be any number >= 0\. Default value is 1\. This attribute cannot be used if the parent element is the schema element. |
maxOccurs          | Specifies the maximum number of times this element can occur in the parent element. The value can be any number >= 0, or if you want to set no limit on the maximum number, use the value "unbounded". Default value is 1. This attribute cannot be used if the parent element is the schema element. |
default            | Specifies a default value for the element (can only be used if the element's content is a simple type or text only). |
nillable           | Specifies whether an explicit null value can be assigned to the element. True enables an instance of the element to have the null attribute set to true. The null attribute is defined as part of the XML Schema namespace for instances. Default is false. |
form               | Specifies the form for the element. "unqualified" indicates that this attribute is not required to be qualified with the namespace prefix. "qualified" indicates that this attribute must be qualified with the namespace prefix. The default value is the value of the elementFormDefault attribute of the schema element. This attribute cannot be used if the parent element is the schema element. |
elementFormDefault | The form for elements declared in the target namespace of this schema. The value must be "qualified" or "unqualified". Default is "unqualified". "unqualified" indicates that elements from the target namespace are not required to be qualified with the namespace prefix. "qualified" indicates that elements from the target namespace must be qualified with the namespace prefix. |
attributeFormDefault | The form for attributes declared in the target namespace of this schema. The value must be "qualified" or "unqualified". Default is "unqualified". "unqualified" indicates that attributes from the target namespace are not required to be qualified with the namespace prefix. "qualified" indicates that attributes from the target namespace must be qualified with the namespace prefix. |
targetNameSpace    | A URI reference of the namespace of this schema. |
version            | Specifies the version of the schema. |
namespace          | _For the Import element_: Specifies the URI of the namespace to import.<br><br>_For the anyAttribute element_: Specifies the namespaces containing the attributes that can be used. Can be set to one of the following:<br>**##any** - attributes from any namespace is allowed (this is default)<br>**##other** - attributes from any namespace that is not the namespace of the parent element can be present<br>**##local** - attributes must come from no namespace<br>**##targetNamespace** - attributes from the namespace of the parent element can be present<br>**List of {URI references of namespaces, ##targetNamespace, ##local}** - attributes from a space-delimited list of the namespaces can be present |
schemaLocation     | Specifies the URI to the schema for the imported namespace. |
processContents    | Specifies how the XML processor should handle validation against the elements specified by this any element. Can be set to one of the following:<br>**strict** - the XML processor must obtain the schema for the required namespaces and validate the elements (this is default)<br>**lax** - same as strict but; if the schema cannot be obtained, no errors will occur<br>**skip** - The XML processor does not attempt to validate any elements from the specified namespaces |



The different elements support different attributes. See the table below for details on the supported attributes for each element type:

![schema_attributes.png](media/schema_attributes.png "Schema attributes")

