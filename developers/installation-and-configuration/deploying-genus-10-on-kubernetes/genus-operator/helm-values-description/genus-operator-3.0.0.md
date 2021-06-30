## Microservice helm values

<a name="microservice-helm-values" ></a>
All microservices can be configured with the following common helm values.

| Parameter                                                         | Description                                          | Default                                                             |
| ----------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| <microservice>.enabled                                            |                                                      | true                                                                |
| <microservice>.sentryDSN                                          | Link to Sentry DSN endpoint.                         | _Unique DSN for every microservice_                                 |
| <microservice>.replicaCount                                       |                                                      | 1                                                                   |
| <microservice>.resources.requests.cpu                             |                                                      | _See [values.yaml](../default-helm-values/genus-operator-3.0.0.md)_ |
| <microservice>.resources.requests.memory                          |                                                      | _See [values.yaml](../default-helm-values/genus-operator-3.0.0.md)_ |
| <microservice>.resources.limits.cpu                               |                                                      | _See [values.yaml](../default-helm-values/genus-operator-3.0.0.md)_ |
| <microservice>.resources.limits.memory                            |                                                      | _See [values.yaml](../default-helm-values/genus-operator-3.0.0.md)_ |
| <microservice>.affinityScheduling.enabled                         |                                                      | _See [values.yaml](../default-helm-values/genus-operator-3.0.0.md)_ |
| <microservice>.affinityScheduling.namespaceListForPodAntiAffinity |                                                      | _See [values.yaml](../default-helm-values/genus-operator-3.0.0.md)_ |
| <microservice>.serviceMonitor.scrapeInterval                      | Interval of Prometheus scraping the metrics endpoint | "30s"                                                               |

## Release values

| Parameter                         | Description                                                 | Default |
| --------------------------------- | ----------------------------------------------------------- | ------- |
| genus-message-queue-service       | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-database-dictionary-service | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-object-storage-service      | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-file-utility-service        | _See [Microservice helm values](#microservice-helm-values)_ |         |
| genus-wopi-service                | _See [Microservice helm values](#microservice-helm-values)_ |         |
| redis | | | 
| redis.replica.replicaCount | Number of slaves. The value should never be 2. Always 1 or >= 3 | 1 (No replication) |
| genus-common-config | | |
| genus-help-docs-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-web-frontend | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-web-frontend.serviceWorker.enabled | Wether or not to enable the service worker. It is highly recommended to keep this `true` for performance reasons | true |
| genus-authorization-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-authentication-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-gateway-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-gateway-service.sessionDurationMinutes | Maximum number of minutes for which a session may last, less than or equal to 0 means that the cookie doesn't expire | "10080" |
| genus-gateway-service.sessionInactivityMaxDurationMinutes | Maximum number of minutes for which a session inactivity may last, renews duration if activity is in second half of period | "60" |
| genus-trace-input-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-message-subscription-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-tracelog-subscription-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-internationalization-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-webcal-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-carddav-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-live-update-input-service | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-core-services | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-core-services.activeConnectionString | | "" |
| genus-core-services.databaseActiveDb | | "" |
| genus-core-services.databaseActiveSchema | | "" |
| genus-core-services.descriptiveConnectionString | | "" |
| genus-core-services.databaseDescriptiveDb | | "" |
| genus-core-services.databaseDescriptiveSchema | | "" |
| genus-core-services.databaseVendorVersion | | "" |
| genus-core-services.databaseIsCaseInsensitive | | "" |
| genus-core-services.dataMartQueryService | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-core-services.dataMartQueryService.coreMaxThreadCount | | "4" |
| genus-core-services.megaService | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-core-services.megaService.coreMaxThreadCount | | "4" |
| genus-core-services.desktopFrontend | _See [Microservice helm values](#microservice-helm-values)_ | |
| genus-core-services.responseCompression | | "false" |
| genus-core-services.requestCompression | | "false" |
| genus-core-services.defaultCryptoProviderDecryptionKey | | "" |
| genus-core-services.defaultCryptoProviderValidationKey | | "" |
| genus-core-services.winlogbeat.enabled | Set to true to use winlogbeat to ship the windows event log | false |
| genus-core-services.filebeat.enabled | Set to true to use filebeat to ship the IIS access log | false |
| genus-core-services.fluentd.enabled | Set to true to use fluentd to ship the windows event log | false |
| genus-core-services.elasticsearch | These values are only used when either winlogbeat or filebeat is enabled | |
| genus-core-services.elasticsearch.username | The username for the Elasticsearch user | "" |
| genus-core-services.elasticsearch.password | The password for the Elasticsearch user | "" |
| genus-core-services.elasticsearch.hosts | The host(s) for the Elasticsearch endpoint(s). Example: ["https://elastic.example.com:9299"] | [] |
| genus-core-services.elasticsearch.cloudId | Cloud ID if using elasticcloud | "" |
| genus-core-services.elasticsearch.cloudAuth | Cloud auth if using elasticcloud | "" |
| genus-core-services.elasticsearch.kibanaHost | The host for the Kibana endpoint | "" |
| global | | |
| global.customer | The name of the customer who owns the environment | "" |
| global.modelIdentifier | The identifing name of the model. The name shared by all namespaces working together | "" |
| global.namespaceName | The name of the namespace where the chart is deployed to. Used for validation when deploying | "" |
| global.k8sNamespaceType | Possible values are "origin", "green", "blue" or "operator" | "" |
| global.deployed | Wether or not the namespace is running in a deployed state. Possible values are "true" or "false". | "" |
| global.virtualDirectory | | "--" |
| global.dnsSuffix | The part of the URL that follows the host name. I.E: If the environment runs on app.example.com, dnsSuffix is "example.com" | "" |
| global.altDataSetURLs | | [] |
| global.timezone | Timezone | "/usr/share/zoneinfo/Europe/Oslo" |
| global.enableSentry | Set this value to "false" to not send crash reports to Sentry | "true" |
| global.reportSensitiveBreadcrumbsToSentry | Set this value to true to include sensitive information in Sentry reports. Should be "true" in development environments | "false" |
