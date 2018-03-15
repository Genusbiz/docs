# Terminology

Below you will find explanations of selected concepts important for the understanding of Genus Apps.

_Note: This article is referred to from Genus standard contract documents by its url. Any changes to the location of this article must be coordinated with VP Business Development. Normal guidelines apply to any changes to the contents of the article._

## Account session

Each time an account signs in, an entry is logged in the account session history. The log entry contains information such as sign in date, computer name, and IP-address.

## Advanced expressions

To be able to compute or calculate values, Genus Apps offers advanced expressions.

Advanced expressions consists of a set of words, i.e. a finite string of letters, symbols or tokens, and adhering to a formal grammar, i.e. a set of rules for combining the set of words.

Using advanced expressions, you may express formulas consisting of functions, references to other fields or group, static values (such as a number) and mathematical operators.

An advanced expression is declarative, meaning that the logic of the computation is expressed without describing its control flow. This is to minimize or eliminate side effects by describing what your computation should accomplish, rather than describing how to accomplish it.

The advanced expressions are strongly typed, specifying restrictions on how operations involving values of different data types may be intermixed.

For a complete description of the data types and members, see [here](developers/defining-an-app-model/common-concepts/advanced-expressions.md).

## App

An app is an abbreviated form of the word application. An app is a computer program designed to perform a set of functions to the benefit of users, either directly or indirectly. The abbreviated form "app" was previously used primarily about specialized computer programs downloaded on mobile devices, where as "application" was used about computer programs on desktop and server computers. However, with the advent of cross platform computer programs, the word app is generally preferred and considered the more modern term.

Apps installed on devices are usually named **Installed Apps** or **Mobile Apps**, as opposed to **Web Apps** or **Mobile Web**, which are apps simply opened within your web browser by clicking a web linke or specifying an url.

## App model

An app model is a formalized description of a software app's user interface, logic and data, expressed using Genus Apps.

The behavior and appearance of your Genus app is determined by the content of your app model, i.e. the model is the app. The app model is stored in a database and maintained using [Genus Studio](#genus-studio).

App model is short for application model, but the shorter term is generally preferred and considered the more modern term.

Note that our use of the term "model" does not imply that a model is some form of simplification. To us a model is distilled knowledge and a way of structuring a domain.

Prior to relase 2018.1, the terms [directory](#directory) and app model were used interchangeably in Genus Apps.

## Application

Same as [app](#app).

## App server

An app server (or application server) is a [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) or a [software container](https://en.wikipedia.org/wiki/Operating-system-level_virtualization) running a set of software services.

[Genus Server](#genus-server) is an example of one type of app server.

[Genus Services](#genus-services) are an example of a set of software services.

## Cardinality

The cardinality of a data source or a group specifies whether they can contain _one_ or _many_ objects. A data source with cardinality = _one_, can contain zero or one object, while a data source with cardinality = _many_, can contain zero, one, or many objects.

While this definition only contains two possible values for cardinality, the mathematical definition of cardinality is the number of elements in a set, thereby having infinite possible values.

## Code domain

Code domains describe a finite set of named code values used to classify domain objects. For example, a person can be classified by code domains such as gender (male, female), civil status (single, married, cohabitant) and nationality.

See [Create or modify a code domain](developers/defining-an-app-model/data/object-class/create-or-modify-a-code-domain.md) for more information.

## Customer app

A customer app is a computer program (software) based on Genus Apps. Customer apps are defined in an customer specific [app model](#app-model).

## Customer solution

Same as [customer app](#customer-app).

## Data provider

A data provider is a software component enabling access to data from a data source, typically a database.

## Directory

In general, a directory is a structured listing of information.

In Genus Apps, the directory is the structure of a Genus [app model](#app-model), as displayed in the left-side menu inside [Genus Studio](#genus-studio).

In contrast, an app model is data (about a model) stored in a database and accessible through this structure by using Genus Studio.

Note that prior to relase 2018.1, the terms directory and app model were used interchangeably in Genus Apps.

Our usage of the term directory is not to be confused with [Active Directory](https://en.wikipedia.org/wiki/Active_Directory) (or _AD_ for short), which is a service developed by Microsoft for a range of identity-related services. The term directory may also be used for [virtual directories](https://en.wikipedia.org/wiki/Virtual_directory) and file directories (folders). Our intended meaning should be clear from the context in which the term is used.

## Directory GUID

The directory [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) is the system generated identifier for your stored [app model](#app-model).

The directory GUID uniquely identifies one stored copy (or original) of your app model.

Note that the term has outlived is usage, since we from release 2018.1 distinguish between the terms [directory](#directory) and [app model](#app-model). The term will change name in a future release of Genus Apps.

## Event history

An event history is a chronological sequence of audit trails for objects, each of which contains evidence directly pertaining to and resulting from an event. The event history enables you to reconstruct and examine the sequence of events and/or changes in an event for an object.

See [here](users/navigate-view-modify-and-control/working-in-tables/advanced/view-history.md) for more information on how to view the event history for an object.

See [here](developers/defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/events.md) for more information on how to active auditing for your object classes.

## Formula

Formulas are made up of functions, references to other fields or groups, static values (such as a number) and mathematical operators.

You can use formulas to calculate mathematical values, display dates and times, reference fields in data sources or perform string operations such as combining multiple values into one value.

For example, to define a formula which concatenates the first name and the surname for an employee you would write:  

```
employee.firstName + ", " + employee.surname
```

For more information see [Advanced expressions](developers/defining-an-app-model/common-concepts/advanced-expressions.md).

## Genus Apps

Genus Apps is a high-productivity or rapid application development tool, which can be used to create or change enterprise software applications. The tool targets medium to large size enterprises, and professional and semi-professional developers.

Genus Apps consists of all software and products provided by Genus, whether provided for installation physically at your device, at your company's location, through third party service providers or through a cloud infrastructure. This includes Genus Apps for web, Genus Apps for Desktop, Genus Services, Genus Studio, documentation, a support portal, and more.

## Genus Apps for desktop

Genus Apps' client (runtime/executable) for desktop devices, like Windows 10 on laptops or personal computers (PCs). Genus Apps for desktop is also called Genus Desktop.

## Genus Apps for web

Genus Apps' client (runtime/executable) for web browsers. Genus Apps for web is also called Genus Web.

## Genus Desktop

Genus Desktop is short for [Genus Apps for desktop](#genus-apps-for-desktop).

## Genus Services

Genus Apps' set of software components offering software services to Genus Web, Genus Desktop, other Genus Services, or third party service consumers.

Genus Services run on one or more [Genus Servers](#genus-server).

## Genus Server

Genus Server is one [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) or one [software container](https://en.wikipedia.org/wiki/Operating-system-level_virtualization) running a set of [Genus Services](#genus-services).

A Genus Server may run one or more of the specific software services which Genus Services consist of.

## Genus Studio

Genus Apps' client for defining and maintaining an [app model](#app-model). Genus Studio is included in a Genus Desktop installation, but only available to you if you are granted [trusted user](developers/installation-and-configuration/configure-and-maintain-genus-server/genus-server-configuration/directory-properties.md#trusted-users) or [app model admin](developers/defining-an-app-model/security/app-model-administrators.md) rights.

## Genus Web

Genus Web is short for [Genus Apps for web](#genus-apps-for-web).

## Metadata

Any item of data is a description of something. Metadata is a type of data where the _something_ being described is data. Or, as it is often put, metadata is data about data. Metadata is used to facilitate the understanding, use and management of data. For example, _"004767832000"_ is data. With no additional context, it is meaningless. When _"004767832000"_ is given a meaningful name (metadata) of _"Phone Number"_, one can understand that _"004767832000"_ refers to the phone number to a company or a person located in Norway (based on the two-digit country code 47).

There are hierarchies or levels of data and metadata. However, any particular item of data may be on different levels of a hierarchy depending on the context. Considering the phone number to Genus AS, _"004767832000"_ would be data and _"Phone Number"_ would be metadata. But, when considering a computer system that manages phone data, _"Phone Number"_ might be data, and then _"data item name"_ and _"12 numbers, starting with 00 followed by a two-digit country code"_ would be metadata.

## Release and release stages

A distribution of an upgraded version of Genus Apps is called a release, and comes in basically two flavours:

* A **Major Release** is an upgraded version with changes in either of the major or minor parts of the version number.

* A **Minor Release** is an upgraded version with no change in either major or minor parts of the version number (but with a change in the revision or build parts). A minor release may  also be called a **Release Update** or **Release Patch** or simply a **Patch**.

Genus Apps goes through different stages that describe the stability of the software and the amount of development or testing it requires before the final release of the upgrade. These stages are called **Release Stages**.

See [here](developers/release-notes/release-stages.md) for more information.
