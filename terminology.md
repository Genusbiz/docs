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

## App or Application

An app is an abbreviated form of the word application. An app or application is a computer program designed to perform a set of functions to the benefit of users, either directly or indirectly. The abbreviated form "app" was previously used primarily about specialized computer programs downloaded on mobile devices, where as "application" was used about computer programs on desktop and server computers. However, with the advent of cross platform computer programs, the word app is generally preferred and considered the more modern term.

Apps installed on devices are usually named **Installed Apps** or **Mobile Apps**, as opposed to **Web Apps** or **Mobile Web**, which are apps simply opened within your web browser by clicking a web linke or specifying an url.

## App model

An app model is a formalized description of a software app's user interface, logic and data, expressed using Genus Apps. App model is short for application model, but the shorter term is generally preferred and considered the more modern term. The behavior and appearance of your Genus app is determined by the content of your app model, i.e. the model is the app. The app model is stored in the [Directory](#directory) and maintained by using [Genus Studio](#genus-studio). The terms [directory](#directory) and [app model](#app-model) are often used interchangeably.

Note that our use of the term "model" does not imply that a model is some form of simplification. To us a model is distilled knowledge and a way of structuring a domain.

## Cardinality

The cardinality of a data source or a group specifies whether they can contain **One** or **Many** objects. A data source with cardinality = one, can contain zero or one object, while a data source with cardinality = many, can contain zero, one, or many objects.

While this definition only contains two possible values for cardinality, the mathematical definition of cardinality is the number of elements in a set, thereby having infinite possible values.

## Code domain

Code domains describe a finite set of named code values used to classify domain objects. For example, a person can be classified by code domains such as gender (male, female), civil status (single, married, cohabitant) and nationality.

See [Create or modify a code domain](developers/defining-an-app-model/data/object-class/create-or-modify-a-code-domain.md) for more information.

## Customer app or customer solution

A customer app or customer solution is a computer program (software) based on Genus Apps. Customer apps are defined in an customer specific app model. The word "app" and "application" are used synonymously.

## Data provider

A data provider is a software component enabling access to data from a data source, typically a database.

## Directory

In general, a directory is a structured listing and storage of information.

In Genus Apps, the directory is the structured storage of a [Genus app model](#app-model). The directory is maintained using [Genus Studio](#genus-studio). The terms directory and [app model](#app-model) are often used interchangeably.

## Directory GUID

The directory [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) is the system generated identifier for your [directory](#directory) containing your [app model](#app-model), which uniquely identifies your directory and app model.

## Event history

An event history is a chronological sequence of audit trails for objects, each of which contains evidence directly pertaining to and resulting from an event. The event history enables you to reconstruct and examine the sequence of events and/or changes in an event for an object.

See [here](users/navigate-view-modify-and-control/working-in-tables/advanced/view-history.md) for more information on how to view the event history for an object.

See [here](developers/defining-an-app-model/data/object-class/modify-an-object-or-identifier-domain/events.md "Events") for more information on how to active auditing for your object classes.

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

Genus Apps' set of software components offering services to Genus Apps for Web, Genus Apps for Desktop, other Genus Services, or third party service consumers.

Genus Services run on a set of one or more Microsoft Windows Servers. See also [Genus Server](#genus-server).

## Genus Server

Genus Server is almost synonymous with [Genus Services](#genus-services).

Use Genus Server when you talk about Genus Services as a set of one or more services running inside a Microsoft Windows Server, simply because it is easier to talk about a _Genus Server_ than a _Genus Services Server_. This implies that you may use the term Genus Server for a server hosting only one service (like the _Genus Apps for Web_ service).

Use Genus Services when you talk about the services independently of one or more Microsoft Windows Servers.

## Genus Studio

Genus Apps' client for defining and maintaining an [app model](#app-model) or a [directory](#directory). Genus Studio is included in the Genus Desktop installation.

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
