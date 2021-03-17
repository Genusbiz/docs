
## Microservice helm values
<a name="microservice-helm-values" ></a>
All microservices can be configured with the following common helm values.

| Parameter                                                        | Description | Default | 
|--                                                                |--|--|
| <microservice>.enabled                                           |  | true |
| <microservice>.replicaCount                                      |  | 1 |
| <microservice>.resources.requests.cpu                            |  | *See [values.yaml](./genus-values/genus-10.2.md)* |
| <microservice>.resources.requests.memory                         |  | *See [values.yaml](./genus-values/genus-10.2.md)* |
| <microservice>.resources.limits.cpu                              |  | *See [values.yaml](./genus-values/genus-10.2.md)* |
| <microservice>.resources.limits.memory                           |  | *See [values.yaml](./genus-values/genus-10.2.md)* |
| <microservice>.serviceMonitor.scrapeInterval                     | Interval of Prometheus scraping the metrics endpoint | "30s"

## Release values
| Parameter                                                        | Description | Default | 
|--                                                                |--|--|
| genus-database-dictionary-service                                | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-file-utility-service                                       | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-wopi-service                                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-redis                                                      |  |  | 
| genus-common-config                                              |  |  | 
| genus-help-docs-service                                          | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-web-frontend                                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-authorization-service                                      | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-authentication-service                                     | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-gateway-service                                            | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-gateway-service.sessionDurationMinutes                     | Maximum number of minutes for which a session may last, less than or equal to 0 means that the cookie doesn't expire | "10080" | 
| genus-gateway-service.sessionInactivityMaxDurationMinutes        | Maximum number of minutes for which a session inactivity may last, renews duration if activity is in second half of period | "60" | 
| genus-trace-input-service                                        | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-message-subscription-service                               | *See [Microservice helm values](#microservice-helm-values)* |  | 
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
| genus-core-services.dataMartQueryService.affinityScheduling.enabled                               |  | false | 
| genus-core-services.dataMartQueryService.affinityScheduling.namespaceListForPodAntiAffinity       |  | [] | 
| genus-core-services.megaService                                  | *See [Microservice helm values](#microservice-helm-values)* |  | 
| genus-core-services.megaService.coreMaxThreadCount               |  | "4" | 
| genus-core-services.megaService.affinityScheduling.enabled                               |  | false | 
| genus-core-services.megaService.affinityScheduling.namespaceListForPodAntiAffinity       |  | [] | 
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
| genus-core-services.elasticsearch.host                           | The host for the Elasticsearch endpoint | "" | 
| genus-core-services.elasticsearch.port                           | The port for the Elasticsearch endpoint| "" | 
| genus-core-services.elasticsearch.cloudId                        | Cloud ID if using elasticcloud | "" | 
| genus-core-services.elasticsearch.cloudAuth                      | Cloud auth if using elasticcloud | "" | 
| genus-core-services.elasticsearch.kibanaHost                     | The host for the Kibana endpoint | "" | 
| genus-core-services.elasticsearch.kibanaPort                     | The port for the Kibana endpoint | "" | 
| global                                                           |  |  |
| global.customer                                                  | The name of the customer who owns the environment | "" | 
| global.modelName                                                 | The model name | "" | 
| global.k8sNamespaceType                                          | Possible values are "origin", "green", "blue" or "operator" | "" | 
| global.deployed                                                  | Wether or not the namespace is running in a deployed state. Possible values are "true" or "false".  | "" | 
| global.virtualDirectory                                          |  | "--" | 
| global.dataSetURL                                                |  | "" | 
| global.altDataSetURLs                                            |  | [] | 
| global.timezone                                                  | Timezone | "/usr/share/zoneinfo/Europe/Oslo" | 
| global.enableTraceLog                                            | Set this value to "false" to disable the TraceLog | "true" | 
| global.traceLogLevel                                             | The log level for the TraceLog. Possible values are "error", "warning", "info" and "verbose" | "warning" | 
| global.enableSentry                                              | Set this value to "false" to not send crash reports to Sentry | "true" | 

