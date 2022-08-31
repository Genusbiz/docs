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
  phoneHome:
    enabled: "true"
    apiKey: ""
    customerSampleCode: ""
  database:
    vendorVersion: ""
    activeConnectionString: ""
    activeDb: ""
    activeSchema: ""
    descriptiveConnectionString: ""
    descriptiveDb: ""
    descriptiveSchema: ""
  ingress:
    awsAlbControllerEnabled: false
    annotations: {}
    agicLetsEncryptEnabled: false
    ingressWildCardPathEnabled: false
    
genus-operator-frontend:
  replicaCount: 1
  resources:
    requests:
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
  doRollingPodRestarts: "true"

  environmentAvailabilityControlEnabled: "false"
  resources:
    requests:
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
    resources:
      requests:
        memory: 50Mi
        cpu: 10m
      limits:
        memory: 500Mi
        cpu: 200m
  master:
    resources:
      requests:
        memory: 50Mi
        cpu: 10m
      limits:
        memory: 500Mi
        cpu: 200m
    nodeSelector:
      kubernetes.io/os: linux
    persistence:
      enabled: false
  replica:
    resources:
      requests:
        memory: 50Mi
        cpu: 10m
      limits:
        memory: 500Mi
        cpu: 200m
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