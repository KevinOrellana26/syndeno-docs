@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable') _

pipelineKubernetesJobAzure {
    name = "syndeno-docs"

    pipelineParameters = []

    buildEnvironment = {}

    build = [
        newKubernetesBuild {
            name = "syndeno-docs"
            srcPath = "."

            prepareCommands = """
            """.stripIndent()

            def namespace = this.params.SYN_ENVIRONMENT_name
            def imageName = this.params.SYN_ENVIRONMENT_name ? "${this.params.SYN_AZURE_container_registry}.azurecr.io/syndeno-docs-${this.params.SYN_ENVIRONMENT_name}"
            def fqdn = "docs.syndeno.cloud"

            images = [
                [
                    name: 'syndeno-docs',
                    image: imageName,
                    basePath: '.',
                    tags: 'latest',
                    dockerfile: [
                        type: "FILE",
                        filePath: "Dockerfile"
                    ]
                ]
            ]

            deployments = [
                [
                    name: "syndeno-docs",
                    namespace: namespace,
                    replicas: 1,
                    containers: [
                        [
                            name: 'syndeno-docs',
                            imageName: imageName,
                            imageTag: "latest",
                            probePort: 80,
                            env: [:],
                            resources: [
                                requests: [
                                    enabled: true,
                                    cpu: "10m",
                                    memory: "30M"
                                ],
                                limits: [
                                    enabled: false,
                                    cpu: "100m",
                                    memory: "256M"
                                ]
                            ]
                        ]
                    ]
                ]
            ]

            ingresses = [
                [
                    name: "syndeno-docs-ingress",
                    namespace: namespace,
                    cert_issuer: 'syndeno-issuer',
                    ingressClass: 'nginx',
                    tls: fqdn,
                    rules: [
                        [
                            host: fqdn,
                            path: "/",
                            serviceName: "syndeno-docs-np",
                            servicePort: 80
                        ]
                    ]
                ]
            ]

            nodePorts = [
                [
                    name: "syndeno-docs-np",
                    namespace: namespace,
                    port: 80,
                    targetPort: 80,
                    selector: 'syndeno-docs'
                ]
            ]
        }
    ]
}