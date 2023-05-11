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

genus-redis-io-service:
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

genus-ibm-mq-io-service:
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
      memory: 50Mi
      cpu: 10m
    limits:
      memory: 500Mi
      cpu: 200m
  serviceMonitor:
    scrapeInterval: 30s
  databaseCommandTimeoutSeconds: "30"
    
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
  nameOverride: redis-sentinel
  architecture: "replication"
  commonLabels:
    app.kubernetes.io/part-of: genus
    genus.no/restartWithModelPublish: "false"
  auth:
    enabled: true
    existingSecret: "generic-redis"
    existingSecretPasswordKey: "PASSWORD"
  serviceAccount:
    automountServiceAccountToken: false
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
    replicaCount: 1
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
  metrics:
    enabled: false
    serviceMonitor: 
      enabled: false
    sentinel:
      enabled: false
      serviceMonitor:
        enabled: false

genus-help-docs-service:
  enabled: false
  replicaCount: 1
  restartWithModelPublish: "false"
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 25Mi
      cpu: 10m
    limits:
      memory: 100Mi
      cpu: 100m
  serviceMonitor:
    scrapeInterval: 30s

genus-web-frontend:
  enabled: true
  replicaCount: 1
  restartWithModelPublish: "true"
  serviceWorker:
    enabled: true
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 25Mi
      cpu: 10m
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
      memory: "500Mi"
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
    requests:
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
      cpu: 10m
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
      cpu: 10m
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
  
genus-core-service:
  enabled: false
  serviceAlias: core-service
  autoScaling:
    enabled: false
  replicaCount: 1
  restartWithModelPublish: "true"
  maxConcurrentModelInstances: 8
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
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651
  podDisruptionBudget:
    enabled: false
  onStartScript:
    enabled: false

genus-mq-subscriber-service:
  enabled: true
  serviceAlias: mq-subscriber-service
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  maxConcurrentModelInstances: 8
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  restartWithModelPublish: "true"
  podDisruptionBudget:
    enabled: false
  onStartScript:
    enabled: false
  resources:
    requests:
      memory: 500Mi
      cpu: 700m
    limits:
      memory: 4Gi
      cpu: 1000m
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651

genus-scheduled-action-service:
  enabled: true
  serviceAlias: scheduled-action-service
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  maxConcurrentModelInstances: 8
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  restartWithModelPublish: "true"
  podDisruptionBudget:
    enabled: false
  onStartScript:
    enabled: false
  resources:
    requests:
      memory: 500Mi
      cpu: 700m
    limits:
      memory: 4Gi
      cpu: 1000m
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651

genus-data-mart-query-service:
  enabled: true
  serviceAlias: data-mart-query-service
  replicaCount: 1
  autoScaling:
    enabled: false
  coreMaxThreadCount: '4'
  maxConcurrentModelInstances: 8
  restartWithModelPublish: "true"
  podDisruptionBudget:
    enabled: false
  onStartScript:
    enabled: false
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
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651

genus-mega-service:
  enabled: true
  replicaCount: 1
  coreMaxThreadCount: '4'
  restartWithModelPublish: "true"
  responseCompression: 'false'
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
  sentryDSN: https://980e4eddb40d485c96fc3b656f5eee70@sentry.io/1447323

genus-desktop-frontend:
  enabled: true
  replicaCount: 1
  restartWithModelPublish: "false"
  serviceMonitor:
    scrapeInterval: 30s
  resources:
    requests:
      memory: 25Mi
      cpu: 10m
    limits:
      memory: 100Mi
      cpu: 100m

  


global:
  coreLinux: "false"
  enableSentry: "true"
  enableSentryPerformance: "false"
  disableTraceLog: "false"
  featureFlags:
    useScheduledActions: "false"
  ingress:
    awsAlbControllerEnabled: false
    ingressWildCardPathEnabled: false
    tlsConfigEnabled: false
  traceLog:
    enabled: true
    timing: false
    debug: false
  contentSecurityPolicy:
    frameSrc: ""    
    objectSrc: ""
    imageSrc: ""
  networkPolicy:
    enabled: false
    loadBalancer:
      ingress:
      egress:
    database:
      ingress:
      egress:
    objectStorage:
      ingress:
      egress:
    keyValueStore:
      ingress:
      egress:
    wopi: 
      ingress:
      egress: 
  jobs:
    verifyModel:
      image:
        repository: "genus.azurecr.io/genus/images/genus-meta-model-manager"
      enabled: false
      scriptOutput: "scriptOutput.sql"
      traceOutput: "traceOutput.txt"
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
  environmentType: ''
  namespaceName: ''
  k8sRuntime: ''
  deployed: ''
  published: ''
  virtualDirectory: '--'
  dataSetURL: ''
  altDataSetURLs: []
  timezone: /usr/share/zoneinfo/Europe/Oslo
  windowsTimeZone: 'W. Europe Standard Time'
  enableSentry: 'true'
  enableDebugInformation: 'false'
  reportSensitiveBreadcrumbsToSentry: 'false'
  jwkFromPem: ''
  image:
    tag: latest
    pullPolicy: Always
  enableDesktopTransactionEncryption: false
  responseCompression: false
  requestCompression: false

```