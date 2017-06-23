# Host Name Usage Exceptions

There are some exceptions from the general rules on how host names are used as described in Directory Properties and Directory Options.

**Starting Genus Desktop on the application server**  

When Genus Desktop is started on the same application server that is hosting the solution being accessed, the host name will always be overridden to the local hostname (NetBIOS name) regardless of the value specified as Internet Host Name or Redirect Internet Host Name. The rationale behind this is that the local host name will always work, whereas in a few cases a fully qualified internet host name may only work from external clients.

**Calling services from application server**

When a task (in an agent, web service, etc.) executed on the application server calls a web service over HTTP (SOAP or REST) within the same application model it will also use the local host name (NetBIOS name) regardless of the value specified as Internet Host Name or Redirect Internet Host Name. The rationale behind this is that the local host name will always work, whereas in a few cases a fully qualified internet host name may only work from external clients.    

**Shortcuts**  

When a shortcut to an object is sent from Genus by mail the official host name, the Internet Host Name in directory properties, is always used as host in the URLs.