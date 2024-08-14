@org.jenkinsci.plugins.workflow.libs.Library('syndeno-lib@v5-stable') _

pipelineKubernetesJobGoogle {
    name = "syndeno-wiki"
    stateBucketName = "syndeno-gke-${this.params.GENERAL_cluster_name}-${this.params.GENERAL_namespace}-syndeno-wiki"

    pipelineParameters = []

    buildEnvironment = {}

    build = [
        newKubernetesBuild {
            name = "syndeno-wiki"
            srcPath = "."

            prepareCommands = """
            """.stripIndent()

            def namespace = this.params.GENERAL_namespace
            def imageName = this.params.GCP_container_registry + '/' + this.params.GCP_container_registry_folder + '/' + 'syndeno-wiki-' + namespace
            def fqdn = "docs." + this.params.GENERAL_domain

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
                                    cpu: "100m",
                                    memory: "300M"
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