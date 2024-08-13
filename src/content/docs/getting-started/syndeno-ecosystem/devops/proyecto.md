---
title: Proyectos
---

Un proyecto en Syndeno es una entidad en la cual se alojarán tus distintos entornos y pipeline. En ellos puedes agregar variables propias del proyecto o variables para entorno las cuales serán heredadas por todos sus entornos. Las variables de sus entornos serán cargadas con su nombre en un listado y más tarde se podrá entrar a cada entorno para darle el valor que uno quiera a ese parámetro para ese entorno, luego estos parámetros serán heredados por las aplicaciones pertenecientes a ese entorno.

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