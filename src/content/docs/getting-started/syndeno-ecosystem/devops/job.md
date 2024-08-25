---
title: Jobs
---

Esta guía proporciona instrucciones detalladas sobre la gestión de variables de entorno, archivos, y el despliegue de *Jobs* en desde Syndeno Platform. Se explica cómo agregar y configurar variables de entorno tanto a nivel de *Pipeline* como en un *Job* específico. Además, se describe el proceso para incorporar archivos necesarios en el contenedor de un *Job*, ya sea desde el *Pipeline* o directamente dentro del *Job*. Por último, la guía detalla cómo desplegar un *Job*, resaltando las diversas opciones disponibles, tanto desde el entorno como desde el *Job* individual, incluyendo la capacidad de ejecutar múltiples *Jobs* simultáneamente. 

## Variables de Entorno
Las variables de entorno pueden ser añadidas a un *Job* o una aplicacicación de dos maneras: directamente desde el *Pipeline* utilizado para su creación, o configurándolas específicamente dentro del *Job* en cuestión.

### En el Pipeline
Para agregar variables de entorno desde el *Pipeline*, navega a la sección de **Proyectos** y selecciona el proyecto que contiene el *Pipeline* correspondiente.

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/proyectos.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/proyectos.png" alt="proyectos" style="max-width: 100%; height: auto;">
    </a>
</div>

A continuación, selecciona el *Pipeline* correspondiente dentro del proyecto:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/pipeline.png" alt="pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

Una vez dentro del *Pipeline*, podrás crear y configurar variables para el job que serán heredadas por los *Jobs* creados a partir de ese *Pipeline*:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/var-job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/var-job.png" alt="variables-job" style="max-width: 100%; height: auto;">
    </a>
</div>

Alternativamente, puedes realizar el mismo proceso utilizando el atajo en el **sidebar**, navegando directamente al *Pipeline* para acceder rápidamente a la configuración de variables.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-pipeline.png" alt="sidebar-pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-pipeline-var-job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-pipeline-var-job.png" alt="sidebar-pipeline-var-job" style="max-width: 100%; height: auto;">
    </a>
</div>


Finalmente, puedes navegar a los *Jobs* en los que deseas asignar valores a estas variables desde la pestaña **"Jobs"**:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/jobs.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/jobs.png" alt="jobs" style="max-width: 100%; height: auto;">
    </a>
</div>

Una vez dentro del *Job*, puedes asignar valores a las variables en la pestaña **"Variables del Pipeline"**: 
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/var-pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/var-pipeline.png" alt="var-pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

### En el Job
Para agregar una variable de entorno a un *Job* específico, sigue los pasos anteriores para seleccionar el proyecto. Luego, dirígete a la pestaña **"Entornos"** y selecciona el entorno que aloja el *Job* en cuestión:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/entorno.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/entorno.png" alt="entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

Una vez dentro del entorno haz clic en el nombre del *Job* deseado:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/job-entorno.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/job-entorno.png" alt="jobs-desde-entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

Luego ve a la pestaña **"Variables del Job"**, agrega las variables deseadas y haz clic en el botón **"Guardar"**:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-var-job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-var-job.png" alt="add-var-jobs" style="max-width: 100%; height: auto;">
    </a>
</div>

## Archivos
:::note
Recuerda que para que los archivos estén disponibles en el contenedor del *Job*, deben ser copiados en el Dockerfile.
:::

<div style="text-align: center;">
  <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/dockerfile.png">
    <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/dockerfile.png" alt="dockerfile" title="dockerfile" style="max-width: 100%; height: auto;">
  </a>
  <p><em>DockerFile</em></p>
</div>

Para agregar Archivos a un *Job* o aplicación, puedes hacerlo desde el *Pipeline*
con el cual fue creado, o directamente desde el *Job* en cuestión.

### En el Pipeline
Para agregar archivos desde el *Pipeline*, sigue estos pasos:

Navega a la sección de **Proyectos** y selecciona el proyecto que contiene el *Pipeline*, una vez dentro, selecciona el *Pipeline* correspondiente dentro del proyecto:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/pipeline.png" alt="pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

Una vez dentro del *Pipeline*, puedes cargar archivos que estarán disponibles para los *Jobs* creados a partir de él:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-archivo.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-archivo.png" alt="add-archivo" style="max-width: 100%; height: auto;">
    </a>
</div>

Alternativamente, puedes realizar el mismo proceso utilizando el atajo en la **sidebar** para navegar directamente al *Pipeline*:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-pipeline.png" alt="sidebar-pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-archivo.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-archivo.png" alt="add-archivo" style="max-width: 100%; height: auto;">
    </a>
</div>

Finalmente, navega a los *Jobs* donde has añadido archivos desde la pestaña **"Jobs"**:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/jobs.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/jobs.png" alt="jobs" style="max-width: 100%; height: auto;">
    </a>
</div>

Una vez dentro del *Job* puedes visualizar los archivos en la pestaña **"Archivos"**:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/archivo-creado.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/archivo-creado.png" alt="archivo-creado" style="max-width: 100%; height: auto;">
    </a>
</div>

### En el Job
Para agregar un archivo a un *Job* específico, sigue estos pasos:

1. Navega a la sección de **Proyectos** y selecciona el proyecto:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/proyectos.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/proyectos.png" alt="proyectos" style="max-width: 100%; height: auto;">
    </a>
</div>

2. Dirígete a la pestaña **"Entornos"** y selecciona el entorno que aloja el *Job* en cuestión.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/entorno.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/entorno.png" alt="entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

3. Una vez dentro del entorno, haz clic en el nombre del *Job* deseado. 
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/job-entorno.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/job-entorno.png" alt="job-entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

4. Ve a la pestaña **"Archivos"**, agrega los archivos que necesitas y luego haz clic en el botón **"Guardar"**:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-archivo-entorno.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/add-archivo-entorno.png" alt="add-archivo-entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

## Pasos para desplegar un Job
Puedes desplegar un *Job* desde dos ubicaciones:
* **Entorno**
* **Job**

### Desde su entorno
1. Navega al entorno que contiene el *Job* utilizando el atajo de **Entornos** en la **sidebar** o accediendo a través de un proyecto:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/entorno-demo.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/entorno-demo.png" alt="entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

2. Accede al entorno donde se encuentra el *Job*:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/list-jobs.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/list-jobs.png" alt="job-entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

3. Selecciona el *Job* deseado en la tabla y haz clic en el botón **Desplegar**:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/desplegar-job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/desplegar-job.png" alt="desplegar-job" style="max-width: 100%; height: auto;">
    </a>
</div>

:::note
Cabe destacar que desde el entorno puedes seleccionar varios Jobs y desplegarlos simultáneamente.
:::
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/desplegar-varios-jobs.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/desplegar-varios-jobs.png" alt="desplegar-jobs" style="max-width: 100%; height: auto;">
    </a>
</div>

### Desde el Job
1. Puedes navegar al *Job* utilizando el atajo en la **sidebar** o accediendo a él desde su entorno:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/sidebar-job.png" alt="sidebar-jobs" style="max-width: 100%; height: auto;">
    </a>
</div>

2. Una vez dentro del *Job*, selecciona una de las opciones de ejecución disponibles:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/desplegar-job-demo.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/job-img/desplegar-job-demo.png" alt="desplegar-job-demo" style="max-width: 100%; height: auto;">
    </a>
</div>