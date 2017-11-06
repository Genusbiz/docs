# Write to log
Writes an entry at the end of the Genus Apps log. Entries can be logged on three levels:

Level | Description
--- | ---
Trace | Record information during execution. This information is typically used by developers for debugging purposes.
Warning | An event that is not necessarily significant, but may indicate a possible future problem.
Error | An event that indicates a significant problem.

Events of type *Warning* and *Error* are logged to the general Windows Server event log if the effect is executed on an application server. In addition, these events are logged in the execution history for the object containing the effect, such as a Task, Agent, Web Service, or Rest Service.

Traces are by default not logged in the execution history. To log traces, select the option **Save detailed execution trace in history** in the history setup for the object containing the effect.



See also:
- [Configure logging on the application server](../../../../../installation-and-configuration/configure-and-maintain-genus-server/genus-server-configuration/options.html#log)
- In Genus Apps for Desktop, logging can be configured in the **Options** dialog