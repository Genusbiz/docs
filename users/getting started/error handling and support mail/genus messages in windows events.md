## Genus Messages in Windows Events

If an error occurs in the Genus desktop client, your user will be able to send an email with error logs to your predefined support email address. For how to set up Genus Error Reporting and a description of the logs, see [Genus Error Reporting](genus desktop client error reporting.md).

The error logs are a good starting point for tracking down your support or error incidents. However, you are also required to check the Windows Event log on the Genus application server to get the whole picture, since errors may originate from the server and not all message details may be transported to the client.

Upon receiving a support or error incident from your user, take note of the date and time of the incident, log into your application server and open Windows **Event Viewer** and search for errors or warnings at that date and time in the event logs **Genus App Services** and **Application**.

Some events may contain a lot of technical information. We recommend always reading the whole event description text in order to locate any readable clues to your problem at hand.

If warning or error message details still are incomplete, you may also want to approach the user, in order to obtain any Windows Event log information from the user's client (PC).

_Please note that any support or error incidents forwarded to Genus support may be rejected if the Genus application server Windows Event logs are not checked._