```yaml
genus-database-dictionary-service:
  enabled: true
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      cpu: 500m
      memory: 500Mi
    limits:
      cpu: 1000m
      memory: 1000Mi
  serviceMonitor:
    scrapeInterval: 30s

genus-message-queue-service:
  enabled: false
  replicaCount: 1
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      cpu: 500m
      memory: 500Mi
    limits:
      cpu: 1000m
      memory: 1000Mi
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
      cpu: 500m
      memory: 500Mi
    limits:
      cpu: 1000m
      memory: 1000Mi
  serviceMonitor:
    scrapeInterval: 30s

genus-wopi-service:
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

genus-redis:
  enabled: true
  replicaCount: 1

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
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
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
  subDomain: ''
  nodeEnviroment: production
  customer: ''
  modelName: ''
  k8sNamespaceType: ''
  deployed: ''
  virtualDirectory: '--'
  dataSetURL: ''
  altDataSetURLs: []
  timezone: /usr/share/zoneinfo/Europe/Oslo
  traceLogDebug: 'false'
  traceLogTiming: 'false'
  enableSentry: 'true'
  jwkFromPem: ''
  image:
    tag: latest
    pullPolicy: Always

```