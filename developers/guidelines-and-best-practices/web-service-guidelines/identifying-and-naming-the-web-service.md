# Identifying and Naming the Web Service

Setting up a Web Service in Genus is both quick and easy. This is a great strength but also a pitfall if new Web Services are created as you go along. Without thinking the broader picture, the application model will soon end up with an unmanageable set of Web Services containing just a few operations each, and a large dictionary of ambiguous service names.

However small the problem seems, one should always set aside time to analyze and design the Web Service before establishing the service name.

In the field of service-oriented architecture (SOA) tree types of web services are often recognized.

The **utility-centric** context is found in application services involving operations that encapsulate cross-cutting functions, such as event logging, exception handling, or notification. These reusable services need to be labeled according to a specific processing context, agnostic in terms of any particular solution environment. For example, a utility service might be named Notify.  

An **entity-centric** context is established in a business service that represents a specific business entity, such as an invoice or a purchase order. The labeling of entity-centric business services is often predetermined by the entity name. For example, a service may simply be named Invoice or Customer.  

**Task-centric** contexts are required for services modeled to encapsulate process logic. In this case, the thread that ties together the grouped operations is a specific activity being automated by the service logic. Therefore, the use of verbs in service names is common. For example, a task-centric service may be called GetProfile or ProfileRetrieval, if that accurately represents the task's scope.  

In the process of establishing an appropriate name, you should always take into consideration any future extensions of the Web Service. Furthermore the name of the Web Service must be unique and can only contain letters and numbers. The first character in the name must be a letter.