@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable') _

pipelineKubernetesJobGoogle {
    name = "syndeno-wiki"

    pipelineParameters = []

    buildEnvironment = {}

    build = [
        newKubernetesBuild {
            name = "syndeno-wiki"
            srcPath = "."

            prepareCommands = """
            """.stripIndent()

            def namespace = this.params.SYN_ENVIRONMENT_name
            def imageName = this.params.GCP_container_registry + '/' + this.params.GCP_container_registry_folder + '/' + 'syndeno-wiki-' + namespace
            def fqdn = "docs.syndeno.cloud"

            images = [
                [
                    name: 'syndeno-wiki',
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
                    name: "syndeno-wiki",
                    namespace: namespace,
                    replicas: 1,
                    containers: [
                        [
                            name: 'syndeno-wiki',
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
                    name: "wiki-ingress",
                    namespace: namespace,
                    cert_issuer: 'syndeno-issuer',
                    ingressClass: 'nginx',
                    tls: fqdn,
                    rules: [
                        [
                            host: fqdn,
                            path: "/",
                            serviceName: "syndeno-wiki-np",
                            servicePort: 80
                        ]
                    ]
                ]
            ]

            nodePorts = [
                [
                    name: "syndeno-wiki-np",
                    namespace: namespace,
                    port: 80,
                    targetPort: 80,
                    selector: 'syndeno-wiki'
                ]
            ]
        }
    ]
}