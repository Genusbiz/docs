## Object Class

Object Classes express static descriptions of data and behaviour. Data for an Object Class is defined by adding [properties](object-class-property.md). Behaviour is defined by adding [rules](object-class/modify-an-object--or-identifier-domain/rules.md) that contains the knowledge on how to respond to different events. The primary motiviation for identifying an Object Class, is to match the technical representation of an application more closely to the conceptual view of the world. Another motiviation is the desire to create a framework that is likely to be stable over time. The functionality provided by an application may change radically over time, while the structure of an application is relative stable over time.

Genus App Platform also allows you to define an Object Class composed of other Object Classes to form a composition. Object composition is a way and practice to combine simple objects into more complex ones. For example, the objects _wheel, steering wheel, seat, gearbox_ and _engine_ may have no functionality by themselves. But if you compose them, they may form an _automobile_ object. That is, an object which has a higher function (or greater than the sum of its parts).

Object Classes are categorized in three types of domains:

*   **Object Domain**s. A description of objects that abstract entities in the business that the model is written to represent. For example, an order entry program needs to work with objects such as orders, line items, invoices and so on.
*   **Code Domains**. Describes a finite set of named code values used to classify domain objects. For example, a _person_ can be classified by code domains such as _gender (male, female)_, _civil status (single, married, cohabitant)_ and _nationality_.
*   **Identifier Domains**. Used to assign a unique identifier to a domain object. There are two types of identifier domains: **Sequential Counter** and **Pool**. A Sequential Counter generates a unique numeric identifier which is incremented by one each time an identifier is assigned to a domain object. A Pool contains a finite set of identifiers used for identifying a domain object. For example a set of employee numbers. When a number is assigned to an employee, the number is marked as taken and can not be assigned to another employee.

**Topics in "Object Class"**
* [Create or Modify a Code Domain](object-class/create-or-modify-a-code-domain.md)
* [Create a New Identifier Domain](object-class/create-a-new-identifier-domain.md)
* [Create a New Object Domain](object-class/create-a-new-object-domain.md)
* [Modify an Object- or Identifier Domain](object-class/modify-an-object-or-identifier-domain.md)