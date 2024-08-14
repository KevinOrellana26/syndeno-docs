---
title: Jobs
---
Guía sobre cómo gestionar variables de entorno, archivos y el despliegue del Jobs en Syndeno Platform. Explica cómo agregar y configurar variables de entorno tanto desde el Pipeline como directamente en un Job específico. Además, detalla el proceso para añadir archivos necesarios al contenedor de un Job, ya sea desde el Pipeline o dentro del Job mismo. Finalmente, se describe cómo desplegar un Job, destacando las opciones disponibles desde el entorno y desde el Job, incluyendo la posibilidad de ejecutar múltiples Jobs simultáneamente desde el entorno. 

## Variables de Entorno
Para agregar variables de entorno a un Job o Aplicación podemos hacerlo desde el Pipeline con el cual fue creado o desde el Job en cuestión.

### En el pipeline
Podemos navegar desde Proyectos, elegir el proyecto donde se encuentra el pipeline:
<div style="text-align: center;">
  <a href="/src/content/docs/img/select-project.png">
    <img src="/src/content/docs/img/select-project.png" alt="select project" title="select project" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Lista de Proyectos</em></p>
</div>

Y luego seleccionamos el pipeline correspondiente: 
<div style="text-align: center;">
  <a href="/src/content/docs/img/pipeline-project.png">
    <img src="/src/content/docs/img/pipeline-project.png" alt="Pipeline project" title="Pipeline project" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Lista de Pipelines</em></p>
</div>

Ya dentro del Pipeline podemos crear variables para los jobs que tenemos creados a partir de él:
<div style="text-align: center;">
  <a href="/src/content/docs/img/var-job-pipeline.png">
    <img src="/src/content/docs/img/var-job-pipeline.png" alt="variables del job" title="variables del job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Variables del Job</em></p>
</div>

O bien podemos realizar el mismo proceso utilizando el atajo en el sidebar y navegar directo al pipeline:
<div style="text-align: center;">
  <a href="/src/content/docs/img/atajo-sidebar.png">
    <img src="/src/content/docs/img/atajo-sidebar.png" alt="atajo sidebar" title="atajo sidebar" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Atajo sidebar</em></p>
</div>

Por último podemos navegar a los Jobs donde queramos darle valor a estas variables desde la Tab "Jobs":
<div style="text-align: center;">
  <a href="/src/content/docs/img/pestana-job.png">
    <img src="/src/content/docs/img/pestana-job.png" alt="pestaña del job" title="pestaña del job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Pestaña para editar el Job</em></p>
</div>

Una vez dentro del Job podemos darles valor en la tab "Variables del pipeline": 
<div style="text-align: center;">
  <a href="/src/content/docs/img/pestana-var-pipeline.png">
    <img src="/src/content/docs/img/pestana-var-pipeline.png" alt="pestaña variable del pipeline" title="pestaña variable del pipeline" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Pestaña variable del pipeline</em></p>
</div>

### En el Job
Para agregar una variable de entorno para un job en específico podemos hacer la navegación anterior hasta seleccionar un proyecto pero ahora nos vamos a dirigir a la tab de Entornos y seleccionaremos el Entorno donde tenemos alojado el Job en cuestión:
<div style="text-align: center;">
  <a href="/src/content/docs/img/list-entornos.png">
    <img src="/src/content/docs/img/list-entornos.png" alt="listado de entornos" title="listado de entornos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Listado de entornos</em></p>
</div>

Una vez dentro del Entorno, clickeamos el nombre de el Job deseado:
<div style="text-align: center;">
  <a href="/src/content/docs/img/entorno-job.png.png">
    <img src="/src/content/docs/img/entorno-job.png" alt="seleccionar job" title="seleccionar job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Jobs creados dentro del entorno</em></p>
</div>

Vamos a la tab “Variables del job” y agregamos las deseadas y luego damos al
botón “Guardar”:
<div style="text-align: center;">
  <a href="/src/content/docs/img/var-job-entorno.png">
    <img src="/src/content/docs/img/var-job-entorno.png" alt="pestaña variable del job" title="pestaña variable del job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Pestaña variable del job</em></p>
</div>

## Archivos
Recordar que para que los archivos estén disponibles en el contenedor del job se debem copiar en el DockerFile
<div style="text-align: center;">
  <a href="/src/content/docs/img/dockerfile.png">
    <img src="/src/content/docs/img/dockerfile.png" alt="dockerfile" title="dockerfile" style="max-width: 100%; height: auto;">
  </a>
  <p><em>DockerFile</em></p>
</div>

Para agregar Archivos a un Job o Aplicación podemos hacerlo desde el Pipeline
con el cual fue creado o desde el Job en cuestión.

### En el Pipeline
Podemos navegar desde Proyectos, elegir el proyecto donde se encuentra el
pipeline:
<div style="text-align: center;">
  <a href="/src/content/docs/img/list-projects.png">
    <img src="/src/content/docs/img/list-projects.png" alt="lista de proyectos" title="lista de proyectos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Lista de proyectos</em></p>
</div>


Y luego seleccionamos el pipeline correspondiente:
<div style="text-align: center;">
  <a href="/src/content/docs/img/pipeline-project.png">
    <img src="/src/content/docs/img/pipeline-project.png" alt="lista de pipelines" title="lista de pipeline" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Listado de Pipelines</em></p>
</div>

Ya dentro del Pipeline podemos cargar archivos para los jobs que tenemos
creados a partir de él:
<div style="text-align: center;">
  <a href="/src/content/docs/img/cargar-file-job.png">
    <img src="/src/content/docs/img/cargar-file-job.png" alt="archivos" title="archivos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Archivos para los Jobs</em></p>
</div>

O bien podemos realizar el mismo proceso utilizando el atajo en la sidebar y
navegar directo al pipeline:
<div style="text-align: center;">
  <a href="/src/content/docs/img/atajo-sidebar.png">
    <img src="/src/content/docs/img/atajo-sidebar.png" alt="atajo sidebar" title="atajo sidebar" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Atajo sidebar</em></p>
</div>

<div style="text-align: center;">
  <a href="/src/content/docs/img/cargar-file-job.png">
    <img src="/src/content/docs/img/cargar-file-job.png" alt="archivos" title="archivos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Archivos para los Jobs</em></p>
</div>

Por último podemos navegar a los Jobs donde añadimos archivos desde la Tab
“Jobs”:
<div style="text-align: center;">
  <a href="/src/content/docs/img/pestana-job.png">
    <img src="/src/content/docs/img/pestana-job.png" alt="pestaña del job" title="pestaña del job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Pestaña Job</em></p>
</div>

Una vez dentro del Job podemos visualizarlos en la tab “Archivos de pipeline”:
<div style="text-align: center;">
  <a href="/src/content/docs/img/file-pipeline.png">
    <img src="/src/content/docs/img/file-pipeline.png" alt="archivos del pipeline" title="archivos del pipeline" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Pestaña Archvos del Pipeline</em></p>
</div>

### En el Job
Para agregar un Archivo en un job en específico podemos hacer la navegación
anterior hasta seleccionar un proyecto pero ahora nos vamos a dirigir a la tab de
Entornos y seleccionaremos el Entorno donde tenemos alojado el Job en
cuestión:
<div style="text-align: center;">
  <a href="/src/content/docs/img/list-entornos.png">
    <img src="/src/content/docs/img/list-entornos.png" alt="listado de entornos" title="listado de entornos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Listado de entornos</em></p>
</div>

Una vez dentro del Entorno, clickeamos el nombre de el Job deseado:
<div style="text-align: center;">
  <a href="/src/content/docs/img/entorno-job.png">
    <img src="/src/content/docs/img/entorno-job.png" alt="seleccionar job" title="seleccionar job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Jobs creados dentro del entorno</em></p>
</div>

Vamos a la tab “Archivos”, agregamos los deseados y luego damos al botón
“Guardar”:
<div style="text-align: center;">
  <a href="/src/content/docs/img/tab-archivos-job.png">
    <img src="/src/content/docs/img/tab-archivos-job.png" alt="tab archivos" title="tab archivos" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Tab Archivos</em></p>
</div>

## Pasos para desplegar un Job
Podemos desplegar un Job desde dos lugares:
* Entorno
* Job

### Desde su entorno
Navegamos al Entorno donde está el Job desde el atajo de Entornos en la
sidebar o desde un proyecto:
<div style="text-align: center;">
  <a href="/src/content/docs/img/list-entornos-all-projects.png">
    <img src="/src/content/docs/img/list-entornos-all-projects.png" alt="listado de entorno"o title="listado de entorno" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Listado de entornos</em></p>
</div>

Entramos al entorno donde se encuentra el Job:
<div style="text-align: center;">
  <a href="/src/content/docs/img/entorno-job.png">
    <img src="/src/content/docs/img/entorno-job.png" alt="seleccionar job" title="seleccionar job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Jobs creados dentro del entorno</em></p>
</div>

Seleccionamos el que queramos en la tabla y le damos al botón **Desplegar**:
<div style="text-align: center;">
  <a href="/src/content/docs/img/deploy-job.png">
    <img src="/src/content/docs/img/deploy-job.png" alt="desplegar job" title="desplegar job" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Desplegando Job</em></p>
  <i><b>Cabe destacar que desde el Entorno podemos seleccionar más de un job
y ejecutar Múltiples a la vez.</b></i>
</div>

### Desde el Job
Podemos navegar desde el atajo en la sidebar o podemos ingresar desde su entorno:
<div style="text-align: center;">
  <a href="/src/content/docs/img/atajo-sidebar-job.png">
    <img src="/src/content/docs/img/atajo-sidebar-job.png" alt="atajo sidebar" title="atajo sidebar" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Atajo sidebar</em></p>
</div>

Ingresamos al Job:
<div style="text-align: center;">
  <a href="/src/content/docs/img/historial-builds.png">
    <img src="/src/content/docs/img/historial-builds.png" alt="historial builds" title="historial builds" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Historial builds</em></p>
</div>

Y finalmente, le damos a una de las opciones de ejecución brindadas:
<div style="text-align: center;">
  <a href="/src/content/docs/img/lanzar-ejecucion.png">
    <img src="/src/content/docs/img/lanzar-ejecucion.png" alt="lanzar ejecucion" title="lanzar ejecucion" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Lanzando ejecución</em></p>
</div>