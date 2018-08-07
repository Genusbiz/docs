---
title: Object classes in Genus
description: Brief definition of object classes and how they are categorized in Genus.
author: ablindblad
---

# Object class

Object classes express static descriptions of data and behavior through [properties](../object-class-property/index.md) and [rules](modify-an-object-or-identifier-domain/rules.md) containing knowledge on how to respond to different events, respectively. Object classes aim to represent something that exist in the real world, which is both conceptually comprehensible and stable over time.

Genus Apps allows you to define object compositions, which are object classes composed of other object classes. Object compositions makes it possible to combine simple objects into more complex ones. For instance, the objects _wheel_, _steering wheel_, _seat_, _gearbox_ and _engine_ may have no functionality by themselves, but if you compose them, they may form an _automobile_ object which has a higher function (or is greater) than the sum of its parts.

Object classes are categorized in three types of domains in Genus:

*   **Object domains**. Objects that abstract entities in the business that the model represents, e.g. _order_, _line item_ and _invoice_ objects in an order entry application.
*   **Code domains**. Objects that define a finite set of named code values used to classify domain objects, e.g. _gender (male, female)_ and _civil status (single, married, cohabitant)_ code domains for classifying a _person_.
*   **Identifier domains**. Objects that are used to assign a unique identifier to a domain object. There are two types of identifier domains: Sequential counter and pool. A sequential counter generates a unique numeric identifier which is incremented by one each time an identifier is assigned to a domain object. A pool contains a finite set of identifiers used for identifying a domain object, e.g. a set of employee numbers which are marked as taken and cannot be assigned to others if utilized.
