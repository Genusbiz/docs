## Glossary

Below you will find explanations of selected concepts important for the understanding of Genus App Platform.

### Account Session

Each time an account signs in, an entry is logged in the Account Session History. The log entry contains information such as sign in date, computer name, and IP-address.

### Advanced Expressions

To be able to compute or calculate values, Genus App Platform offers Advanced Expressions.

Advanced Expressions consists of a set of words, i.e. a finite string of letters, symbols or tokens, and adhering to a formal grammar, i.e. a set of rules for combining the set of words.

Using advanced expressions, you may express formulas consisting of functions, references to other fields or group, static values (such as a number) and mathematical operators.

An advanced expression is declarative, meaning that the logic of the computation is expressed without describing its control flow. This is to minimize or eliminate side effects by describing what your computation should accomplish, rather than describing how to accomplish it.

The advanced expressions are strongly typed, specifying restrictions on how operations involving values of different data types may be intermixed.

For a complete description of the data types and members, see [here](common concepts/advanced expressions.md).

### Application Model (App Model)

An **Application Model** is a formalized description of a software application's user interface, logic and data, expressed using the Genus App Platform.

The behavior and appearance of your Genus application is determined by the content of your **Application Model**, i.e. the model is the application. The Application Model is stored in the [Directory](glossary.md) and maintained in [Genus Studio](glossary.md).

### Cardinality

The cardinality of a data source or a group specifies whether they can contain **One** or **Many** objects. A data source with cardinality = One, can contain zero or one object, while a data source with cardinality = Many, can contain zero, one, or many objects.

While this definition only contains two possible values for cardinality, the mathematical definition of cardinality is the number of elements in a set, thereby having infinite possible values.

### Code Domain

**Code Domains** describe a finite set of named code values used to classify domain objects. For example, a person can be classified by code domains such as gender (male, female), civil status (single, married, cohabitant) and nationality.

See [Create or Modify a Code Domain](object class/create or modify a code domain.md) for more information.

### Data Provider

A Data Provider is a software component enabling access to data from a data source, typically a database.

### Directory

In general, a directory is a structured listing and storage of information.

In Genus App Platform, the **Directory** is the structured storage of a [Genus Application Model](glossary.md). The Directory is maintained using [Genus Studio](glossary.md).

### Directory GUID

The Directory [GUID](glossary.md "Globally Unique Identifier (GUID)") is the system generated identifier for your [Directory](glossary.md) containing your [Application Model](glossary.md), which uniquely identifies your Directory and Application Model.

### Event History

An **Event History** is a chronological sequence of audit trails for objects, each of which contains evidence directly pertaining to and resulting from an event. The **Event History** enables you to reconstruct and examine the sequence of events and/or changes in an event for an object.

See [here](../../users/working in tables/advanced/view history.md) for more information on how to view the event history for an object.

See [here](object class/modify an object- or identifier domain/events.md "Events") for more information on how to active auditing for your object classes.

### Formula

Formulas are made up of functions, references to other fields or groups, static values (such as a number) and mathematical operators.

You can use formulas to calculate mathematical values, display dates and times, reference fields in data sources or perform string operations such as combining multiple values into one value.

For example, to define a formula which concatenates the first name and the surname for an employee you would write:  

```
employee.firstName + ", " + employee.surname
```

For more information see [Advanced Expressions](common concepts/advanced expressions.md).

### Genus Desktop

Genus App Platform's client (runtime/executable) for desktop devices, like Windows 8 or 10, laptops or PCs.

### Genus Apps

Genus App Platform's client (runtime/executable) for mobile devices, like iPhones, iPads and Android devices.

### Genus App Services

Genus App Platform's application server, offering services to Genus Desktop, Genus Apps or other Genus App Services, and more.

### Genus Studio

Genus App Platform's client for defining and maintaining [application models](glossary.md).

### Globally Unique Identifier (GUID)

A **Globally Unique Identifier** or **GUID** is a special type of identifier which is unique across all networked computers in the world. While each generated GUID is not guaranteed to be unique, the total number of unique keys (2<sup>122</sup>) is so large that the probability of the same number being generated twice is very small.

A GUID is frequently useful for identifying objects when similar data from multiple database systems must be merged. For example, in a customer billing system with data located in various company subsidiaries around the world. When the data are merged into the central site for consolidation and reporting, using GUIDs prevents customers in different countries from having the same billing number or customer ID.

An example of a GUID value is 826E89DC-BD93-4120-8198-0B6B2D459905 (written in text as a sequence of hexadecimal digits). Often braces are added to enclose the above format, as such: {826E89DC-BD93-4120-8198-0B6B2D459905}.

### JSON

JavaScript Object Notation (JSON) is a text-based open standard designed for human-readable data interchange. It is derived from the JavaScript scripting language for representing simple data structures and associative arrays, called objects. Despite its relationship to JavaScript, it is language-independent, with parsers available for many languages.  

The JSON format is often used for serializing and transmitting structured data over a network connection. It is used primarily to transmit data between a server and web application, serving as an alternative to XML.  

### Metadata

Any item of data is a description of something. Metadata is a type of data where the _something_ being described is data. Or, as it is often put, metadata is data about data. Metadata is used to facilitate the understanding, use and management of data. For example, _"004767832000"_ is data. With no additional context, it is meaningless. When _"004767832000"_ is given a meaningful name (metadata) of _"Phone Number"_, one can understand that _"004767832000"_ refers to the phone number to a company or a person located in Norway (based on the two-digit country code 47).

There are hierarchies or levels of data and metadata. However, any particular item of data may be on different levels of a hierarchy depending on the context. Considering the phone number to Genus AS, _"004767832000"_ would be data and _"Phone Number"_ would be metadata. But, when considering a computer system that manages phone data, _"Phone Number"_ might be data, and then _"data item name"_ and _"12 numbers, starting with 00 followed by a two-digit country code"_ would be metadata.

### POX

Plain Old XML (POX) is the basic XML, sometimes mixed in with other, blendable specifications like XML Namespaces, Dublin Core, XInclude and XLink. This contrasts with complicated, multilayered XML specifications like those for web services or RDF.  

POX is compatible with XML Schema, but is not required, and is often not used.  

POX is complementary to REST: REST refers to a communication pattern, while POX refers to an information format style.  

The primary competitors to POX are more strictly-defined XML-based information formats such as RDF and SOAP section 5 encoding, as well as general non-XML information formats such as JSON and CSV.  

### Recursion

See [Recursion](glossary.md).

### SOAP

SOAP, originally defined as Simple Object Access Protocol, is a protocol specification for exchanging structured information in the implementation of Web Services in computer networks. It relies on Extensible Markup Language (XML) for its message format, and usually relies on other Application Layer protocols, most notably Hypertext Transfer Protocol (HTTP) or Simple Mail Transfer Protocol (SMTP), for message negotiation and transmission.

SOAP can form the foundation layer of a web services protocol stack, providing a basic messaging framework upon which web services can be built. This XML based protocol consists of three parts: an envelope, which defines what is in the message and how to process it, a set of encoding rules for expressing instances of application-defined datatypes, and a convention for representing procedure calls and responses.

SOAP has three major characteristics:

*   Extensibility (security and WS-routing are among the extensions under development).
*   Neutrality (SOAP can be used over any transport protocol such as HTTP, SMTP, TCP, or JMS).
*   Independence (SOAP allows for any programming model).

As an example of how SOAP procedures can be used, a SOAP message could be sent to a web site that has web services enabled, such as a real-estate price database, with the parameters needed for a search. The site would then return an XML-formatted document with the resulting data, e.g., prices, location, features. With the data being returned in a standardized machine-parsable format, it can then be integrated directly into a third-party web site or application.

The SOAP architecture consists of several layers of specifications for: message format, Message Exchange Patterns (MEP), underlying transport protocol bindings, message processing models, and protocol extensibility. SOAP is the successor of XML-RPC, though it borrows its transport and interaction neutrality and the envelope/header/body from elsewhere (probably from WDDX).
