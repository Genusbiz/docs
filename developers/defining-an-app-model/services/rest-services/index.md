---
title: Consuming and exposing RESTful services using Genus Apps
description: How to consume and expose RESTful services in Genus Apps. Covers URI path segments and resource building in Genus Studio.
author: asbjorne
---

# REST services

_The contents is under constructions and is incomplete. We are sorry for the inconvenience._

Before consuming or exposing REST services using Genus Apps, we recommend reading _[A Guide to Designing and Building RESTful Web Services with WCF 3.5](https://msdn.microsoft.com/library/dd203052)_. In particular, we recommend paying attention to the principles the guide communicates, like the resource-oriented aspects of REST services and the emphasize on _nouns_ instead of _verbs_. This because using REST you rely on a standard set of verbs (GET, PUT, POST etc) to operate on the resources (nouns) within a service.

How to consume REST services external to your Genus solution (i.e. calling REST services from your Genus solution) is covered [here](../../logic/action-orchestration/actions/effects/consume-a-rest-service.md).

Exposing REST services from your Genus solution is fully supported, but not yet documented. This part of the documentation is under construction.

Guidelines for defining REST services i Genus Apps are covered [here](../../../guidelines-and-best-practices/rest-service-guidelines.md).
