---
title: Configuración del Pipeline
tableOfContents: false
---

Ubicados en la sección **Pipelines** buscamos el pipeline que hemos creado en el apartado ***"Crear un proyecto"***, en este caso se llama ***nuevo-pipeline***:

Debemos agregar la URL del repositorio de Git donde tenemos la aplicación. Para esto **recordar generar un token con permisos** y ponerlo en la URL:

<a href="/src/content/docs/img/how-to/pasos-para-levantar-app/conf-pipeline/repo-git-antes.png" target="_blank">
    <img src="/src/content/docs/img/how-to/pasos-para-levantar-app/conf-pipeline/repo-git-antes.png" alt="git antes">
</a>

<a href="/src/content/docs/img/how-to/pasos-para-levantar-app/conf-pipeline/repo-git-despues.png" target="_blank">
    <img src="/src/content/docs/img/how-to/pasos-para-levantar-app/conf-pipeline/repo-git-despues.png" alt="git despues">
</a>

<details hidden>
2. El segundo paso es agregar un JenkinsFile. En esta estarán definidos todos los recursos que deberá crear la aplicación, algunas variables y configuraciones:
[![jenkinsfile](/src/content/docs/img/how-to/pasos-para-levantar-app/conf-pipeline/jenkinsfile.png "jenkinsfile")](/src/content/docs/img/how-to/pasos-para-levantar-app/conf-pipeline/jenkinsfile.png)

Aquí hay un JenkinsFile de un backend con node.js básico de ejemplo:
```groovy
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
</details>














