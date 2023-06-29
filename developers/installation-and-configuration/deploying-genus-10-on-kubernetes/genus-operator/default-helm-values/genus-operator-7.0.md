```yaml


global:
  modelIdentifier: ""
  clusterName: ""
  subDomain: ""
  k8sNamespaceType: "operator"
  timezone: "Europe/Oslo"
  enableSentry: "true"
  customer: ""
  dnsSuffix: ""
  environmentAvailabilityControlEnabled: "true"
  imagePullSecrets: 
  - name: "genus-regcred-azure"
  traceLog:
    debug: false
    timing: false
  phoneHome:
    enabled: "false"
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
  nginx-exporter:
    image: nginx/nginx-prometheus-exporter:0.8.0
  rbac:
    create: true
    
  networking:
    internalTLS: false 
    kubernetesOperatorService:
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
        https: 9404
    redisOperator:
      main:
        http: 6379
        https: 9379
      sentinel:
        http: 26379
        https: 9279
    coreService:
      main:
        http: 8181
        https: 9443
    megaService:
      main:
        http: 80
        https: 9443
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
  commonLabels:
    app.kubernetes.io/part-of: genus-operator
    genus.no/restartWithModelPublish: "false"
    genus.no/k8sRuntime: "{{ .Release.Name }}"
    genus.no/environmentType: "operator"
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
    replicaCount: 3
    nodeSelector:
      kubernetes.io/os: linux
    persistence:
      enabled: false
  pdb:
    create: true
  metrics:
    enabled: false
    serviceMonitor: 
      enabled: false
    sentinel:
      enabled: false
      serviceMonitor:
        enabled: false

```