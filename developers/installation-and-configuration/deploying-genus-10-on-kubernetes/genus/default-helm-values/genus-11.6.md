```yaml


genus-core-service:
  # @ignore
  serviceAlias: core-service
  replicaCount: 2
  podDisruptionBudget:
    enabled: true
    minAvailable: 1
  resources:
    requests:
      memory: 2Gi
      cpu: 700m
    limits:
      memory: 4Gi

genus-mq-subscriber-service:
  # @ignore
  serviceAlias: mq-subscriber-service

genus-scheduled-action-service:
  # @ignore
  serviceAlias: scheduled-action-service

genus-exposed-web-service:
  # @ignore
  serviceAlias: exposed-web-service

genus-data-mart-query-service:
  # @ignore
  serviceAlias: data-mart-query-service


genus-live-update-input-service:
  # @ignore
  serviceAlias: live-update-input-service

genus-live-update-subscription-service:
  # @ignore
  serviceAlias: live-update-subscription-service

genus-tracelog-input-service:
  # @ignore
  serviceAlias: tracelog-input-service

genus-tracelog-subscription-service:
  # @ignore
  serviceAlias: tracelog-subscription-service

# @schema
# type: object
# additionalProperties: false
# @schema
global:

  redis: 
    # @schema
    # type: string
    # @schema
    # -- 
    architecture: replication

    # @schema
    # type: string
    # @schema
    # -- 
    overrides: "{}"

  # @schema
  # type: boolean
  # @schema
  # -- This property is used in the genusbiz/bootstrap image. Whether or not to use this file for deployment.
  enabled: true

  # @schema
  # type: string
  # @schema
  # -- The name of the cluster. Used for logging and monitoring.
  clusterName: ""

  # @schema
  # type: string
  # @schema
  # -- Use if you want to override the default hostname for the application, which the <deployment name>.<global.dnsSuffix>.
  hostnameFQDN: ""

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
  # type: boolean
  # @schema
  # -- Whether or not to send performance reports to Sentry. 
  enableSentryPerformance: false

  # @schema
  # type: string
  # @schema
  nodeExtraCACerts: ""

  # @schema
  # type: string
  # @schema
  # -- The URL to Genus Operator. Only set if using hostnameFQDN to override default URL for Operator. 
  operatorUrlOverride: ""
  
  # @schema
  # @schema
  # -- Used to opt out of automounting API credentials. Change to true if this is something you want to do. [Read more](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)
  automountServiceAccountToken: false 

  # @schema
  # @schema
  clusterDomain: cluster.local 
  
  # @schema
  # type: boolean
  # @schema
  # -- Set to true if you do not want the site to be indexed by search engines.
  noSearchEngineIndexing: false

  pitTlsTerminator:
    enabled: false
    image: "" 

  # @schema
  # type: object
  # patternProperties:
  #   "^.*":
  #     "type": "string"
  # additionalProperties: false
  # @schema
  # -- Use to set featureFlags for the application. Only do this if you know what you are doing.
  featureFlags: {}
  
  # @schema
  # type: array
  # items:
  #   type: string
  # @schema
  allowedExternalOrigins: []


  ingress:

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
    # type: string
    # @schema
    # -- TODO 
    pathType: "ImplementationSpecific"

    # @schema
    # @schema
    # -- TODO
    ingressWildCardPathEnabled: false 

    # @schema
    # @schema
    # -- TODO
    secretNameOverride: ""

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


  traceLog:
    # @schema
    # type: boolean
    # @schema
    # -- Enable trace logging
    enabled: true

    # @schema
    # type: boolean
    # @schema
    # -- Enable timing information in trace log
    timing: false

    # @schema
    # type: boolean
    # @schema
    # -- Expand trace logging with debugging information
    debug: false

  contentSecurityPolicy:
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for frames     
    frameSrc: ""    
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for objects       
    objectSrc: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for images       
    imageSrc: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for fonts       
    fontSrc: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for styles       
    styleSrc: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for scripts       
    scriptSrc: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for script elements       
    scriptSrcElem: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for frame ancestors       
    frameAncestorsSrc: ""
    
    # @schema
    # type: string
    # @schema
    # -- Defined allowed sources for conncetions       
    connectSrc: ""

  networkPolicy:
    # @schema
    # type: boolean
    # @schema
    # -- Enable network policies
    enabled: false

    # @schema
    # type: object
    # @schema
    # -- Define network policies for external loadBalancer
    loadBalancer:
      
      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     from: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      ingress: []

      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     to: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      egress: []

    # @schema
    # type: object
    # @schema
    # -- Define network policies for database
    database: 
      
      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     from: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      ingress: []

      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     to: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      egress: []

    # @schema
    # type: object
    # @schema
    # -- Define network policies for external objectStorage
    objectStorage:
      
      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     from: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      ingress: []

      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     to: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      egress: []

    # @schema
    # type: object
    # @schema
    # -- Define network policies for external keyvaluestore       
    keyValueStore:
      
      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     from: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      ingress: []

      # @schema
      # type: array
      # items:
      #   type: object
      #   properties:
      #     ports:
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           port: 
      #             type: string
      #           endPort:
      #             type: integer
      #           protocol:
      #             type: string
      #             enum: [TCP,UDP,SCTP]
      #         additionalProperties: false
      #     to: 
      #       type: array
      #       items:
      #         type: object
      #         properties:
      #           ipBlock: 
      #             type: object
      #             properties:
      #               cidr:
      #                 type: string
      #               except:
      #                 type: array
      #                 items:
      #                   type: string
      #           namespaceSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #           podSelector:
      #             type: object
      #             properties:
      #               matchLabels:
      #                 type: object
      #                 patternProperties:
      #                   "^.*":
      #                     "type": "string"
      #                 additionalProperties: false
      #               matchExpressions:
      #                 type: array
      #                 items:
      #                   type: object
      #                   properties:
      #                     key:
      #                       type: string
      #                       required: true
      #                     operator:
      #                       type: string
      #                       enum: ["In", "NotIn", "Exists", "DoesNotExist"]
      #                       required: true
      #                     values:
      #                       type: array
      #                       items:
      #                         type: string
      #                 additionalProperties: false
      #         additionalProperties: false
      # @schema
      egress: []

  jobs:
  
    # @schema
    # deprecated: true
    # @schema
    verifyModel:
      image:
        repository: "genus.azurecr.io/genus/images/genus-meta-model-manager"
      enabled: false
      scriptOutput: "scriptOutput.sql"
      traceOutput: "traceOutput.txt"

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
    # type: string
    # @schema
    appModelConnectionString: "" 

    # @schema
    # type: string
    # @schema
    appModelDatabase: "" 
    
    # @schema
    # required: true
    # type: string
    # @schema
    appModelSchema: "" 

    # @schema
    # deprecated: true
    # type: boolean
    # @schema
    # -- This property is not used in Genus Operator
    caseInsensitiveSearch: true
    
    # @schema
    # type: string
    # @schema
    # -- TODO
    appModelConnectionOptions: ""

  # @schema
  # required: true
  # type: string
  # @schema
  dnsSuffix: ''

  # @schema
  # required: true
  # type: string
  # @schema
  # -- The name of the customer. Used for automatic error reporting
  customer: ''

  # @schemas
  # required: true
  # type: string
  # @schema
  # -- The unique model identifier. 
  modelIdentifier: ''

  # @schema
  # enum: [origin,green,blue]
  # @schema
  # -- This property is used in the genusbiz/bootstrap image to identify the value file for Genus Operator
  environmentType: ''
  
  # @schema
  # required: true
  # type: string
  # @schema
  # -- This property is used in the genusbiz/bootstrap image. The namespace in which the application is running.
  namespaceName: ''
  
  # @schema
  # type: string
  # @schema
  # -- This property is used in the genusbiz/bootstrap image. Should be the same as the deployment name.
  k8sRuntime: ''

  # @schema
  # required: true
  # type: string
  # @schema
  # -- The name or email of a contact that can be reached in case of errors
  contact: ""

  # @schema
  # type: string
  # @schema
  # -- Semi colon-separated list of sensitive headers which will not be logged
  sensitiveHttpHeaders: ""

  # @schema
  # type: boolean
  # @schema
  # -- Wether or not this runtime uses a published version of the app model. Should be true for green and blue environments, and false for origin
  published: false

  # @schema
  # type: string
  # @schema
  # -- The URL to the data set. 
  dataSetURL: ''

  # @schema
  # type: string
  # @schema
  # -- The language of the application. Used for sorting and formatting.
  lang: "nb_NO.UTF-8"

  # @schema
  # type: string
  # @schema
  # -- The timezone of the application.
  timezone: Europe/Oslo
  
  # @schema
  # type: string
  # @schema
  # -- The timezone of the application. Used for core-services, when runOnWindows is set to true.
  windowsTimezone: 'W. Europe Standard Time'

  # @schema
  # type: boolean
  # @schema
  # -- Enable to add extra debug information to requests, such as server timing headers. Should be false if not actively debugging something, as it slighly impacts performance
  enableDebugInformation: false

  # @schema
  # type: boolean
  # @schema
  # -- Enabling this will add extra information to error reports that are reported to Sentry. Can be turned on if there are no senstive information in the application.
  reportSensitiveBreadcrumbsToSentry: false

  # @schema
  # type: string
  # readonly: true
  # @schema
  # @ignored
  jwkFromPem: ''

  # @schema
  # @schema
  # -- The name of the secret used for pulling images from a private registry. Only change this if you do not use the default images.
  imagePullSecrets: 
  - name: "genus-regcred-azure"

  # @schema
  # type: boolean
  # @schema
  # -- Enable this to encrypt data transactions to and from Genus Desktop
  enableDesktopTransactionEncryption: false

  # @schema
  # type: boolean
  # @schema
  # -- Enable this to compress responses to Genus Desktop
  responseCompression: false

  # @schema
  # type: boolean
  # @schema
  # -- Enable this to compress requests to Genus Desktop
  requestCompression: false

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

  # @schema
  # type: array
  # item: 
  #   type: object
  #   properties: 
  #     hostnames:
  #       type: array
  #       items:
  #         type: string
  #     ip:
  #       type: string
  #     additionalProperties: false
  # @schema
  # -- hostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
  hostAliases: []

  # @schema
  # type: object
  # patternProperties:
  #   "^.*":
  #     "type": "string"
  # additionalProperties: false
  # @schema
  # -- Add nodeSelectors to all pods. Comes in addtion to the default nodeSelector; "kubernetes.io/os: linux"
  nodeSelector: {}

  # @schema
  # type: array
  # items:
  #   type: object
  #   properties:
  #     key:
  #       type: string
  #     operator:
  #       type: string
  #       enum: [Exists,Equal]
  #     value:
  #       type: string
  #     effect:
  #       type: string
  #       enum: [NoSchedule,PreferNoSchedule,NoExecute]
  #     tolerationSeconds:
  #       type: integer
  #     tolerationSecondsAfterFinish:
  #       type: integer
  #   additionalProperties: false
  # @schema
  # -- The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
  tolerations: []

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
  # type: object
  # patternProperties:
  #   "^.*":
  #     "type": "string"
  # additionalProperties: false
  # @schema
  # -- Custom secrets to add to the core services
  secret: {}

  networking:

    # @schema
    # type: boolean
    # @schema
    # -- Enable this to use the internal TLS certificate for all services, aka using https internally in the cluster 
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
    exposedWebService:
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
    liveUpdateSubscriptionService:
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
        https: 9404
    redis:
      main:
        http: 6379
        https: 9379
      sentinel:
        http: 26379
        https: 9279
    kafkaIoService:
      main:
        http: 8094
        https: 9443
    redisIoService:
      main:
        http: 8094
        https: 9443
    tracelogInputService:
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