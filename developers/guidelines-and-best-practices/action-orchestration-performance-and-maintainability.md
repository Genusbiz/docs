# Action orchestration performance and maintainability

When orchestrating actions, there are many possible ways to achieve the same functionality. These various approaches will have different characteristics with regards to performance and maintainability. Before implementing critical functionality it is important to determine which approach is the best for the specific scenario. Here are some hints and tips:

## Iterations

By defining data sources as containing many objects to be handled repeatedly, actions can be performed in iterations. This is a powerful mechanism, but is usually also more time consuming than handling all objects in a single pass. If it is possible to define the action without iterations, this is usually recommended. Typically this can be done by, for example using more conditional formulas in the individual effects.

If the orchestration is using iterations, there may be some of the actions that could be moved outside the iteration to save time. An example here is to use a read object effect that retrieves information from the database that is the same for every iteration. A read object effect that retrieves specific information for each iteration can be changed from reading from the database to reading from another data source already cached in memory. The data source in memory can then be read from the database outside the iterations. These scenarios are usually found when calling iterating tasks from other orchestrations.

## Modularizing and re-using tasks

Tasks can be called from other action orchestrations (rules, agents, web services, and other tasks). This is useful to break down complexity and re-use common functionality, which increases maintainability. However, extensive use of calling other tasks may impair performance, and consideration must be used to achieve a balance between maintainability and performance.

In tasks that are called from other action orchestrations, the data sources can be assigned data from outside the task itself. Data sources that are not supposed to be assigned values from outside the task should always be defined as Private.

The most time consuming part of calling a task is the transfer and filtering of data, and optimization of this element is therefore effective and important. The fastest way to transfer data is by using Bind, and this method should be used if there is not an explicit reason not to do so. One example here could be that changes to the objects in the called task should not be transferred back to the calling orchestration. If binding cannot be used, Equal is the second best option, before turning to regular data filtering options.

## Log analysis

The Genus desktop client continuously writes a log of all operations including SQL and action orchestration. By analysing the log after running an action orchestration, it is possible to identify any performance problem areas. Understanding and using the information in the log requires some experience, but there may be relatively small changes required to drastically improve performance. The log for agents and web services must be viewed on the application server.
