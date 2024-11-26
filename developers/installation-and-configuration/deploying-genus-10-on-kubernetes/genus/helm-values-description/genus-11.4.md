# Microservice helm values

<a name="microservice-helm-values" ></a>
All microservices can be configured with the following common helm values.

| Parameter                                                         | Description                                          | Default                                  |
| ----------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| <microservice>.enabled                                            |                                                      | true                                     |
| <microservice>.sentryDSN                                          | Link to Sentry DSN endpoint.                         | _Unique DSN for every microservice_      |
| <microservice>.replicaCount                                       |                                                      | 1                                        |
| <microservice>.resources.requests.cpu                             |                                                      | _See [values.yaml](../default-helm-values/genus-11.4.md)_ |
| <microservice>.resources.requests.memory                          |                                                      | _See [values.yaml](../default-helm-values/genus-11.4.md)_ |
| <microservice>.resources.limits.cpu                               |                                                      | _See [values.yaml](../default-helm-values/genus-11.4.md)_ |
| <microservice>.resources.limits.memory                            |                                                      | _See [values.yaml](../default-helm-values/genus-11.4.md)_ |
| <microservice>.affinityScheduling.enabled                         |                                                      | _See [values.yaml](../default-helm-values/genus-11.4.md)_ |
| <microservice>.affinityScheduling.namespaceListForPodAntiAffinity |                                                      | _See [values.yaml](../default-helm-values/genus-11.4.md)_ |
| <microservice>.serviceMonitor.scrapeInterval                      | Interval of Prometheus scraping the metrics endpoint | "30s"                                    |

## Release values

| Parameter                         | Description                                                 | Default |
| --------------------------------- | ----------------------------------------------------------- | ------- |
| genus-redis-io-service            | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-database-dictionary-service | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-object-storage-service      | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-key-value-store-service     | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-file-utility-service        | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-wopi-service                | _See [Microservice helm values](#microservice-helm-values)_ |         |
| redis | | |
| redis.replica.replicaCount | Number of slaves. The value should never be 2. Always 1 or >= 3 | 1 (No replication) |
| genus-help-docs-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-web-frontend | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-web-frontend.serviceWorker.enabled | Wether or not to enable the service worker. It is highly recommended to keep this `true` for performance reasons | true |
| genus-authorization-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-authentication-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-gateway-service | _See [Microservice helm values](#microservice-helm-values)_ |  
| genus-gateway-service.sessionDurationMinutes | Maximum number of minutes for which a session may last, less than or equal to 0 means that the cookie doesn't expire | "10080" |
| genus-gateway-service.sessionInactivityMaxDurationMinutes | Maximum number of minutes for which a session inactivity may last, renews duration if activity is in second half of period | "60" |
| genus-trace-input-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-message-subscription-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-tracelog-subscription-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-internationalization-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-webcal-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-carddav-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-live-update-input-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-mail-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-mail-service.maxRequestSizeInMegaBytes | | "100" |
| genus-mail-service.databaseCommandTimeoutSeconds | The timeout in seconds for database commands. Should not be set to lower than the default. Can be increased when necessary. | "30" |
| genus-core-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-core-service.runOnWindows | Wether or not to run on a Windows node, using a Windows-version of the image | False |
| genus-core-service.modelInstanceRecycling | | |
| genus-core-service.modelInstanceRecycling.min | Minimum number of requests the model instance will handle before recycling | "" |
| genus-core-service.modelInstanceRecycling.max | Maximum number of requests the model instance will handle before recycling | "" |
| genus-core-service.tolerations | Overrides global.tolerations | {} |
| genus-core-service.volumeMounts | See https://kubernetes.io/docs/concepts/storage/volumes/#hostpath-configuration-example for example | {} |
| genus-mq-subscriber-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-mq-subscriber-service.runOnWindows | Wether or not to run on a Windows node, using a Windows-version of the image | False |
| genus-mq-subscriber-service.modelInstanceRecycling | | |
| genus-mq-subscriber-service.modelInstanceRecycling.min | Minimum number of requests the model instance will handle before recycling | "" |
| genus-mq-subscriber-service.modelInstanceRecycling.max | Maximum number of requests the model instance will handle before recycling | "" |
| genus-mq-subscriber-service.autoScaling | | |
| genus-mq-subscriber-service.autoScaling.enabled | Enable to use horizontal pod autoscaling. | false |
| genus-mq-subscriber-service.autoScaling.minReplicas | The minimum number of replicas to use when autoscaling | 1 |
| genus-mq-subscriber-service.autoScaling.maxReplicas | The maximum number of replicas to use when autoscaling | 2 |
| genus-mq-subscriber-service.autoScaling.targetCPUUtilizationPercentage | The target cpu utilization for each pod when autoscaling | 40 |
| genus-scheduled-action-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-scheduled-action-service.runOnWindows | Wether or not to run on a Windows node, using a Windows-version of the image | False |
| genus-scheduled-action-service.modelInstanceRecycling | | |
| genus-scheduled-action-service.modelInstanceRecycling.min | Minimum number of requests the model instance will handle before recycling | "" |
| genus-scheduled-action-service.modelInstanceRecycling.max | Maximum number of requests the model instance will handle before recycling | "" |
| genus-scheduled-action-service.autoScaling | | |
| genus-scheduled-action-service.autoScaling.enabled | Enable to use horizontal pod autoscaling. | false |
| genus-scheduled-action-service.autoScaling.minReplicas | The minimum number of replicas to use when autoscaling | 1 |
| genus-scheduled-action-service.autoScaling.maxReplicas | The maximum number of replicas to use when autoscaling | 2 |
| genus-scheduled-action-service.autoScaling.targetCPUUtilizationPercentage | The target cpu utilization for each pod when autoscaling | 40 |
| genus-rest-soap-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-rest-soap-service.runOnWindows | Wether or not to run on a Windows node, using a Windows-version of the image | False |
| genus-rest-soap-service.modelInstanceRecycling | | |
| genus-rest-soap-service.modelInstanceRecycling.min | Minimum number of requests the model instance will handle before recycling | "" |
| genus-rest-soap-service.modelInstanceRecycling.max | Maximum number of requests the model instance will handle before recycling | "" |
| genus-rest-soap-service.autoScaling | | |
| genus-rest-soap-service.autoScaling.enabled | Enable to use horizontal pod autoscaling. | false |
| genus-rest-soap-service.autoScaling.minReplicas | The minimum number of replicas to use when autoscaling | 1 |
| genus-rest-soap-service.autoScaling.maxReplicas | The maximum number of replicas to use when autoscaling | 2 |
| genus-rest-soap-service.autoScaling.targetCPUUtilizationPercentage | The target cpu utilization for each pod when autoscaling | 40 |
| genus-data-mart-query-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-data-mart-query-service.runOnWindows | Wether or not to run on a Windows node, using a Windows-version of the image | False |
| genus-data-mart-query-service.modelInstanceRecycling | | |
| genus-data-mart-query-service.modelInstanceRecycling.min | Minimum number of requests the model instance will handle before recycling | "" |
| genus-data-mart-query-service.modelInstanceRecycling.max | Maximum number of requests the model instance will handle before recycling | "" |
| genus-desktop-frontend | _See [Microservice helm values](#microservice-helm-values)_ | |
| global | | |
| global.database | | |
| global.database.appModelConnectionString | | "" |
| global.database.appModelDatabase | | "" |
| global.database.appModelSchema | | "" |
| global.database.vendorVersion | Can be any of:<br/> Microsoft SQL Server <br/> Microsoft SQL Server 2008 R2<br/> Microsoft SQL Server 2012<br/> Microsoft SQL Server 2014<br/> Microsoft SQL Server 2016<br/> Azure SQL<br/> Azure SQL V12<br/> ORACLE<br/> ORACLE 10.0g<br/> ORACLE 11g<br/> ORACLE 11g R2<br/> ORACLE 12.1c<br/> MYSQL<br/> MYSQL 5.7<br/> PostgreSQL<br/> PostgreSQL 9.2<br/> DB2<br/> DB2 10.1<br/> TIBCO TDV<br/> TIBCO TDV 8.2.0 | "" |
| global.database.caseInsensitiveSearch | | "" |
| global.jobs | | |
| global.jobs.verifyModel | | |
| global.jobs.verifyModel.enabled | Wether or not to run the verifyModel job after deploying Genus | false |
| global.customer | The name of the customer who owns the environment | "" |
| global.modelIdentifier | The identifing name of the model. The name shared by all namespaces working together | "" |
| global.k8sRuntime | The name provided when deploying the Genus chart. Used to group different instances of Genus running in the same namespace | "" |
| global.namespaceName | The name of the namespace where the chart is deployed to. Used for validation when deploying | "" |
| global.environmentType | Possible values are "origin", "green", "blue" or "operator" | "" |
| global.published | Wether or not the namespace is running in a deployed state. Possible values are true or false. |  |
| global.contact | Contact information (mail or phone number) for person to contact if we detect issues with the application | "" |
| global.sensitiveHttpHeaders | Semi colon-separated list of sensitive headers which will not be logged | "" |
| global.virtualDirectory | | "--" |
| global.dnsSuffix | The part of the URL that follows the host name. I.E: If the environment runs on app.example.com, dnsSuffix is "example.com" | "" |
| global.altDataSetURLs | | [] |
| global.timezone | Time zone specified for Linux containers | "Europe/Oslo" |
| global.windowsTimezone | Time zone specified for Windows containers. Used when `global.runOnWindows` is true For available time zone values use PowerShell command "Get-TimeZone -ListAvailable" | "W. Europe Standard Time" |
| global.enableSentry | Set this value to false to not send crash reports to Sentry | true |
| global.enableDebugInformation | Set this value to true to include debugging information that may contain security sensitive information. _Never_ set this to true in production environments! | false |
| global.reportSensitiveBreadcrumbsToSentry | Set this value to true to include sensitive information in Sentry reports. Should be true in development environments | false |
| global.noSearchEngineIndexing | Set to true to add the header "X-Robots-Tag: noindex, nofollow, nosnippet, noarchive" to avoid indexing by search enginges such as Google | false |
| global.ingress.ingressWildCardPathEnabled | Adds wildcard into all ingresses. This is used in ALB and AGIC. | false
| global.hostAliases | Add extra host entries to /etc/hosts. See https://kubernetes.io/docs/tasks/network/customize-hosts-file-for-pods/#adding-additional-entries-with-hostaliases for example | {} |
| global.tolerations | See https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#concepts for example | {} |
