```yaml
genus-database-dictionary-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s

genus-object-storage-service:
  enabled: false
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s

genus-message-queue-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s

genus-file-utility-service:
  enabled: true
  replicaCount: 1
  maxRequestSizeInMegaBytes: '100'
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      cpu: 300m
      memory: 300Mi
    limits:
      cpu: 1000m
      memory: 1000Mi
  serviceMonitor:
    scrapeInterval: 30s

genus-xml-utility-service:
  enabled: true
  replicaCount: 1
  maxRequestSizeInMegaBytes: '100'
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      cpu: 200m
      memory: 300Mi
    limits:
      cpu: 500m
      memory: 1000Mi
  serviceMonitor:
    scrapeInterval: 30s

genus-mail-service:
  enabled: true
  replicaCount: 1
  maxRequestSizeInMegaBytes: '100'
  activeConnectionString: ''
  activeSchema: ''
  dbType: ''
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources: 
    requests:
      memory: "32Mi"
      cpu: "25m"
    limits:
      memory: "128Mi"
      cpu: "500m"
  serviceMonitor:
    scrapeInterval: 30s
    
genus-wopi-service:
  enabled: false
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s

redis:
  fullnameOverride: redis-sentinel
  architecture: "replication"
  auth:
    enabled: true
    existingSecret: "generic-redis"
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
    podLabels:
      app.kubernetes.io/part-of: genus
  metrics:
    enabled: false
    serviceMonitor: 
      enabled: false
    sentinel:
      enabled: false
      serviceMonitor:
        enabled: false

genus-common-config:
  enabled: true
  replicaCount: 1

genus-help-docs-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 25Mi
      cpu: 1m
    limits:
      memory: 100Mi
      cpu: 100m
  serviceMonitor:
    scrapeInterval: 30s

genus-web-frontend:
  enabled: true
  serviceWorker:
    enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 25Mi
      cpu: 1m
    limits:
      memory: 100Mi
      cpu: 100m
  serviceMonitor:
    scrapeInterval: 30s

genus-authorization-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: "32Mi"
      cpu: "25m"
    limits:
      memory: "128Mi"
      cpu: "500m"
  serviceMonitor:
    scrapeInterval: 30s

genus-authentication-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    request:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s

genus-gateway-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  sessionDurationMinutes: "10080"
  sessionInactivityMaxDurationMinutes: "60"
  resources:
    requests:
      memory: 50Mi
      cpu: 400m
    limits:
      memory: 500Mi
      cpu: 1000m
  serviceMonitor:
    scrapeInterval: 30s

genus-trace-input-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s

genus-message-subscription-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s   

genus-tracelog-subscription-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s   
    
genus-internationalization-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 25Mi
      cpu: 1m
    limits:
      memory: 100Mi
      cpu: 100m  
  serviceMonitor:
    scrapeInterval: 30s

genus-webcal-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 25Mi
      cpu: 1m
    limits:
      memory: 100Mi
      cpu: 100m
  serviceMonitor:
    scrapeInterval: 30s

genus-carddav-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources: 
    requests:
      memory: "32Mi"
      cpu: "25m"
    limits:
      memory: "128Mi"
      cpu: "500m"
  serviceMonitor:
    scrapeInterval: 30s

genus-live-update-input-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
    cpu: 200m
  
  serviceMonitor:
    scrapeInterval: 30s
  
genus-core-services:
  enabled: true
  activeConnectionString: ''
  databaseActiveDb: ''
  databaseActiveSchema: ''
  descriptiveConnectionString: ''
  databaseDescriptiveDb: ''
  databaseDescriptiveSchema: ''
  databaseVendorVersion: ''
  databaseIsCaseInsensitive: ''
  responseCompression: 'false'
  requestCompression: 'false'
  defaultCryptoProviderDecryptionKey: ''
  defaultCryptoProviderValidationKey: ''
  dataMartQueryService:
    replicaCount: 1
    coreMaxThreadCount: '4'
    serviceMonitor:
      scrapeInterval: 30s
    affinityScheduling: 
      enabled: false
      namespaceListForPodAntiAffinity: []
    resources:
      requests:
        memory: 500Mi
        cpu: 700m
      limits:
        memory: 4Gi
        cpu: 1000m
  megaService:
    replicaCount: 1
    coreMaxThreadCount: '4'
    serviceMonitor:
      scrapeInterval: 30s
    affinityScheduling: 
      enabled: false
      namespaceListForPodAntiAffinity: []
    resources:
      requests:
        memory: 500Mi
        cpu: 700m
      limits:
        memory: 4Gi
        cpu: 1000m
  desktopFrontend:
    replicaCount: 1
    serviceMonitor:
      scrapeInterval: 30s
    resources:
      requests:
        memory: 25Mi
        cpu: 1m
      limits:
        memory: 100Mi
        cpu: 100m
  winlogbeat:
    enabled: false
  filebeat:
    enabled: false
  fluentd:
    enabled: false
  elasticsearch:
    username: ''
    password: ''
    hosts: []
    cloudId: ''
    cloudAuth: ''
    kibanaHost: ''


global:
  dnsSuffix: ''
  nodeEnviroment: production
  customer: ''
  modelIdentifier: ''
  k8sNamespaceType: ''
  namespaceName: ''
  deployed: ''
  virtualDirectory: '--'
  dataSetURL: ''
  altDataSetURLs: []
  timezone: /usr/share/zoneinfo/Europe/Oslo
  windowsTimeZone: 'W. Europe Standard Time'
  traceLogDebug: 'false'
  traceLogTiming: 'false'
  enableSentry: 'true'
  reportSensitiveBreadcrumbsToSentry: 'false'
  jwkFromPem: ''
  image:
    tag: latest
    pullPolicy: Always

```