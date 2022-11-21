# Microservice helm values

<a name="microservice-helm-values" ></a>
All microservices can be configured with the following common helm values.

| Parameter                                                        | Description | Default | 
|--                                                                |--|--|
| <microservice>.enabled                                           |  | true |
| <microservice>.sentryDSN                                         | Link to Sentry DSN endpoint. | *Unique DSN for every microservice* |
| <microservice>.replicaCount                                      |  | 1 |
| <microservice>.resources.requests.cpu                            |  | *See [values.yaml](../default-helm-values/genus-10.20.md)* |
| <microservice>.resources.requests.memory                         |  | *See [values.yaml](../default-helm-values/genus-10.20.md)* |
| <microservice>.resources.limits.cpu                              |  | *See [values.yaml](../default-helm-values/genus-10.20.md)* |
| <microservice>.resources.limits.memory                           |  | *See [values.yaml](../default-helm-values/genus-10.20.md)* |
| <microservice>.affinityScheduling.enabled                        |  | *See [values.yaml](../default-helm-values/genus-10.20.md)* |
| <microservice>.affinityScheduling.namespaceListForPodAntiAffinity|  | *See [values.yaml](../default-helm-values/genus-10.20.md)* |
| <microservice>.serviceMonitor.scrapeInterval                     | Interval of Prometheus scraping the metrics endpoint | "30s"

## Release values

| Parameter                                                        | Description | Default | 
|--                                                                |--|--|
| genus-message-queue-service                                      | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-database-dictionary-service                                | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-object-storage-service                                     | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-key-value-store-service                                    | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-file-utility-service                                       | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-wopi-service                                               | *See [Microservice helm values](#microservice-helm-values)* |  |
| redis
| redis.replica.replicaCount                                       | Number of slaves. The value should never be 2. Always 1 or >= 3  | 1 (No replication) |
| genus-help-docs-service                                          | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-web-frontend                                               | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-web-frontend.serviceWorker.enabled                         | Wether or not to enable the service worker. It is highly recommended to keep this ``true`` for performance reasons | true |
| genus-authorization-service                                      | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-authentication-service                                     | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-gateway-service                                            | *See [Microservice helm values](#microservice-helm-values)* |  
| genus-gateway-service.sessionDurationMinutes                     | Maximum number of minutes for which a session may last, less than or equal to 0 means that the cookie doesn't expire | "10080" | 
| genus-gateway-service.sessionInactivityMaxDurationMinutes        | Maximum number of minutes for which a session inactivity may last, renews duration if activity is in second half of period | "60" |
| genus-trace-input-service                                        | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-message-subscription-service                               | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-tracelog-subscription-service                              | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-internationalization-service                               | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-webcal-service                                             | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-carddav-service                                            | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-live-update-input-service                                  | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-mail-service                                               | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-mail-service.maxRequestSizeInMegaBytes                     |  | "100" |
| genus-mail-service.databaseCommandTimeoutSeconds                 | The timeout in seconds for database commands. Should not be set to lower than the default. Can be increased when necessary. | "30" |
| genus-core-services                                              | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-core-services.dataMartQueryService                         | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-core-services.dataMartQueryService.coreMaxThreadCount      |  | "4" |
| genus-core-services.dataMartQueryService.livenessProbe.initialDelaySeconds |  | 5 |
| genus-core-services.dataMartQueryService.livenessProbe.periodSeconds       |  | 5 |
| genus-core-services.dataMartQueryService.livenessProbe.timeoutSeconds      |  | 10 |
| genus-core-services.dataMartQueryService.livenessProbe.successThreshold    |  | 1 |
| genus-core-services.dataMartQueryService.livenessProbe.failureThreshold    |  | 1 |
| genus-core-services.dataMartQueryService.readinessProbe.initialDelaySeconds |  | 20 |
| genus-core-services.dataMartQueryService.readinessProbe.periodSeconds       |  | 15 |
| genus-core-services.dataMartQueryService.readinessProbe.timeoutSeconds      |  | 5 |
| genus-core-services.dataMartQueryService.readinessProbe.successThreshold    |  | 1 |
| genus-core-services.dataMartQueryService.readinessProbe.failureThreshold    |  | 1 |
| genus-core-services.megaService                                  | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-core-services.megaService.coreMaxThreadCount               |  | "4" |
| genus-core-services.megaService.livenessProbe.initialDelaySeconds |  | 5 |
| genus-core-services.megaService.livenessProbe.periodSeconds       |  | 5 |
| genus-core-services.megaService.livenessProbe.timeoutSeconds      |  | 10 |
| genus-core-services.megaService.livenessProbe.successThreshold    |  | 1 |
| genus-core-services.megaService.livenessProbe.failureThreshold    |  | 1 |
| genus-core-services.megaService.readinessProbe.initialDelaySeconds |  | 20 |
| genus-core-services.megaService.readinessProbe.periodSeconds       |  | 15 |
| genus-core-services.megaService.readinessProbe.timeoutSeconds      |  | 5 |
| genus-core-services.megaService.readinessProbe.successThreshold    |  | 1 |
| genus-core-services.megaService.readinessProbe.failureThreshold    |  | 1 |
| genus-core-services.desktopFrontend                              | *See [Microservice helm values](#microservice-helm-values)* |  |
| genus-core-services.responseCompression                          |  | "false" |
| genus-core-services.requestCompression                           |  | "false" |
| genus-core-services.winlogbeat.enabled                           | Set to true to use winlogbeat to ship the windows event log | false |
| genus-core-services.filebeat.enabled                             | Set to true to use filebeat to ship the IIS access log | false |
| genus-core-services.fluentd.enabled                              | Set to true to use fluentd to ship the windows event log | false |
| genus-core-services.elasticsearch                                | These values are only used when either winlogbeat or filebeat is enabled | |
| genus-core-services.elasticsearch.username                       | The username for the Elasticsearch user | "" |
| genus-core-services.elasticsearch.password                       | The password for the Elasticsearch user | "" |
| genus-core-services.elasticsearch.hosts                          | The host(s) for the Elasticsearch endpoint(s). Example: ["https://elastic.example.com:9299"] | [] |
| genus-core-services.elasticsearch.cloudId                        | Cloud ID if using elasticcloud | "" |
| genus-core-services.elasticsearch.cloudAuth                      | Cloud auth if using elasticcloud | "" |
| genus-core-services.elasticsearch.kibanaHost                     | The host for the Kibana endpoint | "" |
| global                                                           |  |  |
| global.database                                                  |  |  |
| global.database.activeConnectionString                           |  | "" |
| global.database.activeDb                                         |  | "" |
| global.database.activeSchema                                     |  | "" |
| global.database.descriptiveConnectionString                      |  | "" | 
| global.database.descriptiveDb                                    |  | "" |
| global.database.descriptiveSchema                                |  | "" |
| global.database.vendorVersion                                    | Can be any of:<br/> Microsoft SQL Server <br/> Microsoft SQL Server 2008 R2<br/> Microsoft SQL Server 2012<br/> Microsoft SQL Server 2014<br/> Microsoft SQL Server 2016<br/> Azure SQL<br/> Azure SQL V12<br/> ORACLE<br/> ORACLE 10.0g<br/> ORACLE 11g<br/> ORACLE 11g R2<br/> ORACLE 12.1c<br/> MYSQL<br/> MYSQL 5.7<br/> PostgreSQL<br/> PostgreSQL 9.2<br/> DB2<br/> DB2 10.1<br/> TIBCO TDV<br/> TIBCO TDV 8.2.0 | "" |
| global.database.caseInsensitiveSearch                            |  | "" |
| global.jobs 													   |  |  |
| global.jobs.verifyModel										   |  |  |
| global.jobs.verifyModel.enabled								   | Wether or not to run the verifyModel job after deploying Genus | false |
| global.customer                                                  | The name of the customer who owns the environment | "" |
| global.modelIdentifier                                           | The identifing name of the model. The name shared by all namespaces working together | "" |
| global.namespaceName                                             | The name of the namespace where the chart is deployed to. Used for validation when deploying | "" |
| global.k8sNamespaceType                                          | Possible values are "origin", "green", "blue" or "operator" | "" |
| global.deployed                                                  | Wether or not the namespace is running in a deployed state. Possible values are "true" or "false".  | "" |
| global.virtualDirectory                                          |  | "--" |
| global.dnsSuffix                                                 | The part of the URL that follows the host name. I.E: If the environment runs on app.example.com, dnsSuffix is "example.com"  | "" |
| global.altDataSetURLs                                            |  | [] |
| global.timezone                                                  | Time zone specified for Linux containers   | "/usr/share/zoneinfo/Europe/Oslo" |
| global.windowsTimeZone                                           | Time zone specified for Windows containers. For available time zone values use PowerShell command "Get-TimeZone -ListAvailable" | "W. Europe Standard Time" |
| global.enableSentry                                              | Set this value to "false" to not send crash reports to Sentry | "true" |
| global.enableDebugInformation                                    | Set this value to "true" to include debugging information that may contain security sensitive information. *Never* set this to "true" in production environments! | "false" |
| global.reportSensitiveBreadcrumbsToSentry                        | Set this value to true to include sensitive information in Sentry reports. Should be "true" in development environments | "false" |
| global.ingress.ingressWildCardPathEnabled                        | Adds wildcard into all ingresses. This is used in ALB and AGIC.      | false
