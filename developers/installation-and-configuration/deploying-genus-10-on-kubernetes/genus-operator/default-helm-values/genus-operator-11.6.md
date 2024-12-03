```yaml
# Use https://github.com/dadav/helm-schema to automatically generate json schema from this file, using annotations.

# @schema
# additionalProperties: false
# @schema
global:

  # @schema
  # required: true
  # @schema
  # -- This property is used in the genusbiz/bootstrap image. Whether or not to use this file for deployment.
  enabled: true

  # @schema
  # required: true
  # @schema
  # -- This property is used in the genusbiz/bootstrap image. Should be the same as the deployment name.
  k8sRuntime: ""
  
  # @schemas
  # required: true
  # @schema
  # -- The unique model identifier. 
  modelIdentifier: "" 

  # @schema
  # type: string
  # @schema
  # -- The name of the cluster in which the application is running
  clusterName: "" 
  
  # @schema
  # required: true
  # @schema
  # -- This property is used in the genusbiz/bootstrap image. The namespace in which the application is running.
  namespaceName: "" 
  
  # @schema
  # required: true
  # type: string
  # @schema
  dnsSuffix: "" 

  # @schema
  # type: string
  # @schema
  # -- If the application should be available at another URL than "<global.modelIdentifier>-operator.<global.dnsSuffix>", use this property to override it.
  hostnameFQDN: ""
  
  # @schema
  # const: operator
  # required: true
  # @schema
  # -- This property is used in the genusbiz/bootstrap image to identify the value file for Genus Operator
  environmentType: "operator" 
  
  # @schema
  # @schema
  # -- The TZ identifier for the timezone of the application. [Read more]https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 
  timezone: "Europe/Oslo" 
  
  # @schema
  # type: boolean
  # @schema
  # -- Whether or not to send error reports to Sentry. Should be true in production environments.
  enableSentry: true 

  # @schema
  # type: string
  # @schema
  # -- Proxy for Sentry, if running in a restricted network
  sentryProxy: ""

  # @schema
  # type: string
  # @schema
  # -- Path to a certificate file. When set, the well known "root" CAs (like VeriSign) will be extended with the extra certificates in file. The file should consist of one or more trusted certificates in PEM format. A message will be printed to stderr (once) if the file is missing or misformatted, but any errors are otherwise ignored
  nodeExtraCACerts: ""
  
  # @schema
  # @schema
  # -- Used to opt out of automounting API credentials. Change to true if this is something you want to do. [Read more](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)
  automountServiceAccountToken: false 
  
  # @schema
  # @schema
  clusterDomain: cluster.local 

  pitTlsTerminator:
    enabled: false
    image: ""
  
  # @schema
  # required: true
  # type: string
  # @schema
  # -- The name of the customer. Used for automatic error reporting
  customer: "" 
  
  # @schema
  # required: true
  # type: string
  # @schema
  # -- The name or email of a contact that can be reached in case of errors
  contact: ""

  auth:
    # @schema
    # enum: [MS Entra ID, Cookie]
    # @schema
    # -- The authentication method used by the application. Use "Cookie" for signing in with username and password, or "MS Entra ID" for signing in with MS Entra Id (previously known as Azure AD)
    method: "Cookie"

    # @schema
    # additionalProperties: false
    # @schema
    MSEntraId:
      
      # @schema
      # type: string
      # @schema    
      # -- Required if using auth.method: "MS Entra ID". Set up for authentication, and this value, can be found in the Azure portal
      tenantId: ""
      
      # @schema
      # type: string
      # @schema     
      # -- Required if using auth.method: "MS Entra ID". Set up for authentication, and this value, can be found in the Azure portal 
      clientId: ""
      
      # @schema
      # type: string
      # @schema     
      # -- Required if using auth.method: "MS Entra ID". Set up for authentication, and this value, can be found in the Azure portal 
      clientSecret: ""
      
      # @schema
      # type: string
      # @schema     
      # -- Required if using auth.method: "MS Entra ID". Set up for authentication, and this value, can be found in the Azure portal 
      operatorGroupId: ""
      
      # @schema
      # type: string
      # @schema     
      # -- Required if using auth.method: "MS Entra ID". Set up for authentication, and this value, can be found in the Azure portal 
      redirectUri: ""
  
  # @schema
  # @schema
  # -- The name of the secret used for pulling images from a private registry. Only change this if you do not use the image registry.
  imagePullSecrets: 
  - name: "genus-regcred-azure"

  # @schema
  # additionalProperties: false
  # @schema
  traceLog:
    # @schema
    # @schema
    debug: false 

    # @schema
    # @schema
    timing: false 

  # @schema
  # type: object
  # patternProperties:
  #   "^.*":
  #     "type": "string"
  # additionalProperties: false
  # @schema
  # -- Add nodeselectors to the pods. Comes in addtion to the default nodeselector, "kubernetes.io/os: linux"
  nodeSelector: {}
  
  # @schema
  # type: object
  # @schema
  # -- Specify experimental features to enable with feature flags
  featureFlags: 
    deployGenus: false
  
  # @schema
  # type: object
  # additionalProperties: false
  # @schema
  versionDeployment:
    
    # @schema
    # type: boolean
    # @schema
    # -- Enable Version Deployment
    enabled: false

    # @schema
    # type: boolean
    # @schema
    # -- Enable Version Deployment for Genus Operator, giving Genus Operator the option to upgrade itself
    enableSelfDeployment: false

    # @schema
    # type: string
    # description: The container registry to use for the Genus Installer
    # @schema
    containerRegistry: "https://genus.azurecr.io"

    # @schema
    # type: string
    # description: The URL to the config repo
    # @schema
    configRepoUrl: ""

    # @schema
    # type: string
    # description: Git access token to use for pulling and pushing to the config repo
    # @schema
    configRepoAccessToken: ""

    # @schema
    # type: string
    # description: The git user name that is used for committing changes to the config repo
    # @schema
    configRepoGitUserName: ""

    # @schema
    # type: string
    # description: The git user email that is used for committing changes to the config repo
    # @schema
    configRepoGitUserEmail: ""

    # @schema
    # type: string
    # description: The git branch to use for the config repo
    # @schema
    configRepoGitBranch: ""

    # @schema
    # enum: [GenusOperator, Flux, ArgoCD]
    # description: The method to use for deploying Genus
    # @schema
    deployMethod: "GenusOperator"

    # @schema
    # type: string
    # description: When using GitOps (Flux or ArgoCD), this is the path to the Helm release config file for Genus Runtimes
    # @schema
    genusHelmReleaseConfigFilePath: ""

    # @schema
    # type: string
    # description: When using GitOps (Flux or ArgoCD), this is the path to the Helm release config file for Genus Operator
    # @schema
    genusOperatorHelmReleaseConfigFilePath: ""

    # @schema
    # type: string
    # description: The directory in the git repo containing the helm values files
    # @schema
    helmValuesDirectory: "helm-values"


  phoneHome:
    # @schema
    # type: boolean
    # deprecated: true
    # @schema
    # -- Whether or not to send anonymous usage statistics to Genus. Deprecated. Not in use.
    enabled: false 

    apiKey: ""

    customerSampleCode: ""
  
  # @schema
  # type: string
  # @schema
  # -- Override for serviceAccountName. Should be specified if rbac.create is false
  serviceAccountName: ""

  # @schema
  # required: true
  # additionalProperties: false
  # @schema
  database: 
    # @schema
    # required: true
    # enum: [%REPLACE_WITH_VENDOR_VERSION%]
    # @schema
    vendorVersion: "" 

    # @schema
    # required: true
    # @schema
    appModelConnectionString: "" 

    # @schema
    # required: true
    # @schema
    appModelDatabase: "" 
    
    # @schema
    # required: true
    # @schema
    appModelSchema: "" 

    # @schema
    # deprecated: true
    # @schema
    # -- This property is not used in Genus Operator
    caseInsensitiveSearch: true
  
  ingress:

    # @schema
    # type: string
    # @schema
    # -- TODO 
    pathType: "ImplementationSpecific"

    # @schema
    # type: object
    # patternProperties:
    #   "^.*":
    #     "type": "string"
    # additionalProperties: false
    # @schema
    # -- Add extra annotations to the ingresses
    annotations: {}

    # @schema
    # type: string
    # @schema
    # -- TODO 
    ingressClassName: ""

    # @schema
    # @schema
    # -- TODO
    tlsConfigEnabled: false

    # @schema
    # @schema
    # -- TODO
    requireUniqueIngressHosts: false

    # @schema
    # @schema
    # -- TODO
    ingressWildCardPathEnabled: false 

    # @schema
    # @schema
    # -- TODO
    secretNameOverride: ""

    # @schema
    # @schema
    # -- TODO
    operatorFrontendTlsIngressEnabled: false

  # @schema
  # type: array
  # items:
  #   type: object
  #   properties:
  #     hosts:
  #       type: array
  #       description: "A list of hostnames associated with the TLS configuration."
  #       items:
  #         type: string
  #         description: "The hostname to be covered by this TLS configuration, e.g., example.com."
  #     secretName:
  #       type: string
  #       description: "The name of the Kubernetes Secret containing the TLS certificate and key."
  #       required: false
  #       example: "example-tls-secret"
  # @schema
    tls: []

  rbac:
    # @schema
    # @schema
    create: true 

  # @schema
  # additionalProperties: false
  # @schema
  metrics:
    serviceMonitor:

      # @schema
      # type: boolean
      # @schema
      # -- Whether or not to create a ServiceMonitor for Prometheus scraping. Requires that the ServiceMonitor CRD is installed.
      enabled: true 

      # @schema
      # @schema
      # -- How often Prometheus should scrape the metrics endpoint
      scrapeInterval: 30s

    prometheusRule:
      # @schema
      # @schema
      # -- Whether or not to create PrometheusRules for alerting. Requires that the PrometheusRule CRD is installed.
      enabled: true 
      
      rules:
        # coreServicePrometheusRules:
        failingDataBaseTransactions:
          # @schema
          # type: boolean
          # @schema
          enabled: true
          
          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0.05
          
          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m
          
          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: error
          
          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        highObjectScopeUtilization:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0.8

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        # generalPrometheusRules
        kubePodCrashLooping:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 1

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 15m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: critical

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        containerRestarting:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        unhandledExceptions:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: error

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        fatalExceptions:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: error

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        failedRequests:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        # genusOperatorPrometheusRules:
        nonRunningPodsInActiveRuntime:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: critical

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        podsNotReadyInActiveRuntime:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: critical

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        nonRunningPodsInNonActiveRuntime:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        podsNotReadyInNonActiveRuntime:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered within the timeperiod defined in for
          threshold: 0

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        podsExistOutsideAvailabilityWindow:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        noControlLoopIsExecuted:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 120

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: error


          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        # mailServicePrometheusRules:
        failedMails:
          # @schema
          # type: boolean
          # @schema
          enabled: false

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: error


          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        mailsSentWithWarnings:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        sendMailProcessStopped:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the threshold is surpassed for the alert to be sent
          for: 5m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: critical

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        mailsInFailedState:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: critical

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        # messageQueuePrometheusrules: 
        stoppedSendingMessages:   
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: string
          # @schema
          # -- Timeperiod for how long the service is not sending a message before alerting
          for: 15m

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: warning

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

        # scheduled-aciton-prometheus-rules:
        scheduledActionFailed:
          # @schema
          # type: boolean
          # @schema
          enabled: true

          # @schema
          # type: number
          # @schema
          # -- Threshold for when the alert is triggered
          threshold: 0

          # @schema
          # enum: [info, warning, error, critical]
          # @schema
          # -- Severity of the alert
          severity: error

          # @schema
          # type: object
          # patternProperties:
          #   "^.*":
          #     "type": "string"
          # additionalProperties: false
          # @schema
          additionalLabels: {}

  networking:
    # @schema
    # @schema
    internalTLS: false 

    genusOperatorService:
      main:
        # @schema
        # @schema
        http: 8080 
        # @schema
        # @schema
        https: 9443 

    operatorFrontend:
      main:
        # @schema
        # @schema
        http: 8080 
        # @schema
        # @schema
        https: 9443 
      metrics:
        # @schema
        # @schema
        http: 9113 
        # @schema
        # @schema
        https: 9413 
      blocked:
        # @schema
        # @schema
        http: 8404 
        # @schema
        # @schema
        https: 9404 
    
    redis:
      main:
        # @schema
        # @schema
        http: 6379 
        # @schema
        # @schema
        https: 9379 
      sentinel:
        # @schema
        # @schema
        http: 26379 
        # @schema
        # @schema
        https: 9279 

    coreService:
      main:
        # @schema
        # @schema
        http: 8181 
        # @schema
        # @schema
        https: 9443 

    megaService:
      main:
        # @schema
        # @schema
        http: 80 
        
        # @schema
        # @schema
        https: 9443

  
  # @schema
  # type: array
  # items:
  #   type: object
  #   properties:
  #     mountPath: 
  #       type: [string, null]
  #       required: true
  #       description: Path within the container at which the volume should be mounted.  Must not contain ':'.
  #     name: 
  #       type: [string, null]
  #       required: true
  #       description: This must match the Name of a Volume.
  #     readOnly:
  #       type: boolean
  #       required: false
  #       description: Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  #     subPath:
  #       type: [string, null]
  #       required: false
  #       description: Path within the volume from which the container's volume should be mounted. Defaults to \\ (volume's root).
  # @schema
  volumeMounts: [] 
  
  # @schema
  # type: array
  # items: 
  #   type: object
  #   properties:
  #     name:
  #       type: string
  # @schema
  volumes: [] 

  # @schema
  # type: array
  # items:
  #   type: object
  #   properties:
  #     key:
  #       type: string
  #     operator:
  #       enum: [Exists,Equal]
  #     value:
  #       type: string
  #     effect:
  #       enum: [NoSchedule,PreferNoSchedule,NoExecute]
  #     tolerationSeconds:
  #       type: integer
  #     tolerationSecondsAfterFinish:
  #       type: integer
  #   additionalProperties: false
  # @schema
  # -- The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
  tolerations: []
  redis:
    architecture: "replication"

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
    existingSecret: "session-redis" # @schema default:  "session-redis"
    existingSecretPasswordKey: "PASSWORD"
  sentinel:
    enabled: true 
    containerSecurityContext:
      allowPrivilegeEscalation: false
    resources:
      requests:
        # @schema
        # @schema
        memory: 200Mi 
        # @schema
        # @schema
        cpu: 100m 
      limits:
        # @schema
        # @schema
        memory: 1Gi 
        # @schema
        # @schema
        cpu: 2000m 
  master:
    containerSecurityContext:
      allowPrivilegeEscalation: false
    resources:
      requests:
        # @schema
        # @schema
        memory: 200Mi 
        # @schema
        # @schema
        cpu: 100m 
      limits:
        # @schema
        # @schema
        memory: 1Gi 
        # @schema
        # @schema
        cpu: 2000m 
    nodeSelector:
      kubernetes.io/os: linux
    persistence:
      # @schema
      # @schema
      enabled: false 
  replica:
    containerSecurityContext:
      allowPrivilegeEscalation: false
    resources:
      requests:
        # @schema
        # @schema
        memory: 200Mi 
        # @schema
        # @schema
        cpu: 100m 
      limits:
        # @schema
        # @schema
        memory: 1Gi 
        # @schema
        # @schema
        cpu: 2000m 
    # @schema
    # @schema
    replicaCount: 3 
    nodeSelector:
      kubernetes.io/os: linux
    persistence:
      # @schema
      # @schema
      enabled: false 
  pdb:
    # @schema
    # @schema
    create: true 
  metrics:
    containerSecurityContext:
      allowPrivilegeEscalation: false
    # @schema
    # @schema
    enabled: false 
    serviceMonitor: 
      # @schema
      # @schema
      enabled: false 
    sentinel:
      # @schema
      # @schema
      enabled: false 
      serviceMonitor:
        # @schema
        # @schema
        enabled: false 

```