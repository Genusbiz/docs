## Microservice helm values
<a name="microservice-helm-values" ></a>
All microservices can be configured with the following common helm values.

| Parameter                                                        | Description | Default | 
|--                                                                |--|--|
| <microservice>.enabled                                           |  | true |
| <microservice>.sentryDSN                                         | Link to Sentry DSN endpoint. | *Unique DSN for every microservice* |
| <microservice>.replicaCount                                      |  | 1 |
| <microservice>.resources.requests.cpu                            |  | *See [values.yaml](../default-helm-values/genus-10.10.md)* |
| <microservice>.resources.requests.memory                         |  | *See [values.yaml](../default-helm-values/genus-10.10.md)* |
| <microservice>.resources.limits.cpu                              |  | *See [values.yaml](../default-helm-values/genus-10.10.md)* |
| <microservice>.resources.limits.memory                           |  | *See [values.yaml](../default-helm-values/genus-10.10.md)* |
| <microservice>.affinityScheduling.enabled                        |  | *See [values.yaml](../default-helm-values/genus-10.10.md)* |
| <microservice>.affinityScheduling.namespaceListForPodAntiAffinity|  | *See [values.yaml](../default-helm-values/genus-10.10.md)* |
| <microservice>.serviceMonitor.scrapeInterval                     | Interval of Prometheus scraping the metrics endpoint | "30s"

## Release values
| Parameter                                                        | Description | Default | 
|--                                                                |--|--|
| genus-message-queue-service                                      | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-database-dictionary-service                                | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-object-storage-service                                     | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-file-utility-service                                       | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-wopi-service                                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
| redis 
| redis.replica.replicaCount                                       | Number of slaves. The value should never be 2. Always 1 or >= 3  | 1 (No replication) | 
| genus-common-config                                              |  |  | 
| genus-help-docs-service                                          | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-web-frontend                                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-web-frontend.serviceWorker.enabled                         | Wether or not to enable the service worker. It is highly recommended to keep this ``true`` for performance reasons | true | 
| genus-authorization-service                                      | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-authentication-service                                     | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-gateway-service                                            | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-gateway-service.sessionDurationMinutes                     | Maximum number of minutes for which a session may last, less than or equal to 0 means that the cookie doesn't expire | "10080" | 
| genus-gateway-service.sessionInactivityMaxDurationMinutes        | Maximum number of minutes for which a session inactivity may last, renews duration if activity is in second half of period | "60" | 
| genus-trace-input-service                                        | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-message-subscription-service                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-tracelog-subscription-service                              | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-internationalization-service                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-webcal-service                                             | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-carddav-service                                            | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-live-update-input-service                                  | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-core-services                                              | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-core-services.activeConnectionString                       |  | "" | 
| genus-core-services.databaseActiveDb                             |  | "" | 
| genus-core-services.databaseActiveSchema                         |  | "" | 
| genus-core-services.descriptiveConnectionString                  |  | "" | 
| genus-core-services.databaseDescriptiveDb                        |  | "" | 
| genus-core-services.databaseDescriptiveSchema                    |  | "" | 
| genus-core-services.databaseVendorVersion                        |  | "" | 
| genus-core-services.databaseIsCaseInsensitive                    |  | "" | 
| genus-core-services.dataMartQueryService                         | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-core-services.dataMartQueryService.coreMaxThreadCount      |  | "4" | 
| genus-core-services.megaService                                  | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-core-services.megaService.coreMaxThreadCount               |  | "4" | 
| genus-core-services.desktopFrontend                              | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-core-services.responseCompression                          |  | "false" | 
| genus-core-services.requestCompression                           |  | "false" | 
| genus-core-services.defaultCryptoProviderDecryptionKey           |  | "" | 
| genus-core-services.defaultCryptoProviderValidationKey           |  | "" | 
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
| global.reportSensitiveBreadcrumbsToSentry                        | Set this value to true to include sensitive information in Sentry reports. Should be "true" in development environments | "false" | 

