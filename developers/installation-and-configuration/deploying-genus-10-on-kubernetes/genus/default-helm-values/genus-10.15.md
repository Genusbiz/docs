```yaml
genus-database-dictionary-service:
  enabled: true
  replicaCount: 1
  restartWithModelPublish: "true"
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
  enabled: true
  replicaCount: 1
  restartWithModelPublish: "true"
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

genus-key-value-store-service:
  enabled: false
  replicaCount: 1
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "true"
  maxRequestSizeInMegaBytes: '100'
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
  restartWithModelPublish: "false"
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
  commonLabels:
    app.kubernetes.io/part-of: genus  
    genus.no/restartWithModelPublish: "false"
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
      genus.no/restartWithModelPublish: "false"
  metrics:
    enabled: false
    serviceMonitor: 
      enabled: false
    sentinel:
      enabled: false
      serviceMonitor:
        enabled: false

genus-help-docs-service:
  enabled: true
  replicaCount: 1
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "false"
  serviceWorker:
    enabled: true
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "true"
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
  restartWithModelPublish: "false"
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
  restartWithModelPublish: "true"
  responseCompression: 'false'
  genus-hello-world-service:
    restartWithModelPublish: "true"
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
    requestCompression: 'false'
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
  database:
    activeConnectionString: ""
    activeDb: ""
    activeSchema: ""
    descriptiveConnectionString: ""
    descriptiveDb: ""
    descriptiveSchema: ""
    vendorVersion: ""
    caseInsensitiveSearch: ""
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