# Genus Operator helm values

| Parameter                                                                            | Description | Default | 
|--                                                                                    |--|--|
| global                                                                               | | |
| global.modelIdentifier                                                               | | "" |
| global.clusterName                                                                   | | "" |
| global.subDomain                                                                     | | "" |
| global.k8sNamespaceType                                                              | | "operator" |
| global.timezone                                                                      | | "" |
| global.enableSentry                                                                  | | "true" |
| global.customer                                                                      | | "" |
| global.ingress                                                                       | | |
| global.ingress.annotations                                                           | | {} |
| global.ingress.awsAlbControllerEnabled                                               | | false |
| global.ingress.agicLetsEncryptEnabled                                                | | false |
| global.ingress.ingressWildCardPathEnabled                                            | | false |
|                                                                                      | | |
| genus-operator-frontend                                                              | | |
| genus-operator-frontend.replicaCount                                                 | | 1 |
| genus-operator-frontend.resources                                                    | | |
| genus-operator-frontend.resources.request                                            | | |
| genus-operator-frontend.resources.request.memory                                     | | 50Mi |
| genus-operator-frontend.resources.request.cpu                                        | | 10m |
| genus-operator-frontend.resources.limits                                             | | |
| genus-operator-frontend.resources.limits.memory                                      | | 100Mi |
| genus-operator-frontend.resources.limits.cpu                                         | | 50m |
| genus-operator-frontend.serviceMonitor                                               | | |
| genus-operator-frontend.serviceMonitor.scrapeInterval                                | | 30s |
| genus-operator-frontend.affinityScheduling                                           | |  |
| genus-operator-frontend.affinityScheduling.enabled                                   | | false |
| genus-operator-frontend.affinityScheduling.namespaceListForPodAntiAffinity           | | [] |
|                                                                                      | | |
| genus-kubernetes-operator-service                                                    | | |
| genus-kubernetes-operator-service.replicaCount                                       | | 1 |
| genus-kubernetes-operator-service.descriptiveConnectionString                        | | "" |
| genus-kubernetes-operator-service.descriptiveSchema                                  | | "" |
| genus-kubernetes-operator-service.activeConnectionString                             | | "" |
| genus-kubernetes-operator-service.activeSchema                                       | | "" |
| genus-kubernetes-operator-service.dbType                                             | | "" |
| genus-kubernetes-operator-service.doRollingPodRestarts                               | | "true" |
| genus-kubernetes-operator-service.phoneHomeEnabled                                   | See [Phone Home](#phone-home) | "false" |
| genus-kubernetes-operator-service.phoneHomeApiKey                                    | | "" |
| genus-kubernetes-operator-service.environmentAvailabilityControlEnabled              | See [Availability Control](#availability-control) | "false" |
| genus-kubernetes-operator-service.resources                                          | | |
| genus-kubernetes-operator-service.resources.request                                  | | |
| genus-kubernetes-operator-service.resources.request.memory                           | | 50Mi |
| genus-kubernetes-operator-service.resources.request.cpu                              | | 10m |
| genus-kubernetes-operator-service.resources.limits                                   | | |
| genus-kubernetes-operator-service.resources.limits.memory                            | | 500Mi |
| genus-kubernetes-operator-service.resources.limits.cpu                               | | 200m |
| genus-kubernetes-operator-service.serviceMonitor                                     | | |
| genus-kubernetes-operator-service.serviceMonitor.scrapeInterval                      | | 30s |
| genus-kubernetes-operator-service.affinityScheduling                                 | | |
| genus-kubernetes-operator-service.affinityScheduling.enabled                         | | false |
| genus-kubernetes-operator-service.affinityScheduling.namespaceListForPodAntiAffinity | | [] |
|                                                                                      | | |
| redis                                                                                | | |
| redis.fullnameOverride                                                               | | operator-redis |
| redis.architecture                                                                   | | "replication" |
| redis.auth                                                                           | | |
| redis.auth.enabled                                                                   | | true |
| redis.auth.existingSecret                                                            | | "session-redis" |
| redis.auth.existingSecretPasswordKey                                                 | | "PASSWORD" |
| redis.sentinel                                                                       | | |
| redis.sentinel.enabled                                                               | | true |
| redis.master                                                                         | | |
| redis.master.nodeSelector                                                            | | |
| redis.master.nodeSelector.kubernetes.io/os                                           | | linux |
| redis.master.persistence                                                             | | |
| redis.master.persistence.enabled                                                     | | false |
| redis.replica                                                                        | | |
| redis.replica.replicaCount                                                           | | 1 |
| redis.replica.nodeSelector                                                           | | |
| redis.replica.nodeSelector.kubernetes.io/os                                          | | linux |
| redis.replica.persistence                                                            | | |
| redis.replica.persistence. enabled                                                   | | false |
| redis.metrics                                                                        | | |
| redis.metrics.enabled                                                                | | false |
| redis.metrics.serviceMonitor                                                         | |  |
| redis.metrics.serviceMonitor.enabled                                                 | | false |
| redis.metrics.sentinel                                                               | | |
| redis.metrics.sentinel.enabled                                                       | | false |
| redis.metrics.sentinel.serviceMonitor                                                | | |
| redis.metrics.sentinel.serviceMonitor.enabled                                        | | false |

## Phone Home
<a name="phone-home" ></a>

Enabling this will periodically report information regarding version info of the running Genus deploymenmt back to Genus.  


## Availability Control
<a name="availability-control" ></a>
Enabling this will allow an operator set specify a schedule for when active, passive and origin environments will be available. All services in the environments will be scaled to 0 outside of this schedule. 

This should not be used in combination with other means of specifying availability.