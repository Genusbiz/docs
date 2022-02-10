```yaml


global:
  modelIdentifier: ""
  clusterName: ""
  subDomain: ""
  k8sNamespaceType: "operator"
  timezone: ""
  enableSentry: "true"
  customer: ""
  dnsSuffix: ""
  ingress:
    awsAlbControllerEnabled: false
    annotations: {}
    agicLetsEncryptEnabled: false
    ingressWildCardPathEnabled: false
    
genus-operator-frontend:
  replicaCount: 1
  resources:
    request:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 100Mi
      cpu: 50m
  serviceMonitor:
    scrapeInterval: 30s
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []

genus-kubernetes-operator-service:
  replicaCount: 1
  dbType: ""
  descriptiveConnectionString: ""
  descriptiveSchema: ""
  activeConnectionString: ""
  activeSchema: ""
  doRollingPodRestarts: "true"
  phoneHome:
    enabled: "false"
    apiKey: ""
    customerSampleCode: ""
  environmentAvailabilityControlEnabled: "false"
  resources:
    request:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  

redis:
  fullnameOverride: operator-redis
  architecture: "replication"
  auth:
    enabled: true
    existingSecret: "session-redis"
    existingSecretPasswordKey: "PASSWORD"
  sentinel:
    enabled: true
  master:
    nodeSelector:
      kubernetes.io/os: linux
    persistence:
      enabled: false
  replica:
    replicaCount: 1
    nodeSelector:
      kubernetes.io/os: linux
    persistence:
      enabled: false
  metrics:
    enabled: false
    serviceMonitor: 
      enabled: false
    sentinel:
      enabled: false
      serviceMonitor:
        enabled: false

```