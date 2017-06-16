# Terminology

Below you will find explanations of selected concepts important for the understanding of Genus App Platform.

## Account Session

Each time an account signs in, an entry is logged in the Account Session History. The log entry contains information such as sign in date, computer name, and IP-address.

## Advanced Expressions

To be able to compute or calculate values, Genus App Platform offers Advanced Expressions.

Advanced Expressions consists of a set of words, i.e. a finite string of letters, symbols or tokens, and adhering to a formal grammar, i.e. a set of rules for combining the set of words.

Using advanced expressions, you may express formulas consisting of functions, references to other fields or group, static values (such as a number) and mathematical operators.

An advanced expression is declarative, meaning that the logic of the computation is expressed without describing its control flow. This is to minimize or eliminate side effects by describing what your computation should accomplish, rather than describing how to accomplish it.

The advanced expressions are strongly typed, specifying restrictions on how operations involving values of different data types may be intermixed.

For a complete description of the data types and members, see [here](developers/defining-an-app-model/common-concepts/advanced-expressions.md).

## App Model

First, an app is an abbreviated form of the word application. An app or application is a computer program designed to perform a set of functions to the benefit of users, either directly or indirectly. The abbreviated form "app" was previously used primarily about specialized computer programs downloaded on mobile devices, where as "application" was used about computer programs on desktop and server computers. However, with the advent of cross platform applications, the word app is generally preferred and considered the more modern term.

Second, an App Model is a formalized description of a software app's user interface, logic and data, expressed using the Genus App Platform. App Model is short for Application Model, but the shorter term is generally preferred and considered the more modern term. The behavior and appearance of your Genus app is determined by the content of your App Model, i.e. the model is the app. The App Model is stored in the [Directory](#directory) and maintained by using [Genus Studio](#genus-studio).

## Cardinality

The cardinality of a data source or a group specifies whether they can contain One or Many objects. A data source with cardinality = One, can contain zero or one object, while a data source with cardinality = Many, can contain zero, one, or many objects.

While this definition only contains two possible values for cardinality, the mathematical definition of cardinality is the number of elements in a set, thereby having infinite possible values.

## Code Domain

Code Domains describe a finite set of named code values used to classify domain objects. For example, a person can be classified by code domains such as gender (male, female), civil status (single, married, cohabitant) and nationality.

See [Create or Modify a Code Domain](developers/defining-an-app-model/data/object-class/create-or-modify-a-code-domain.md) for more information.

## Data Provider

A Data Provider is a software component enabling access to data from a data source, typically a database.

## Directory

In general, a directory is a structured listing and storage of information.

In Genus App Platform, the Directory is the structured storage of a [Genus App Model](#app-model). The Directory is maintained using [Genus Studio](#genus-studio).

## Directory GUID

The Directory [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) is the system generated identifier for your [Directory](#directory) containing your [App Model](#app-model), which uniquely identifies your Directory and App Model.

## Event History

An Event History is a chronological sequence of audit trails for objects, each of which contains evidence directly pertaining to and resulting from an event. The Event History enables you to reconstruct and examine the sequence of events and/or changes in an event for an object.

See [here](users/navigate-view-modify-and-control/working-in-tables/advanced/view-history.md) for more information on how to view the event history for an object.

See [here](developers/defining-an-app-model/object-class/modify-an-object--or-identifier-domain/events.md "Events") for more information on how to active auditing for your object classes.

## Formula

Formulas are made up of functions, references to other fields or groups, static values (such as a number) and mathematical operators.

You can use formulas to calculate mathematical values, display dates and times, reference fields in data sources or perform string operations such as combining multiple values into one value.

For example, to define a formula which concatenates the first name and the surname for an employee you would write:  

```
employee.firstName + ", " + employee.surname
```

For more information see [Advanced Expressions](developers/defining-an-app-model/common-concepts/advanced-expressions.md).

## Genus Desktop

Genus App Platform's client (runtime/executable) for desktop devices, like Windows 10 on laptops or personal computers (PCs).

## Genus Apps

Genus App Platform's client (runtime/executable) for mobile devices, like iPhones, iPads and Android devices.

## Genus App Services

Genus App Platform's set of services offered to Genus Desktop, Genus Apps, other Genus App Services, or third party service consumers. Genus App Services run on a set of one or more Microsoft Windows Servers. Such servers are often called application servers.

Genus App Services were previously called Genus Server, but to better differentiate between _services_ and _servers_, the name was changed.

## Genus Studio

Genus App Platform's client for defining and maintaining [app models](#app-model).

## Metadata

Any item of data is a description of something. Metadata is a type of data where the _something_ being described is data. Or, as it is often put, metadata is data about data. Metadata is used to facilitate the understanding, use and management of data. For example, _"004767832000"_ is data. With no additional context, it is meaningless. When _"004767832000"_ is given a meaningful name (metadata) of _"Phone Number"_, one can understand that _"004767832000"_ refers to the phone number to a company or a person located in Norway (based on the two-digit country code 47).

There are hierarchies or levels of data and metadata. However, any particular item of data may be on different levels of a hierarchy depending on the context. Considering the phone number to Genus AS, _"004767832000"_ would be data and _"Phone Number"_ would be metadata. But, when considering a computer system that manages phone data, _"Phone Number"_ might be data, and then _"data item name"_ and _"12 numbers, starting with 00 followed by a two-digit country code"_ would be metadata.
