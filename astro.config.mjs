import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	i18n: {  //idiomas
		defaultLocale: "es",
		locales: ["es"],
	},
	integrations: [
		starlight({
			favicon: '/favicon.ico', //LOGO PESTAÑA
			title: "Syndeno Docs",
			customCss: [
				"./src/styles/custom.css",
			],
			social: {
				github: "https://github.com/syndeno",
				linkedin: "https://www.linkedin.com/company/syndeno",
				"x.com": "https://twitter.com/syndeno",
			},
			logo: {
				light: '/src/assets/logo-navbar-dark.png',
				dark: '/src/assets/logo-navbar-light.png',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: "Primeros Pasos",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Introducción a Syndeno Platform",
							slug: "getting-started/syndeno-platform",
						},
						{
							label: "Funcionamiento de Syndeno",
							slug: "getting-started/how-to-work-syndeno",
						},
						{ label: "Interfaz web de Syndeno", slug: "getting-started/web-interface" },
						{
							label: "Ecosistema Syndeno",
							items: [
								{
									label: "Kubernetes",
									collapsed: true,
									items: [
										{
											label: "Dashboard",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/dashboard",
										},
										{
											label: "Namespaces",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/namespaces",
										},
										{
											label: "Nodes",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/nodes",
										},
										{
											label: "Logs",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/logs",
										},
										{
											label: "Shell",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/shell",
										},
									],
								},
								{
									label: "DevOps",
									collapsed: true,
									items: [
										{
											label: "Proyectos",
											slug: "getting-started/syndeno-ecosystem/devops/proyecto",
										},
										{
											label: "Entornos",
											slug: "getting-started/syndeno-ecosystem/devops/entorno",
										},
										{
											label: "Pipelines",
											slug: "getting-started/syndeno-ecosystem/devops/pipeline",
										},
										{
											label: "Jobs",
											slug: "getting-started/syndeno-ecosystem/devops/job",
										},
									],
								},
							],
						},
					],
				},
				{
					label: "Cómo Hacer",
					collapsed: true,
					//autogenerate: { directory: 'reference' },
					items: [
						{
							label: "Iniciar sesión",
							slug: "how-to/login-and-signup/login-and-signup",
						},
						{
							label: "Visualizar Logs",
							collapsed: true,
							items: [
								{
									label: "Pod con un único contenedor",
									slug: "how-to/visualizar-logs/pod-unico-contenedor",
								},
								{
									label: "Pod con múltiples contenedores",
									slug: "how-to/visualizar-logs/pod-con-mas-contenedor",
								},
							],
						},
						{
							label: "Acceder a la Shell",
							collapsed: true,
							items: [
								{
									label: "Pod con un único contenedor",
									slug: "how-to/shell-de-un-contenedor/pod-con-un-contenedor",
								},
								{
									label: "Pod con más de un contenedor",
									slug: "how-to/shell-de-un-contenedor/pod-con-mas-contenedor",
								},
							],
						},
						{
							label: "Desplegar una Aplicación",
							collapsed: true,
							items: [
								{
									label: "Creación de proyecto",
									slug: "how-to/pasos-para-levantar-app/crear-proyecto",
								},
								{
									label: "Configuración del Pipeline",
									slug: "how-to/pasos-para-levantar-app/conf-pipeline",
								},
								{
									label: "Variables de entorno en el Pipeline",
									slug: "how-to/pasos-para-levantar-app/cargar-var-entorno-pipeline",
								},
								{
									label: "Comandos en despliegue",
									slug: "how-to/pasos-para-levantar-app/ejecutar-cmds-despliegue",
								},
								{
									label: "Configuración de dominio",
									slug: "how-to/pasos-para-levantar-app/conf-dominio",
								},
								{
									label: "Creación de aplicación",
									slug: "how-to/pasos-para-levantar-app/crear-app-dentro-entorno",
								},
								{
									label: "Estado del job",
									slug: "how-to/pasos-para-levantar-app/ver-estado-job",
								},
							],
						},
					],
				},
				{
					label: "Preguntas frecuentes",
					collapsed: true,
					items: [
						{
							label:
								"¿Cómo actualizar de versión de un lenguaje de programación?",
							slug: "faq/actualizar-version-lenguaje-programacion",
						},
					],
				},
				{
					label: "Errores comunes",
					collapsed: true,
					items: [
						{
							label:
								"Diferenciar entre Local Dev y Prod al momento de hacer un test sobre una BBDD",
							slug: "common-errors/diferenciar-local-dev-prod-bbdd",
						},
					],
				},
			],
		}),
	],
});
