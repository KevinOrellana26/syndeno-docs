import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.ico', // LOGO PARA QUE SE VEA EN LA PESTAÑA /public/favicon.ico
			title: "Syndeno Docs",
			social: {
				github: "https://github.com/syndeno",
				linkedin: "https://www.linkedin.com/company/syndeno",
				"x.com": "https://twitter.com/syndeno",
			},
			logo: {
				src: './src/assets/logo-text.svg', //PEDIRLE A AIRAM QUE ME PASE UN LOGO DE SYNDENO
				replacesTitle: true,
			},
			sidebar: [
				{
					label: "Primeros Pasos",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "Syndeno Platform",
							slug: "getting-started/syndeno-platform",
						},
						{
							label: "¿Cómo funciona Syndeno?",
							slug: "getting-started/how-to-work-syndeno",
						},
						{ label: "Interfaz web", slug: "getting-started/web-interface" },
						{
							label: "Ecosistema Syndeno",
							collapsed: true,
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
							label: "Login and Sign Up",
							collapsed: true,
							items: [
								{
									label: "Login and Sign Up",
									slug: "how-to/login-and-signup/login-and-signup",
								},
							],
						},
						{
							label: "Logs de un contenedor",
							collapsed: true,
							items: [
								{
									label: "Ver logs de un pod con un único contenedor",
									slug: "how-to/logs-de-un-contenedor/ver-logs-pod-unico-contenedor",
								},
								{
									label: "Ver logs de un pod con más de un contenedor",
									slug: "how-to/logs-de-un-contenedor/ver-logs-pod-con-mas-contenedor",
								},
							],
						},
						{
							label: "Shell de un contenedor",
							collapsed: true,
							items: [
								{
									label: "Abrir shell para pods con un contenedor",
									slug: "how-to/shell-de-un-contenedor/abrir-shell-de-pod-con-un-contenedor",
								},
								{
									label: "Abrir shell para pods con más de un contenedor",
									slug: "how-to/shell-de-un-contenedor/abrir-shell-de-pod-con-mas-contenedor",
								},
							],
						},
						{
							label: "Pasos para levantar una aplicación",
							collapsed: true,
							items: [
								{
									label: "Pasos para levantar una Aplicación",
									slug: "how-to/pasos-para-levantar-una-aplicacion/pasos-para-levantar-app",
								},
								{
									label: "Crear un proyecto",
									slug: "how-to/pasos-para-levantar-una-aplicacion/crear-proyecto",
								},
								{
									label: "Configurar pipeline",
									slug: "how-to/pasos-para-levantar-una-aplicacion/configurar-pipeline",
								},
								{
									label: "Cargar variables de entorno en el Pipeline",
									slug: "how-to/pasos-para-levantar-una-aplicacion/cargar-variable-en-pipeline",
								},
								{
									label: "Ejecutar comandos durante el despliegue",
									slug: "how-to/pasos-para-levantar-una-aplicacion/ejecutar-comandos-durante-despliegue",
								},
								{
									label: "Configuración del dominio",
									slug: "how-to/pasos-para-levantar-una-aplicacion/configuracion-dominio",
								},
								{
									label: "Crear aplicación dentro del entorno",
									slug: "how-to/pasos-para-levantar-una-aplicacion/crear-aplicacion-dentro-del-entorno",
								},
								{
									label: "Ver estado del Job",
									slug: "how-to/pasos-para-levantar-una-aplicacion/ver-estado-job",
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
