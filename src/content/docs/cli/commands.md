---
title: Comandos
tableOfContents: true
---

# General

## Lista de verbos o first commands

- exec
- list
- get
- use
- select
- remove
- create
- generate
- update
- exit
- log
- config
- status

## Lista de recursos

- service
- account
- project
- environment
- pipeline
- params
- job
- builds

## Argumentos globales

### --synconfig

Es un argumento que permite usar una configuración determinada mediante el path que se indique mientras se ejecute el comando. Esto permitira usar synctl con distintas configuraciones en distintas sesiones de terminal. En principio este path debera apuntar a la carpeta contenedora del archivo de configuración.

### --verbose

Permite agregar más información en la ejecución del comando.

```
$ synctl list projects -v 10
```

### --version

Permite obtener la version del programa.

```
$ synctl --version
synctl version v7.2.3
```

## auth

Permite generar la configuración para poder empezar a usar la CLI. Genera el archivo de configuración en la ubicación por defecto de SYNCONFIG (ej, Linux: $HOME/config.yaml)

```
$ synctl auth --client-id syndeno-client --client-secret 9x32m0yr829023 --realm A-0000000003
Successful authentication
Generating configuration file in default path: /home/ferbar/.synctl/config.yaml
Successful creation of configuration file in: /home/ferbar/.synctl/config.yaml
```

Archivo generado en /home/ferbar/.synctl/config.yaml en caso de usar Linux:

```
logger:
  level: info
  format: text
  addSourceFile: true
  logToFile: true
  logToStdout: false
credentials:
  realm: A-0000000003
  clientId: synctl-client
  clientSecret: 9x32m0yr829023
```

En el caso que se necesite usar los servidores de desarrollo se pueden usar las flags ocultas --sm-server, --som-server, --uam-server, --auth-server, --k8-proxy:

```
$ synctl auth --client-id syndeno-client --client-secret s9mf0usd89fmsd --realm A-0000000003 --auth-server https://auth.dev.az.syndeno.net --uam-server https://uam.api.dev.az.syndeno.net --sm-server https://sm.api.dev.az.syndeno.net --som-server https://som.api.dev.az.syndeno.net --k8s-proxy 4.176.3.132:31128
Successful authentication
Generating configuration file in default path: /home/ferbar/.synctl/config.yaml
Successful creation of configuration file in: /home/ferbar/.synctl/config.yaml
```

Archivo generado para DEV:

```
api:
  k8SProxyURL: 4.176.3.132:31128
  uamURL: https://uam.api.dev.az.syndeno.net
  somURL: https://som.api.dev.az.syndeno.net
  smURL: https://sm.api.dev.az.syndeno.net
  authServerUrl: https://auth.dev.az.syndeno.net
logger:
  level: info
  format: text
  addSourceFile: true
  logToFile: true
  logToStdout: false
credentials:
  realm: A-0000000003
  clientId: syndeno-client
  clientSecret: s9mf0usd89fmsd
```

## build

Ejecuta el lanzamiento de un job, varios jobs, un environment o varios environments que compartan el mismo proyecto.

```
$ synctl build job-para-testing --action DEPLOY --service S-0000000003 --project syndeno-testing --environment zzz-test
Build jobs executed
job-para-testing
```

Se puede ejecutar varios jobs de un entorno al mismo tiempo pasandolos como argumentos.

```
$ synctl build prueba-cli-32 prueba-cli-33 --action BUILD --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Build jobs executed
prueba-cli-32
prueba-cli-33
```

Se puede ejecutar RAW actions en vez de trigger actions.

```
$ synctl build job-para-testing --raw-action update_scm --service S-0000000003 --project syndeno-testing --environment zzz-test
Build jobs executed
job-para-testing
```

Si se seleccionan los parámetros a usar no hace faltar pasar las flags.

```
$ synctl build demo-back-1 --action DEPLOY
Build jobs executed
demo-back-1
```

Para hacer build de un environment se debe pasar por flag solamente el service y el proyecto. El environment se debe 
pasar mediante argumento.
```
$ synctl build flow-cliente-env --service S-0000000259 --project flow-platform --action DEPLOY
Build jobs executed for environment flow-cliente-env
publisher-internal-proveedor-a
flow-cliente-a
```

Puede recibir varios environments como argumentos pero estos deben coincidir en proyecto si no solo se construiran los que coincidan con el proyecto pasado por input.

```
$ synctl build flow-cliente-env flow-proveedor-env --service S-0000000259 --project flow-platform --action DEPLOY
Build jobs executed for environment flow-cliente-env
publisher-internal-proveedor-a
flow-cliente-a
Build jobs executed for environment flow-proveedor-env
flow-proveedor-a
consumer-external-cliente-a
```

## list accounts

Permite listar las cuentas disponibles.

```
$ synctl list account
ID            NAME             STATUS  ACCOUNTPARENTID  
A-0000000003  Syndeno Testing  ACTIVE  A-0000000001
```

## list projects

Permite listar los proyectos.

```
$ synctl list projects --all --service S-0000000003
PIPELINE PROJECT NAME  
syndeno-testing        
sesame-test            
syndeno-ops
```

## list service

Permite listar los servicios.

```
$ synctl list service
ID            STATUS    PRODUCT VERSION ID  PRODUCT VERSION NAME  
S-0000000003  ACTIVE    PV-0000000012       Syndeno Platform         
S-0000000040  ACTIVE    PV-0000000012       Syndeno Platform
```

Si se quiere listar todos los servicios se puede usar --all.

```
$ synctl list srv --all
ID            STATUS    PRODUCT VERSION ID  PRODUCT VERSION NAME  
S-0000000003  ACTIVE    PV-0000000012       Syndeno Platform      
S-0000000037  INACTIVE  PV-0000000012       Syndeno Platform      
S-0000000040  ACTIVE    PV-0000000012       Syndeno Platform      
S-0000000002  ACTIVE    PV-0000000001       Kubernetes            
S-0000000035  INACTIVE  PV-0000000001       Kubernetes            
S-0000000043  ACTIVE    PV-0000000001       Kubernetes            
S-0000000004  ACTIVE    PV-0000000002       Jenkins               
S-0000000036  INACTIVE  PV-0000000002       Jenkins               
S-0000000041  ACTIVE    PV-0000000002       Jenkins
```

## list builds

Se agregó el comando synctl list job builds. Puede usarse con argumentos o sin argumentos en combinación con synctl use {{job/environment/project}}. Puede usarse con argumentos o sin argumentos en combinación con synctl use {{job/environment/project}}.

```
$ synctl list builds --job prueba-gw-1 --limit 20 --service S-0000000003 --environment test-synctl
#  RESULT   BUILDURL                                                                         TIMESTAMP  DURATION  QUEUEID
11  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/11/  1716476100930     30031     8347  
10  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/10/  1716150164671     27530     7151  
9  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/9/   1716149665588     28142     7140  
8  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/8/   1715968602085     30899     6907  
7  ABORTED  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/7/   1715871790277   1717225     6534  
6  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/6/   1715796253291     29068     6282  
5  SUCCESS  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/5/   1715795066842     26918     6277  
4  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/4/   1715794864706     28811     6272  
3  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/3/   1715103781829     25919     5006  
2  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/2/   1715103751643     28226     5003  
1  FAILURE  https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/1/   1715103729353     31515     4998
```

Combinado con comandos USE no se necesitan argumentos.

```
$ synctl list builds
...
```

## list environment

Permite listar los entornos.

```
$ synctl list env --all --service S-0000000003 --project syndeno-testing
NAME           PIPELINE PROJECT  
zzz-test-fede  syndeno-testing   
zzz-synctl     syndeno-testing   
back-end       syndeno-ops       
front-end       syndeno-ops
```

## list pipeline

Permite listar los pipelines.

```
$ synctl list pipeline --all --service S-0000000003 --project syndeno-testing
PIPELINE NAME       PIPELINE PROJECT NAME  
pipeline-pruebas    syndeno-testing        
demo-back           syndeno-testing        
angular-prueba      syndeno-testing        
prueba-gw           syndeno-testing        
sesame-pipeline-v2  sesame-test            
test-vars           syndeno-testing        
prueba_service      syndeno-testing
```

## list job

Permite listar los jobs.

```
$ synctl list job --all --service S-0000000003 --project syndeno-testing --environment syndeno-test-1
JOB NAME           PIPELINE PROJECT NAME  ENVIRONMENTS NAME  PIPELINE NAME     BUILDABLE  
synctl-job-test    syndeno-testing        zzz-synctl         pipeline-pruebas  false      
synctl-job-test-2  syndeno-testing        zzz-synctl         demo-back         true       
pruebaservice      syndeno-testing        zzz-test-fede      prueba_service    true       
node               syndeno-ops            back-end           node-hola         false      
node-app           syndeno-ops            1                  node-hola         true       
prueba-pe          syndeno-testing        zzz-test-fede      pipeline-pruebas  true       
python-app         syndeno-ops            1                  python-hola       true       
test-refactor      syndeno-testing        zzz-test-fede      pipeline-pruebas  true
```


## list param

Permite listar parámetros.

### Permite listar los parámetros de un project.

```
$ synctl list param --service S-0000000003 --project syndeno-flow
Project parameters:
example-1="whatever-value-1"

Environment parameters to inherit:
No environment parameters to inherit found
```

### Permite listar los parámetros de un environment.

```
$ synctl list param --service S-0000000003 --project syndeno-testing
Parameters:
nuevaa="12345"
param1="param"
param-dos="dos"

Inherited project parameters:
No inherited project parameters found
```

### Permite listar los parámetros de un pipeline.

```
$ synctl list param --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Pipeline parameters:
example-1="whatever-value-1"

Job parameters to inherit:
No job parameters to inherit found
```

### Permite listar los parámetros de un job.

```
$ synctl list param --job prueba-cli --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Parameters:
test_1906-1="whatever-value"

Inherited pipeline parameters:
No inherited pipeline parameters found
```

## get service

Permite obtener los detalles de un servicio.

```
$ synctl get service S-0000000003 -o wide --project syndeno-testing
Subscription ID:          S-0000000003             
Strategy:                 SYNDENO_PLATFORM_SOM_V2  
Account Organization ID:  A-0000000003             
Account Project ID:       AP-0000000003            
Status:                   ACTIVE

Service params:
SYN_SERVICE_provider_location_id    EPLI-0000000019          
SYN_SERVICE_account_id              A-0000000003             
SYN_SERVICE_strategy                SYNDENO_PLATFORM_SOM_V2  
SYN_SERVICE_subscription_id         S-0000000003             
SYN_SERVICE_account_name            Syndeno Testing
```

## get job

Permite leer la información de un job determinado.

```
$ synctl get job prueba-gw-1 --service S-0000000003 --project syndeno-testing --environment zzz-synctl
```

O sin argumentos si previamente se seleccionan los recursos con synctl use {{job/environment/project}}

```
$ synctl get job -o wide
Name:                   synctl-job-test-2                                                                                                                       
Pipeline Name:          demo-back                                                                                                                               
Environments Name:      zzz-synctl                                                                                                                              
Pipeline Project Name:  syndeno-testing                                                                                                                         
Buildable:              true                                                                                                                                    
Description:            Description: "{\"type\":\"customer_application\",\"application\":\"\",\"subscription\":\"\",\"actions\":[\"default\",\"update_scm\"]}"  
Job URL:                https://jenkins.plt.az.syndeno.net/job/zzz-synctl/job/synctl-job-test-2/

Params:
BUILD_back_SERVICE_NODEPORT_back-np_TARGETPORT: "3000"
GCP_region: "francecentral"
BUILD_back_IMAGE_back_IMAGE_TAGS: "latest"
BUILD_back_SERVICE_NODEPORT_back-np_PORT: "80"
SYN_JOB_param_SYNCTL_TEST_812: "812"
```

## get environment

Permite leer la información de un job determinado.

```
$ synctl get environment -o wide --service S-0000000003 --project syndeno-testing
Environment name:       zzz-synctl       
Pipeline project name:  syndeno-testing

Environment params:
SYN_ENVIRONMENT_domain: "synctl-test.az.syndeno.net"
```

## get project

Permite leer la información de un job determinado.

```
$ synctl get project -o wide --service S-0000000003
Pipeline project name:  syndeno-testing

Pipelines:
pipeline-pruebas
demo-back
angular-prueba
prueba-gw
test-vars
prueba_service

Environment:
zzz-test-fede
zzz-synctl

Pipeline project params:
SYN_PROJECT_environment_param_1123123: "123"
SYN_PROJECT_environment_param_varParaenv: "var test"
SYN_PROJECT_environment_param_zzzvar: "zzz-test"
```

## get pipeline

Permite leer la información de un job determinado.

```
$ synctl get pipeline demo-back --service S-0000000003 --project syndeno-testing
Pipeline name:          demo-back        
Pipeline project name:  syndeno-testing  
Type:                   Jenkinsfile      
Order:                  1
```

## use project

Selecciona un proyecto a usar y modifica el valor en el archivo de configuración.

```
$ synctl use project syndeno-testing
Current Project changed: syndeno-testing
```

## use service

Selecciona un servicio a usar y modifica el valor en el archivo de configuración.

```
$ synctl use service S-0000000105
Current Service Id changed: S-0000000105
```

## use environment

Selecciona un entorno a usar y modifica el valor en el archivo de configuración.

```
$ synctl use environment staging
Current environment name changed: staging
```

## use job

Selecciona un job a usar y modifica el valor en el archivo de configuración.

```
$ synctl use job prueba-gw-1
Current job name changed: prueba-gw-1
```

## select service

Selecciona un servicio de forma interactiva y modifica el valor en el archivo de configuración.

```
$ synctl select service
Id          Status     AccountType    Product Version ID      Product Version Name
├── S-0000000003              ACTIVE                    PV-0000000012   Syndeno Platform
└── S-0000000040              ACTIVE                    PV-0000000012   Syndeno Platform

✔ S-0000000003 -  - ACTIVE - PV-0000000012 - Syndeno Platform
Current Subscription Id changed: S-0000000003
```

## generate kubeconfig

Genera el kubeconfig de un cluster añadiendole los permisos para validar con nuestro K8s-Proxy. Es importante que antes de usarlos se indiquen los valores de currentConfiguration.accountSelected y currentConfiguration.subscriptionId en el archivo de configuración. Para no hacerlo manualmente se puede realizar usando los comandos synctl use account {ACCOUNT_ID}, synctl select account, synctl use service {SUBSCRIPTION_ID} y synctl select service.

```
$ synctl generate kubeconfig
{KUBECONFIG_CONTENT}
```

### Argumento --dir {FILE_PATH}

El argumento dir permite indicarle una locación donde se creara el archivo kubeconfig generado.

```
$ synctl generate kubeconfig --dir ./whatever.name.kubeconfig
```

## get account

Permite obtener los detalles de una cuenta específica.

```
$ synctl get account
ID:             A-0000000003         
Parent ID:      A-0000000001         
Country:        SPAIN                
Creation date:  2024-04-23T08:13:39  
Name:           Syndeno Testing      
Status:         ACTIVE
```

## config

Permite ver la configuración usada en el config.yaml.

```
$ synctl config
CREDENTIALS                                       
Realm:          A-0000000001                      
Client ID:      syndeno-synctl                    
Client secret:  7sd9yf789sd7fyds

LOGGER                            
Level:                     debug  
Format:                    text   
Log to standard output:    true   
Log to file:               true   
Add file source on error:  true
```

## status

Permite obtener el estado actual almacenado en base a los recursos que se decidieron seleccionar con los comandos synctl use y synctl select.

```
$ synctl status
STATUS
Platform service ID selected:  S-0000000003
K8s service ID selected:       S-0000000002
Jenkins service ID selected:   S-0000000004
Parent service ID selected:    S-0000000001
Project selected:              -
Environment selected:          syndeno-test-1
Pipeline selected:             -
Job selected:                  synctl-job-test-2
Account ID selected:           A-0000000003
Cross login                    enabled

CROSS LOGIN INFORMATION
Realm:                   A-0000000003
Client ID:               syndeno-client
Client secret:           90sdf0ds
```

## clean status

Permite limpiar el estado almacenado en la CLI.

### --all

Permite limpiar todo el estado. Sin embargo mantiene el cross-login si lo hubiera.

```
$ synctl clean --all
Successfully restarted state on synctl
```
```
synctl clean --[project/environment/service/pipeline/job]
```

También se puede limpiar el estado para recursos específicos.

```
$ synctl clean --environment
```

## select project

El valor almacenado no se utiliza por el momento en los demás comandos.

Selecciona un proyecto de forma interactiva y modifica el valor en el archivo de configuración.

```
$ synctl select project
Use the arrow keys to navigate: ↓ ↑ → ←  and / toggles search
? Select project:
▸ AP-0000000008 - Proyecto Services - ACTIVE

✔ AP-0000000008 - Proyecto Services - ACTIVE
Current project Id changed: AP-0000000008f
```

## create project

Permite crear proyectos

```
$ synctl create project project-34 --service S-0000000003
Project created successfully: project-34
```

## create pipeline

Permite crear pipelines

```
$ synctl create pipeline demo-23 --service S-0000000003 --project project-34 --category customer_application --type Jenkinsfile
Pipeline created successfully: demo-23
```

## create environment

Permite crear entornos

```
$ synctl create environment env-test-88 --service S-0000000003 --project project-34
Environment created successfully: env-test-88
```

## create job

Permite crear jobs

```
$ synctl create job prueba-cli-3 --service S-0000000003 --project syndeno-testing --environment zzz-synctl --pipeline pipeline-qa --category customer_application
Job created successfully: prueba-cli-3
```

Si no se pasa category se toma por defecto el valor de customer_application. Valores posibles: service_application/customer_application
```
$ synctl create job whatever-job-name --service S-0000000003 --project syndeno-testing --environment zzz-synctl --pipeline pipeline-qa
```

## create param
### Parámetro de un project
Permite crear un parámetro en un project

```
$ synctl create param test-param-11 param-value-1 --service S-0000000003 --project syndeno-testing
Successfully created project param: test-param-11="param-value-1"
```
### Parámetro de un environment
Permite crear un parámetro en un environment

```
$ synctl create param test-borrar-param-11 param-value-1 --service S-0000000003 --project syndeno-testing --environment zzz-test
Successfully created environment param: test-borrar-param-11="param-value-1"
```

### Parámetro de un job
Permite crear un parámetro en un job

```
$ synctl create param test-create-job-param-2 param-value --job prueba-cli-list-build --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Successfully created job param: test-create-job-param-2=param-value
```

### Parámetro de un pipeline
Permite crear un parámetro en un pipeline

```
$ synctl create param test-borrar-param-9 param-value-1 --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully created job param: test-borrar-param-9=param-value-1
```
#### Sin asignar valor:
```
$ synctl create param test-create-job-param-2 --job prueba-cli-list-build --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Successfully created job param: test-create-job-param-2=""
```

## delete project

Permite eliminar proyectos

```
$ synctl delete project project-34 --service S-0000000003
Project deleted successfully: project-34
```

## delete environment

Permite eliminar entornos

```
$ synctl delete environment env-test-88 --service S-0000000003 --project project-34
Environment deleted successfully: env-test-88
```

## delete pipeline

Permite eliminar pipelines

```
$ synctl delete pipeline pipeline-qa --service S-0000000003 --project project-34
Pipeline deleted successfully: pipeline-qa
```

## delete job

Permite eliminar jobs

```
$ synctl delete job synctl-job-borrar-16 --service S-0000000003 --environment zzz-synctl --project syndeno-testing
Are you sure you want to delete the job: 'synctl-job-borrar-16'? (y/n): y
Successfully deleted job synctl-job-borrar-16
```

## delete param

### Parámetro de un project
Permite eliminar un parámetro en un project

```
$ synctl delete param test-delete-param-2 --service S-0000000003 --project syndeno-testing
Successfully deleted project param: test-delete-param-2
```
### Parámetro de un environment
Permite eliminar un parámetro en un environment

```
$ synctl delete param test-example-11 --service S-0000000003 --project syndeno-testing --environment zzz-test
Successfully deleted environment param: test-example-11
```
### Parámetro de un job
Permite eliminar un parámetro en un job

```
$ synctl delete param test-delete-job-param-2 --job prueba-cli-list-build --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Successfully deleted job param: test-delete-job-param-2
```

### Parámetro de un pipeline
Permite eliminar un parámetro en un pipeline

```
$ synctl delete param test-borrar-param-9 --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully deleted job param: test-borrar-param-9
```

## update param
### Parámetro de un project
Permite crear un parámetro en un project

```
$ synctl update param test-param-11 param-value-1 --service S-0000000003 --project syndeno-testing
Successfully updated project param: test-param-11="param-value-1"
```

### Parámetro de un environment
Permite crear un parámetro en un environment

```
$ synctl update param test-param-11 param-value-1 --environment zzz-test --service S-0000000003 --project syndeno-testing
Successfully updated environment param: test-param-11="param-value-1"
```

### Parámetro de un job
Permite crear un parámetro en un job

```
$ synctl update param test-update-job-param-2 param-value --job prueba-cli-list-build --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Successfully updated job param: test-update-job-param-2=param-value
```
#### Sin asignar valor:
```
$ synctl update param test-update-job-param-2 --job prueba-cli-list-build --service S-0000000003 --project syndeno-testing --environment zzz-synctl
Successfully updated job param: test-update-job-param-2=""
```

### Parámetro de un pipeline
Permite crear un parámetro en un pipeline

```
$ synctl update param test-borrar-param-9 param-value-1 --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully updated job param: test-borrar-param-9=param-value-1
```

## cluster info
Permite mostrar información del cluster de K8s
```
$ synctl cluster info --service S-0000000003
NAME      VERSION  REGION         NODES  NAMESPACES  VOLUMES  TOT ALLOC CPU    TOT ALLOC MEM
platform  v1.28.3  francecentral      4          17       13            7.6  2.242412544e+10
```
Se puede obtener solo algunos datos usando flags.
```
$ synctl cluster info -o wide --service S-0000000003 --version --region --name
v1.28.3
francecentral
platform
```
Se puede mostrar más datos usando -o wide
```
$ synctl cluster info -o wide --service S-0000000003
NAME      VERSION  REGION         NODES  NAMESPACES  VOLUMES  TOT ALLOC CPU    TOT ALLOC MEM
platform  v1.28.3  francecentral      4          17       13            7.6  2.242412544e+10

NODES
NAME                             STATUS
aks-general-88488486-vmss000000  Ready
aks-general-88488486-vmss000001  Ready
aks-general-88488486-vmss000002  Ready
aks-general-88488486-vmss000003  Ready

DEPLOYMENTS
NAME                         NAMESPACE        REPLICAS  READYREPLICAS
syndeno-flowd-aeropuertovlc  flow-aeropuerto         1              1
flowd-ministeriohacienda     flow-hacienda           1              1
k8s-proxy                    syndeno-dev             1              1
syndeno-flowd                syndeno-dev             0              0
syndeno-flowd-aeropuertovlc  syndeno-dev             0              0
syndeno-om                   syndeno-dev             1              1
syndeno-pm                   syndeno-dev             1              1
syndeno-pom                  syndeno-dev             1              1
syndeno-sm                   syndeno-dev             1              1
syndeno-som                  syndeno-dev             1              1
syndeno-uam                  syndeno-dev             1              1
syndeno-webback              syndeno-dev             1              1
syndeno-webfront             syndeno-dev             1              1
back                         zzz-test                2              0

STATEFULSETS
No Statefulsets found

DAEMONSETS
No Daemonsets found

PODS
NAME                                          STATUS     NAMESPACE
syndeno-flowd-aeropuertovlc-5ffd64c5df-4kt2m  Running    flow-aeropuerto
flowd-ministeriohacienda-79b5ffb9fd-t4dsd     Running    flow-hacienda
k8s-proxy-844647898c-sz8dd                    Running    syndeno-dev
syndeno-om-6456bd7647-rl4bx                   Running    syndeno-dev
syndeno-pm-5bd4866558-b5925                   Running    syndeno-dev
syndeno-pom-b6f54cc4d-h2f8g                   Running    syndeno-dev
syndeno-sm-786654979-jcvgx                    Running    syndeno-dev
syndeno-som-665cc4995f-rlnkg                  Running    syndeno-dev
syndeno-uam-7db565f969-j6px9                  Running    syndeno-dev
syndeno-uam-init-rrzsc                        Succeeded  syndeno-dev
syndeno-webback-8cf84d7c4-7fnf4               Running    syndeno-dev
syndeno-webfront-65b75445cf-fcglq             Running    syndeno-dev
back-7cf559f46f-m8mhn                         Pending    zzz-test
back-866bd68686-dq4nz                         Pending    zzz-test
back-866bd68686-mxpnp                         Failed     zzz-test
```

## get git
### Para pipelines
Permite ver información de git en un pipeline

```
$ synctl get git --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
URL                                                                                             BRANCH
https://syndeno-ci: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@github.com/syndeno/pipeline-qa.git  main
```
### Para jobs
Permite ver información de git en un job

```
$ synctl get git --service S-0000000003 --project syndeno-testing --environment env-qa --job job-1
URL                                                                                             BRANCH
https://syndeno-ci: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@github.com/syndeno/pipeline-qa.git  main
```

## update git
### Para pipelines
Permite actualizar la información de git en un pipeline
- En caso de usar solo una flag en vez de ambas solo se actualizara una sola.
- Si no hay valores asignados porque es pipeline es recien creado, se avisa y se solicita el ingreso de ambas flags.
```
$ synctl update git --git-branch main --git-url https://syndeno-ci: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@github.com/syndeno/pipeline-qa.git --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully updated git repository in pipeline: URL: https://syndeno-ci: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@github.com/syndeno/pipeline-qa.git, Branch: main
```
### Para jobs
Permite actualizar la información de git en un job
- En caso de usar solo una flag en vez de ambas solo se actualizara una sola.
- Si no hay valores asignados porque es pipeline es recien creado, se avisa y se solicita el ingreso de ambas flags.
```
$ synctl update git --git-branch main --git-url https://syndeno-ci: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@github.com/syndeno/pipeline-qa.git --service S-0000000003 --project syndeno-testing --environment env-qa --job job-1
Successfully updated git repository in job: URL: https://syndeno-ci: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@github.com/syndeno/pipeline-qa.git, Branch: main
```


## get jenkinsfile
### Para pipelines
Permite ver información de jenkinsfile en un pipeline
```
$ synctl get jenkinsfile --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable') _

pipelineKubernetesJobAzure {
    loggerLevel = "TRACE"
    name = "back-demo-borrar"
... CONTINÚA
```
### Para jobs
Permite ver información de jenkinsfile en un job
```
$ synctl get jenkinsfile --service S-0000000003 --project syndeno-flow --environment flow-hacienda --job flowd-minhacienda
Jenkinsfile is overriddens in job
@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable') _
CONTINÚA...
```
En caso que no este exista el parámetro SYN_JOB_jenkinsfile se obtiene le jenkinsfile desde el pipeline.
```
$ synctl get jenkinsfile --service S-0000000003 --project syndeno-flow --environment flow-hacienda --job flowd-minhacienda
Jenkinsfile is inherited from pipeline
@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable') _
CONTINÚA...
```

## update jenkinsfile
### Para pipelines
Permite actualizar la información de jenkinsfile en un pipeline
Se puede usar con --content flag:
```
$ synctl update jenkinsfile --content "$(echo file)" --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully updated jenkinsfile information in pipeline
```
Se puede usar con --file flag: 
```
$ synctl update jenkinsfile --file "./jenkinsfile.txt" --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully updated jenkinsfile information in pipeline
```
### Para jobs
Permite actualizar la información de jenkinsfile en un job
Se puede usar con --content flag:
```
$ synctl update jenkinsfile --file minhacienda-jenkinsfile --service S-0000000003 --project syndeno-flow --environment flow-hacienda --job flowd-minhacienda
Successfully updated jenkinsfile in job
```

En caso que no este exista el parámetro SYN_JOB_jenkinsfile se creara. Tener en cuenta que la existencia de este 
parámetro deja en desuso la definición del Jenkinsfile en el pipeline (SYN_PARAM_jenkinsfile) para pasar a usar 
esta nueva mientras exista y no se borre.


## get build-method
### Para pipelines
Permite ver información de build-method en un pipeline
```
$ synctl  get build-method --service S-0000000003 --project syndeno-testing --pipeline demo-pipeline-qa
BUILD METHOD  TYPE
kaniko        general
```
### Para jobs
Permite ver información de build-method en un job
```
$ synctl get build-method --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing 
Build method is inherited from pipeline
BUILD METHOD
native
```
```
$ synctl get build-method --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing 
Build method is overridden in job
BUILD METHOD  TYPE
kaniko        general
```

## update build-method
### Para pipelines
Permite actualizar la información de build-method en un pipeline
- Valores posibles de --type: kaniko, native
- Valores posibles de --node-pool (solo para kaniko): general, kaniko, dev, prod
```
$ synctl update build-method --type native --service S-0000000003 --project syndeno-testing --pipeline demo-pipeline-qa
Successfully updated build method information in pipeline
```
```
$ synctl update build-method --type kaniko --node-pool general --service S-0000000003 --project syndeno-testing --pipeline demo-pipeline-qa
Successfully updated build method information in pipeline
```
### Para jobs
Permite actualizar la información de build-method en un job
- Valores posibles de --type: kaniko, native
- Valores posibles de --node-pool (solo para kaniko): general, kaniko, dev, prod
```
$ synctl update build-method --type NATIVE --service S-0000000003 --project syndeno-testing --environment zzz-synctl --job job-demo-1
Successfully updated Build method information in job
```
```
$ synctl update build-method --type kaniko --node-pool general --service S-0000000003 --project syndeno-testing --environment zzz-synctl --job job-demo-1
Successfully updated build method information in job
```

## get commands
### Para pipelines
Permite ver información de commands en un pipeline. 

Se puede usar con estas flags para especificar el comando: prepare-command, post-creation-image-command, post-creation-config-command, post-deploy-command, finish-command)
```
$ synctl get command --prepare-command --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
echo "HOLA"
```
Si no se solicita mediante flags comandos especificos se muestran todos:
```
$ synctl get command --service S-0000000003 --project syndeno-testing --pipeline demo-pipeline-qa
Prepare commands:
echo "HOLA"
Post creation image commands:
echo "1234 creation"    
Post creation config commands:
echo "post config"    
Post deploy commands:
echo "post deploy"    
Finish commands:
echo "finish"    
```
### Para jobs
Permite ver información de commands en un job. 

Se puede usar con estas flags para especificar el comando: prepare-command, post-creation-image-command, post-creation-config-command, post-deploy-command, finish-command)
```
$ synctl  get command --prepare-command --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Commands are overriden in job
echo "testing prepare command for pipeline"
```
Si no se solicita mediante flags comandos especificos se muestran todos:
```
$ synctl  get command --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Commands are overriden in job
Prepare commands:
echo "testing prepare command for job"
Post creation image commands:
-
Post creation config commands:
-
Post deploy commands:
-
Finish commands:
-  
```
```
$ synctl  get command --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Commands are inherited from pipeline
Prepare commands:
echo "testing prepare command for pipeline"
Post creation image commands:
-
Post creation config commands:
-
Post deploy commands:
-
Finish commands:
-
```

## update commands
### Para pipelines
Permite actualizar la información de commands en un pipeline.

Se puede usar con estas flags para especificar el comando a actualizar: prepare-command, post-creation-image-command, post-creation-config-command, post-deploy-command, finish-command

Se puede usar el argumento de tipo string:
```
$ synctl update command "echo \"CHAU\"" --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa --prepare-command
Successfully updated commands in pipeline
```
```
$ synctl update command "$(echo file)" --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa --prepare-command
Successfully updated commands in pipeline
```
Se puede usar con --file flag:
```
$ synctl update command --file "./commands.txt" --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully updated commands in pipeline
```
### Para jobs
Permite actualizar la información de commands en un job.

Se puede usar con estas flags para especificar el comando a actualizar: prepare-command, post-creation-image-command, post-creation-config-command, post-deploy-command, finish-command

Se puede usar el argumento de tipo string:
```
$ synctl update command "echo \"HOLA\"" --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing --prepare-command
Successfully updated commands in job
```
```
$ synctl update command "$(echo file)" --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing --prepare-command
Successfully updated commands in job
```
Se puede usar con --file flag:
```
$ synctl update command --file "./commands.txt" --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Successfully updated commands in job
```

## get domain
Permite obtener el dominio de un entorno.
```
$ synctl get domain --environment env-name --project project-name --service S-0000000003
whatever.domain.com
```

## update domain
Permite actualizar el dominio de un entorno.
```
$ synctl update domain whatever.domain.com --environment env-name --project project-name --service S-0000000003
Successfully updated domain
```

## list file
### Para jobs
Permite listar los archivos de un job
```
$ synctl list file --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
JOB
FILE PATH
./whatever/ejemplo-1.txt
./whatever/ejemplo-33
./whatever/ejemplo-2.txt

INHERITED FROM PIPELINE
FILE PATH
./whatever/ejemplo-6.txt
```

También se puede tener más detalles con -owide:
```
$ synctl list file --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing -owide
JOB
FILE PATH                LANGUAGE  PATH         NAME
./whatever/borrar-1.txt  NONE      ./whatever/  borrar-1.txt
CONTENT
probando 1
2
3
4

FILE PATH             LANGUAGE  PATH         NAME
./whatever/borrar-33  NONE      ./whatever/  borrar-33
CONTENT
prueba 3

FILE PATH                LANGUAGE  PATH         NAME
./whatever/borrar-2.txt  NONE      ./whatever/  borrar-2.txt
CONTENT
probando 2

INHERITED FROM PIPELINE
FILE PATH                LANGUAGE  PATH         NAME
./whatever/borrar-6.txt  NONE      ./whatever/  borrar-6.txt
CONTENT
borrar 6
```

### Para pipelines
Permite listar los archivos de un job
```
$ synctl list file --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa --account A-0000000003
PIPELINE
FILE PATH
./test-FILE.txt
./whatever/borrar-file-2.txt
```

También se puede tener más detalles con -owide:
```
$ synctl list file --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa -owide
PIPELINE
FILE PATH       LANGUAGE  PATH  NAME
./folder-1      NONE      ./    empty-file
CONTENT


FILE PATH          LANGUAGE  PATH  NAME
./test-borrar.txt  NONE      ./    test-borrar.txt
CONTENT
111111111111111
2222222222222

4444444444444

FILE PATH                     LANGUAGE  PATH         NAME
./whatever/borrar-file-2.txt  NONE      ./whatever/  borrar-file-2.txt
CONTENT
probando 1
2
3
4
5
6
7
8
```

## get file
### Para jobs
Permite ver el contenido de un archivo de un job
```
$ synctl get file ./whatever/borrar-1.txt --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
JOB
FILE PATH                LANGUAGE  PATH         NAME
./whatever/borrar-1.txt  NONE      ./whatever/  borrar-1.txt
CONTENT
probando 1
```

### Para pipelines
Permite ver el contenido de un archivo de un job
```
$ synctl get file ./1-2-3.txt --service S-0000000003 --project syndeno-testing --pipeline demo-pipeline-qa
PIPELINE
FILE PATH     LANGUAGE  PATH  NAME
./1-2-3.txt   NONE      ./    dockerfile
CONTENT
1 2 3
123
1-2-3
```

## create file
### Para jobs
Permite crear un archivo de job. 

- file ['SOURCE_FILE_LOCATION'] --file-path FILE_PATH_VALUE --file-name FILE_NAME_VALUE --environment ENVIRONMENT_NAME --job JOB_NAME [OTHER_FLAGS]
- file ['SOURCE_FILE_LOCATION'] --full-path FULL_PATH_VALUE --environment ENVIRONMENT_NAME --job JOB_NAME [OTHER_FLAGS]

```
$ synctl create file ./archivo-borrar-1.txt --file-path ./whatever/ --file-name test-file.txt --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Successfully created file in job: ./whatever/test-file.txt
```

### Para pipelines
Permite crear un archivo de job. 

- file ['SOURCE_FILE_LOCATION'] --file-path FILE_PATH_VALUE --file-name FILE_NAME_VALUE --pipeline PIPELINE_NAME [OTHER_FLAGS]
- file ['SOURCE_FILE_LOCATION'] --full-path FULL_PATH_VALUE --pipeline PIPELINE_NAME [OTHER_FLAGS]

```
$ synctl create file ./archivo-borrar-1.txt --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa --full-path whatever/borrar-file-2.txt --account A-0000000003
Successfully created file in pipeline: ./whatever/borrar-file-2.txt
```

## delete file
### Para jobs
Permite eliminar un archivo de job.

```
$ synctl delete file --file-path ./ --file-name borrar-file.txt --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Successfully deleted file in job: ./borrar-file.txt
```
### Para pipelines
Permite eliminar un archivo de job.

```
$ synctl delete file --file-path ./ --file-name borrar-file.txt --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa
Successfully deleted file in pipeline: ./borrar-file.txt
```
Con --full-path.
```
$ synctl delete file --service S-0000000003 --project syndeno-testing --pipeline pipeline-qa --full-path "./whatever/borrar-file-2.txt"
Successfully deleted file in pipeline: ./whatever/borrar-file-2.txt
```

## update file
### Para jobs
Permite actualizar un archivo de job. 

```
$ synctl update file ./archivo-test-1.txt --file-path ./ --file-name test-file.txt --service S-0000000003 --project syndeno-testing --environment zzz-test --job job-para-testing
Successfully updated file in job: ./test-file.txt
```
### Para pipelines
Permite actualizar un archivo de job. 

```
$ synctl update file ./archivo-test-1.txt --full-path ./folder/example-1.txt --service S-0000000003 --project synctl-e2e-proj-a340 --pipeline synctl-e2e-pipe-a340
Successfully updated file in pipeline: ./folder/example-1.txt
```

## version

Permite obtener la version del programa.
```
$ synctl --version
synctl version v7.2.3 linux/amd64
```