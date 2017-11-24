# Write to log
Writes an entry at the end of the Genus Apps log. Entries can be logged at three levels:

Level | Description
--- | ---
Trace | Record information during execution. This information is typically used by developers for debugging purposes.
Warning | An event that is not necessarily significant, but may indicate a possible future problem.
Error | An event that indicates a significant problem.

Events of type *Warning* and *Error* are logged to the general Windows Server event log if the effect is executed on an application server. In addition, these events are logged in the execution history for the object containing the effect, such as a Task, Agent, Web Service, or Rest Service.

Traces are by default not logged in the execution history. To log traces, select the option **Save detailed execution trace in history** in the history setup for the object containing the effect.

Note! The Genus Apps log is primarily a trace log and not an event log. The following table lists some important distinctions between tracing and event logging:

Tracing | Event logging
--- | ---
Consumed primarily by developers | Consumed primarily by system administrators
Logs "low level" information (e.g. a thrown exception) | Logs "high level" information (e.g. failed installation of a program)
Can be noisy | Must not be too "noisy" (contain many duplicate events or information not helpful to its intended audience)
Few limitations on output format | A standards-based output format is often desirable, sometimes even required
Localization is rarely a concern | Messages are often localized
Addition of new tracing messages *must* be agile | Addition of new types of events, as well as new event messages, need not be agile

See also:
- [Configure logging on the application server](../../../../../installation-and-configuration/configure-and-maintain-genus-server/genus-server-configuration/options.md#log)
- In Genus Apps for Desktop, logging can be configured in the **Options** dialog
