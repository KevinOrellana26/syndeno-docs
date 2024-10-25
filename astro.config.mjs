import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config - 
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			favicon: '/favicon.ico', //LOGO PESTAÑA
			//Configurar idioma español por defecto
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Spanish',
					lang: 'es',
				},
			},
			customCss: [
				"./src/styles/custom.css",
			],
			social: {
				linkedin: "https://www.linkedin.com/company/syndeno",
			},
			logo: {
				light: '/src/assets/logo-navbar-dark.png',
				dark: '/src/assets/logo-navbar-light.png',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: "Empezar 🚀",
					link: 'https://syndeno.cloud/sign-in',
					attrs: {target: '_blank'},
				},
				{
					label: "Primeros Pasos",
					collapsed: false,
					items: [
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
							collapsed: false,
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
											label: "Nodes",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/nodes",
										},
										{
											label: "Namespaces",
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/namespaces",
										},
										{
											label: "Workloads",
											badge: { text: 'Nuevo', variant: 'note'},
											slug: "getting-started/syndeno-ecosystem/kubernetes-doc/workloads",
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
					collapsed: false,
					//autogenerate: { directory: 'reference' },
					items: [
						{
							label: "Iniciar sesión",
							badge: { text: 'Nuevo', variant: 'note'},
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
								"¿Cómo acceder a los logs?",
							slug: "faq/acceso-logs",
						},
						{
							label: 
								"¿Cómo renovar los certificados?",
							slug: "faq/renovar-certificados",
						},
						{
							label: 
								"¿Cómo configurar un dominio desde la plataforma?",
							slug: "faq/configurar-dominio",
						},
						{
							label: 
								"¿Es posible añadir más de un hostname para una aplicación?",
							slug: "faq/añadir-hostname",
						},
						{
							label: 
								"¿Se puede actualizar el Dockerfile desde la plataforma?",
							slug: "faq/actualizar-dockerfile",
						},
						{
							label: 
								"¿Qué diferencias hay entre las bases de datos de dev y prod?",
							slug: "faq/dif-dev-prod-bbdd",
						},
						{
							label: 
								"¿Puedo configurar comandos personalizados en el despliegue?",
							slug: "faq/configurar-comandos",
						},
						{
							label: 
								"¿Puedo crear archivos desde la plataforma?",
							slug: "faq/archivo-comando-despliegue",
						},
					],
				},			
				{
					label: "Errores comunes",
					collapsed: true,
					items: [
						{
							label:
								"Error al Desplegar Aplicaciones",
							slug: "common-errors/error-desplegar-apps",
						},
						{
							label:
								"Error 502 en mi aplicación",
							slug: "common-errors/error-502-app",
						},
						{
							label:
								"Error 503 en mi aplicación",
							slug: "common-errors/error-503-app",
						},
						{
							label:
								"¿Qué hacer cuando falla un Pipeline?",
							slug: "common-errors/error-falla-pipeline",
						},
					],
				},
			],
		}),
	],
});
