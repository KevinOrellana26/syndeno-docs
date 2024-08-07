import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Syndeno Docs',
			social: {
				github: 'https://github.com/syndeno',
				linkedin: 'https://www.linkedin.com/company/syndeno',
				'x.com': 'https://twitter.com/syndeno',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Syndeno Platform', slug: 'getting-started/syndeno-platform' },
						{ label: '¿Cómo funciona Syndeno?', slug: 'getting-started/how-to-work-syndeno' },
						{ label: 'Interfaz web', slug: 'getting-started/web-interface' },
						{
							label: 'Kubernetes',
							items: [
								{ label: 'Dashboard', slug: 'getting-started/k8s-doc/dashboard' },
								{ label: 'Namespaces', slug: 'getting-started/k8s-doc/namespaces' },
								{ label: 'Nodes', slug: 'getting-started/k8s-doc/nodes' },
								{ label: 'Logs', slug: 'getting-started/k8s-doc/logs' },
								{ label: 'Shell', slug: 'getting-started/k8s-doc/shell' },
							]
						},
						{
							label: 'DevOps',
							items: [
								{ label: 'Proyectos', slug: 'getting-started/devops/proyecto' },
								{ label: 'Entornos', slug: 'getting-started/devops/entorno' },
								{ label: 'Pipelines', slug: 'getting-started/devops/pipeline' },
								{ label: 'Jobs', slug: 'getting-started/devops/job' },
							]
						}
					],
				},
				{
					label: 'How To',
					//autogenerate: { directory: 'reference' },
					items: [
						{
							label: 'Login and Sign Up',
							items: [ 
								{ label: 'Login and Sign Up', slug: 'how-to/login-and-signup/login-and-signup' },
							]
						},
						{
							label: 'Logs de un contenedor',
							items: [ 
								{ label: 'Ver logs de un pod con un único contenedor', slug: 'how-to/logs-de-un-contenedor/ver-logs-pod-unico-contenedor' },
								{ label: 'Ver logs de un pod con más de un contenedor', slug: 'how-to/logs-de-un-contenedor/ver-logs-pod-con-mas-contenedor' },
							]
						},		
						{
							label: 'Shell de un contenedor',
							items: [
								{ label: 'Abrir shell para pods con un contenedor', slug: 'how-to/shell-de-un-contenedor/abrir-shell-de-pod-con-un-contenedor' },
								{ label: 'Abrir shell para pods con más de un contenedor', slug: 'how-to/shell-de-un-contenedor/abrir-shell-de-pod-con-mas-contenedor'},
							]
						},
						{
						    label: 'Pasos para levantar una aplicación',
							items: [
								{ label: 'Crear proyecto', slug: 'how-to/pasos-para-levantar-una-aplicacion/crear-proyecto' },
								{ label: 'Configurar pipeline', slug: 'how-to/pasos-para-levantar-una-aplicacion/configurar-pipeline' },
								{ label: 'Cargar variables de entorno en el Pipeline', slug: 'how-to/pasos-para-levantar-una-aplicacion/cargar-variable-en-pipeline' },
								{ label: 'Ejecutar comandos durante el despliegue', slug: 'how-to/pasos-para-levantar-una-aplicacion/ejecutar-comandos-durante-despliegue' },
								{ label: 'Configuración del dominio', slug: 'how-to/pasos-para-levantar-una-aplicacion/configuracion-dominio' },
								{ label: 'Crear aplicación dentro del entorno', slug: 'how-to/pasos-para-levantar-una-aplicacion/crear-aplicacion-dentro-del-entorno' },
								{ label: 'Ver estado del Job', slug: 'how-to/pasos-para-levantar-una-aplicacion/ver-estado-job' },
							]
						},	
					],
				},
				{
					label: 'Preguntas frecuentes',
					items: [ 
						{ label: '¿Cómo actualizar de versión de un lenguaje de programación?', slug: 'faq/actualizar-version-lenguaje-programacion' },
					],
				},
				{
					label: 'Errores comunes',
					items: [ 
						{ label: 'Diferenciar entre Local Dev y Prod al momento de hacer un test sobre una BBDD', slug: 'common-errors/diferenciar-local-dev-prod-bbdd' },
					],
				},
			],
		}),
	],
});
