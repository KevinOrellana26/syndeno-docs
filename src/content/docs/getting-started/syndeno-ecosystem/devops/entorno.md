---
title: Entornos
---

En un entorno podrás desplegar tus aplicaciones y servicios creados a partir de Pipelines pertenecientes al Proyecto como así también configurar el dominio de tu aplicación.
* **Desplegar**: con este botón podrás desplegar 1 o más aplicaciones en tu entorno.
* **Crear Jobs**: con este botón pueden crearse 1 o más aplicaciones a partir de un Pipeline perteneciente al Proyecto.
* **Variables del entorno**: en esta tab podemos darle valor a las variables heredadas desde el Proyecto contenedor.
* **Recursos**: en esta tab podemos ver los recursos de Kubernetes asociados a este entorno como namespace.
* **Configuración**: en esta tab podemos configurar el dominio de la aplicación.

En la tabla podemos observar la fecha de la última ejecución y resultado de cada aplicación perteneciente al Entorno.
<div style="text-align: center;">
  <a href="/src/content/docs/img/devops/entorno.png">
    <img src="/src/content/docs/img/devops/entorno.png" alt="entorno" title="entorno" style="max-width: 100%; height: auto;">
  </a>
  <p><em>vista general del entorno</em></p>
</div>

## Aplicaciones/Servicios
Dentro de una aplicación/servicio podrás realizar distintas configuraciones como añadir archivos o variables de entorno para la aplicación. También podrás desplegarlas y ver su progreso en tiempo real. Todos tus despliegues tendrán un apartado de Logs en los cuales podrás ver errores en el despliegue o información en tiempo real.
* **Desplegar**: crear la imagen y reinicia el pod.
* **Construir imagen**: crea la imagen.
* **Actualizar**: actualiza los parámetros de la aplicación.
* **Reiniciar**: recargar recursos de Kubernetes.
* **Acciones personalizadas**: distintas acciones personalizadas de ejecución.
* **Git**: en esta tab puedes configurar el repositorio de GitHub y desplegar una rama o tag en particular.
* **Recursos**: en esta tab podemos ver los recursos de Kubernetes asociados a este job como Pod.
* **Archivos**: aquí podemos crear archivos que luego de desplegar la aplicación serán agregados al contenedor del Pod.
* **Archivos de pipeline**: en esta tab podemos ver archivos heredados del Pipeline a partir del cual se creó la aplicación.
* **Variables del job**: aquí agregamos variables de entorno para la aplicación las cuales serán creadas en el contenedor del Pod.
* **Variables del pipeline**: en esta tab podemos ver variables de entorno heredadas de el Pipeline a partir del cual se creó la aplicación.
* **Comandos**: aquí podemos definir comandos que se ejecutarán en distintas etapas del despliegue de la aplicación.
* **Método de construcción de imágenes**: se puede elegir si el despliegue se hace de forma nativa o con kaniko.

<div style="text-align: center;">
  <a href="/src/content/docs/img/devops/historial-pipeline.png">
    <img src="/src/content/docs/img/devops/historial-pipeline.png" alt="historial de pipelines ejecutados" title="historial de pipelines ejecutados" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Historial de Pipelines ejecutados, podemos consultar las últimas 10 construcciones</em></p>
</div>

<div style="text-align: center;">
  <a href="/src/content/docs/img/devops/logs-pipeline-terminado.png">
    <img src="/src/content/docs/img/devops/logs-pipeline-terminado.png" alt="logs de pipeline terminado" title="logs de pipeline terminado" style="max-width: 100%; height: auto;">
  </a>
  <p><em>Logs de un Pipeline que ha terminado su ejecución</em></p>
</div>