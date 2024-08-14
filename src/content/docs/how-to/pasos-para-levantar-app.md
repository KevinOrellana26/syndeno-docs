---
title: Pasos para levantar una aplicación
---

En este apartado se describe el proceso para levantar una aplicación desde cero en la Syndeno Platform. 
Comienza con la creación de un proyecto y sus entornos asociados, seguidos de la configuración de un Pipeline. El Pipeline, que incluye la URL del Repositorio de Git y un JenkinsFile, define los recursos y configuraciones necesarios para la aplicación. También se explica cómo cargar variables de entorno y archivos en el Pipeline, configurar el dominio de la aplicación, y finalmente, crear y desplegar la aplicación dentro del entorno. Además, se detalla cómo ver el estado del Job y realizar ajustes posteriores en la aplicación.

<style>
 /*cambiar el color de los enlaces
 */
a {
    color: black; /* Set the color to black */
    text-decoration: none; /* Remove underline */
}
</style>

1. 🚀 [**Crear un proyecto**](#crear-un-proyecto)
2. 🛠️ [**Configurar el Pipeline**](#configurar-el-pipeline)
3. 🌍 [**Cargar Variables de entorno en el Pipeline**](#cargar-variables-de-entorno-en-el-pipeline)
4. ⚙️ [**Ejecutar Comandos durante el despliegue**](#ejecutar-comandos-durante-el-despliegue)
5. 🌐 [**Configuración del Dominio**](#configuración-del-dominio)
6. 🏗️ [**Crear Aplicación dentro del entorno**](#crear-aplicación-dentro-del-entorno)
7. 📊 [**Ver estado del Job**](#ver-estado-del-job)

## Crear un proyecto
1. Primero debemos crear un proyecto, el cual contendrá el entorno donde levantaremos nuestra aplicación. Para esto iremos a la sección de proyectos y escogeremos un nombre:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/crear-proyecto.png">
    <img src="/src/content/docs/img/levantar-app/crear-proyecto.png" alt="crear proyecto" title="crear proyecto" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Crear proyecto</em></p>
</div>

2. Dentro de nuestro *nuevo-proyecto* crearemos el o los entornos en los cuales estará levantada nuestra aplicación:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/crear-entorno.png">
    <img src="/src/content/docs/img/levantar-app/crear-entorno.png" alt="crear entorno" title="crear entorno" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Crear Entorno</em></p>
</div>

3. Ahora que ya tenemos un proyecto y un entorno procederemos a crear un pipeline. Un pipeline es un template con toda la configuración de nuestra aplicación. Podremos crear aplicaciones a partir de él en cualquier entorno perteneciente al proyecto:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/crear-pipeline.png">
    <img src="/src/content/docs/img/levantar-app/crear-pipeline.png" alt="crear pipeline" title="crear pipeline" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Crear Pipeline</em></p>
</div>

## Configurar el Pipeline
1. Lo primero es agregar la URL del repositorio de Git donde tenemos la aplicación. Para esto recordar generar un token con permisos y ponerlo en la URL:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/url-git.png">
    <img src="/src/content/docs/img/levantar-app/url-git.png" alt="añadiendo repositorio" title="añadiendo repositorio" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Añadiendo URL de Git</em></p>
</div>

2. El segundo paso es agregar una JenkinsFile. En esta estarán definidos todos los recursos que deberá crear la aplicación, algunas variables y configuraciones:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/jenkinsfile.png">
    <img src="/src/content/docs/img/levantar-app/jenkinsfile.png" alt="añadiendo jenkinsfile" title="añadiendo jenkinsfile" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Añadiendo JenkinsFile</em></p>
</div>

3. Aquí una JenkinsFile de un backend con node.js básico de ejemplo:
```
@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable')
import com.syndeno.*
import java.lang.Object

pipelineKubernetesJobGoogle {
    loggerLevel = "TRACE"
    name = "back"
    stateBucketName = "syndeno-gke-${this.params.SYN_SERVICE_KUBERNETES_cluster_name}-${this.params.SYN_ENVIRONMENT_name}-" + name
    
    pipelineParameters = []
    
    buildEnvironment = { }
    
    build = [
        newKubernetesBuild {
            name = "back"
            srcPath = "."
            prepareCommands = """
            """.stripIndent()
            
            def namespace = this.params.SYN_ENVIRONMENT_name
            def imageName = this.params.SYN_ENVIRONMENT_name ? "eu.gcr.io/syndeno/back-${this.params.SYN_ENVIRONMENT_name}" : ''
            def fqdn = this.params.SYN_ENVIRONMENT_domain ? "api.${this.params.SYN_ENVIRONMENT_domain}" : ''
            
            images = [
                [
                    name: 'back',
                    image: imageName,
                    basePath: 'qa-back',
                    tags: 'latest',
                    dockerfile: [
                        type: "FILE",
                        filePath: "Dockerfile"
                    ]
                ]
            ]
            
            deployments = [
                [
                    name: "back",
                    namespace: namespace,
                    replicas: 1,
                    containers: [
                        [
                            name: 'back',
                            imageName: imageName,
                            imageTag: "latest",
                            probePort: 3000,
                            resources: [
                                requests: [
                                    enabled: true,
                                    cpu: "10m",
                                    memory: "10M"
                                ],
                                limits: [
                                    enabled: false,
                                    cpu: "800m",
                                    memory: "1G"
                                ]
                            ]
                        ]
                    ]
                ]
            ]
            
            ingresses = [
                [
                    name: "back-ingress",
                    namespace: namespace,
                    cert_issuer: 'syndeno-issuer',
                    ingressClass: 'nginx',
                    tls: fqdn,
                    rules: [
                        [
                            host: fqdn,
                            path: "/",
                            serviceName: "back-np",
                            servicePort: 80
                        ]
                    ]
                ]
            ]
            
            nodePorts = [
                [
                    name: "back-np",
                    namespace: namespace,
                    port: 80,
                    targetPort: 3000,
                    selector: 'back'
                ]
            ]
        }
    ]
}
```

## Cargar Variables de entorno en el Pipeline
En caso de haberlas, es conveniente cargar variables de entorno para la aplicación aquí desde su pipeline para luego heredarlas y darles valor según el entorno:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/var-job.png">
    <img src="/src/content/docs/img/levantar-app/var-job.png" alt="variables de entorno" title="variables de entorno" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Añadiendo variables de entorno</em></p>
</div>

De la misma manera, podemos hacerlo con Archivos que queremos agregar a nuestra aplicación:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/var-from-files.png">
    <img src="/src/content/docs/img/levantar-app/var-from-files.png" alt="variables de entorno desde archivo" title="variables de entorno desde archivo" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Añadiendo variables de entorno desde un archivo</em></p>
</div>

## Ejecutar Comandos durante el despliegue
En caso de querer ejecutar comandos en distintas etapas del despliegue de la aplicación también podemos configurarlos:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/comandos.png">
    <img src="/src/content/docs/img/levantar-app/comandos.png" alt="ejecutar comandos" title="ejecutar comandos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Ejecutar comandos</em></p>
</div>

## Configuración del Dominio
Con nuestro pipeline ya configurado, procederemos a nuestro entorno y configuremos el dominio donde debe levantarse nuestra aplicación:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/dominio.png">
    <img src="/src/content/docs/img/levantar-app/dominio.png" alt="dominio" title="dominio" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Agregando dominio</em></p>
</div>

## Crear Aplicación dentro del entorno
Una vez configurado el dominio ya podemos crear la aplicación en el entorno:
1. Primero la agregamos a la tabla de aplicaciones con "Crear job":
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/nuevo-job.png">
    <img src="/src/content/docs/img/levantar-app/nuevo-job.png" alt="job" title="job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Nuevo job</em></p>
</div>

2. Luego la seleccionamos y le damos a crear: 
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/crear-job.png">
    <img src="/src/content/docs/img/levantar-app/crear-job.png" alt="job" title="job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Creando job</em></p>
</div>

3. Ya podemos visualizar la aplicación creada en la tabla e ingresar en ella:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/visualizar-app.png">
    <img src="/src/content/docs/img/levantar-app/visualizar-app.png" alt="visualizar app" title="visualizar app" style="max-width: 100%; height: auto;">
  </a>
</div>

## Ver estado del Job
Una vez dentro de la aplicación podremos ver sus últimas ejecuciones, configurar las variables heredadas, visualizar archivos heredados, modificar JenkinsFile heredada, cambiar la rama o el repo de Git y ejecutar nuestra aplicación:
<div style="text-align: center;">
  <a href="/src/content/docs/img/levantar-app/ejecucion-job.png">
    <img src="/src/content/docs/img/levantar-app/ejecucion-job.png" alt="ejecucion del job" title="ejecucion del job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Ejecución del Job</em></p>
</div>