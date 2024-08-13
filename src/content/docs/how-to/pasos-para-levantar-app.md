---
title: Pasos para levantar una aplicación
---

En este apartado veremos como levantar una aplicación desde cero en la Syndeno Platform:

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

[captura creando nuevo proyecto]: #

2. Dentro de nuestro *nuevo-proyecto* crearemos el o los entornos en los cuales estará levantada nuestra aplicación:

[captura creando nuevo entorno]: #

3. Ahora que ya tenemos un proyecto y un entorno procederemos a crear un pipeline. Un pipeline es un template con toda la configuración de nuestra aplicación. Podremos crear aplicaciones a partir de él en cualquier entorno perteneciente al proyecto:

[captura creando un pipeline]: #

## Configurar el Pipeline
1. Lo primero es agregar la URL del repositorio de Git donde tenemos la aplicación. Para esto recordar generar un token con permisos y ponerlo en la URL:

[captura del apartado GIT del Pipeline]: #

2. El segundo paso es agregar una JenkinsFile. En esta estarán definidos todos los recursos que deberá crear la aplicación, algunas variables y configuraciones:

[captura del apartado JenkinsFile agregando el Jenkinsfile]: #

3. Aquí una JenkinsFile de un backend con node.js básico de ejemplo:

[código de JenkinsFile de node.js]: #

## Cargar Variables de entorno en el Pipeline
En caso de haberlas, es conveniente cargar variables de entorno para la aplicación aquí desde su pipeline para luego heredarlas y darles valor según el entorno:

[captura de variable para Job]: #

De la misma manera, podemos hacerlo con Archivos que queremos agregar a nuestra aplicación:

[captura del raw donde se le pasan las variables]: #

## Ejecutar Comandos durante el despliegue
En caso de querer ejecutar comandos en distintas etapas del despliegue de la aplicación también podemos configurarlos:

[captura pestaña comandos del pipeline]: #

## Configuración del Dominio
Con nuestro pipeline ya configurado, procederemos a nuestro entorno y configuremos el dominio donde debe levantarse nuestra aplicación:

[captura de pestaña configuración para el dominio]: #

## Crear Aplicación dentro del entorno
Una vez configurado el dominio ya podemos crear la aplicación en el entorno:
1. Primero la agregamos a la tabla de aplicaciones con "Crear job":

[captura creando job]: #

2. Luego la seleccionamos y le damos a crear: 

[captura seleccionando crear job]: #

3. Ya podemos visualizar la aplicación creada en la tabla e ingresar en ella:

[captura cuando el job ya este creado]: #

## Ver estado del Job
Una vez dentro de la aplicación podremos ver sus últimas ejecuciones, configurar las variables heredadas, visualizar archivos heredados, modificar JenkinsFile heredada, cambiar la rama o el repo de Git y ejecutar nuestra aplicación:

[captura de las ejecución del job]: #