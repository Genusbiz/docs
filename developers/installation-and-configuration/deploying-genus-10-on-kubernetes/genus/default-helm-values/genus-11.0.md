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
      memory: 200Mi
      cpu: 50m
    limits:
      memory: 800Mi
      cpu: 1000m
  serviceMonitor:
    scrapeInterval: 30s

genus-ibm-mq-io-service:
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
    genus.no/k8sRuntime: "{{ .Release.Name }}"
    genus.no/environmentType: "{{ .Values.global.environmentType }}"
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
    extraEnvVars: 
      - name: TZ
        value: "{{ .Values.global.timeZone }}"
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
    extraEnvVars: 
      - name: TZ
        value: "{{ .Values.global.timeZone }}"
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
  enabled: true
  serviceAlias: core-service
  runOnWindows: false
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  replicaCount: 1
  restartWithModelPublish: "true"
  maxConcurrentModelInstances: 8
  minConcurrentModelInstances: 0
  affinityScheduling: 
    enabled: false
    namespaceListForPodAntiAffinity: []
  resources:
    requests:
      memory: 2Gi
      cpu: 700m
    limits:
      memory: 4Gi
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651
  modelInstanceRecycling:
    min: ""
    max: ""
  podDisruptionBudget:
    enabled: false
  onStartScript:
    enabled: false

genus-mq-subscriber-service:
  enabled: true
  serviceAlias: mq-subscriber-service
  runOnWindows: false
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  maxConcurrentModelInstances: 8
  minConcurrentModelInstances: 0
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
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651
  modelInstanceRecycling:
    min: ""
    max: ""

genus-scheduled-action-service:
  enabled: true
  serviceAlias: scheduled-action-service
  runOnWindows: false
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  maxConcurrentModelInstances: 8
  minConcurrentModelInstances: 0
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
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651
  modelInstanceRecycling:
    min: ""
    max: ""

genus-rest-soap-service:
  enabled: true
  serviceAlias: rest-soap-service
  runOnWindows: false
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  maxConcurrentModelInstances: 8
  minConcurrentModelInstances: 0
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
  serviceMonitor:
    scrapeInterval: 30s
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651
  modelInstanceRecycling:
    min: ""
    max: ""

genus-data-mart-query-service:
  enabled: true
  serviceAlias: data-mart-query-service
  runOnWindows: false
  replicaCount: 1
  autoScaling:
    enabled: false
    minReplicas: 1
    maxReplicas: 2
    targetCPUUtilizationPercentage: 40
  coreMaxThreadCount: '4'
  maxConcurrentModelInstances: 8
  minConcurrentModelInstances: 0
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
  sentryDSN: https://bb5777fbb0264b83a66a6c314d3dcb45@o35818.ingest.sentry.io/6487651
  modelInstanceRecycling:
    min: ""
    max: ""

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
  servicemonitor:
    enabled: true
  nodeExtraCACerts: ""
  automountServiceAccountToken: false
  clusterDomain: cluster.local
  noSearchEngineIndexing: "false"
  pitTlsTerminator:
    enabled: false
  modelInstanceRecycling:
    min: ""
    max: ""
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
    fontSrc: ""
    styleSrc: ""
    scriptSrc: ""
    scriptSrcElem: ""
    frameAncestorsSrc: ""
    connectSrc: ""
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
  contact: ""
  sensitiveHttpHeaders: ""
  published: ''
  virtualDirectory: '--'
  dataSetURL: ''
  altDataSetURLs: []
  timezone: Europe/Oslo
  windowsTimezone: 'W. Europe Standard Time'
  enableDebugInformation: 'false'
  reportSensitiveBreadcrumbsToSentry: 'false'
  jwkFromPem: ''
  image:
    tag: latest
    pullPolicy: Always
  imagePullSecrets: 
  - name: "genus-regcred-azure"
  enableDesktopTransactionEncryption: false
  responseCompression: false
  requestCompression: false

  networking:
    internalTLS: false
    authenticationService:
      main:
        http: 3000
        https: 9443
    authorizationService:
      main:
        http: 4000
        https: 9443
    carddavService:
      main:
        http: 4000
        https: 9443
    coreService:
      main:
        http: 8181
        https: 9443
    dataMartQueryService:
      main:
        http: 8181
        https: 9443
    mqSubscriberService:
      main:
        http: 8181
        https: 9443
    scheduledActionService:
      main:
        http: 8181
        https: 9443
    restSoapService:
      main:
        http: 8181
        https: 9443
    desktopFrontend:
      main:
        http: 8080
        https: 9443
    megaService:
      main:
        http: 80
        https: 9443
    databaseDictionaryService:
      main:
        http: 8080
        https: 9443
    fileUtilityService:
      main:
        http: 8080
        https: 9443
    gatewayService:
      main:
        http: 3002
        https: 9443
      blocked:
        http: 8404
        https: 9404
    helpDocsService:
      main:
        http: 8080
        https: 9443
    ibmMqIoService:
      main:
        http: 8094
        https: 9443
    internalTestingService:
      main:
        http: 8080
        https: 9443
    internationalizationService:
      main:
        http: 8080
        https: 9443
    keyValueStoreService:
      main:
        http: 8080
        https: 9443
    kubernetesOperatorService:
      main:
        http: 8080
        https: 9443
    liveUpdateInputService:
      main:
        http: 8099
        https: 9443
    mailService:
      main:
        http: 8080
        https: 9443
    messageQueueService:
      main:
        http: 8099
        https: 9443
    messageSubscriptionService:
      external:
        http: 8097
        https: 9097
      internal:
        http: 8098
        https: 9098
    objectStorageService:
      main:
        http: 8080
        https: 9443
    operatorFrontend:
      main:
        http: 8080
        https: 9443
      metrics:
        http: 9113
        https: 9413
      blocked:
        http: 8404
        http: 9404
    redis:
      main:
        http: 6379
        https: 9379
      sentinel:
        http: 26379
        https: 9279
    redisOperator:
      main:
        http: 6379
        https: 9379
      sentinel:
        http: 26379
        https: 9279
    redisIoService:
      main:
        http: 8094
        https: 9443
    traceInputService:
      main:
        http: 8094
        https: 9443
    tracelogSubscriptionService:
      main:
        http: 8095
        https: 9443
    webFrontend:
      main:
        http: 8080
        https: 9443
      metrics:
        http: 9113
        https: 9413
      blocked:
        http: 8404
        https: 9404
    webcalService:
      main:
        http: 4000
        https: 9443
    wopiService:
      main:
        http: 8080
        https: 9443
    xmlUtilityService:
      main:
        http: 8080
        https: 9443



```