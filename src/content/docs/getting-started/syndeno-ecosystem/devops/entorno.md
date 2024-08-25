---
title: Entornos
tableOfContents: false
---

En un entorno, puedes desplegar y gestionar tus aplicaciones y servicios creados a partir de pipelines pertenecientes al proyecto. Además, puedes configurar el dominio de tu aplicación. Las funcionalidades disponibles en un entorno incluyen:

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/entorno.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/entorno.png" alt="entorno" style="max-width: 100%; height: auto;">
    </a>
</div>

* **Desplegar:** utiliza este botón para desplegar una o más aplicaciones en tu entorno. Esto permite que las aplicaciones estén operativas y accesibles en el entorno seleccionado.
* **Vista general:** en esta pestaña puedes ver todos los jobs creados en este entorno. 
* **Parámetros:** en esta pestaña puedes crear, buscar y configurar variables de entorno que luego se aplican a los jobs del entorno seleccionado.
* **Recursos:** esta pestaña muestra los recursos de Kubernetes asociados a este entorno, como el namespace. Aquí puedes consultar y gestionar los recursos utilizados por las aplicaciones en el entorno.
* **Configuración:** en esta pestaña, puedes configurar el dominio de la aplicación, asegurando que las aplicaciones sean accesibles a través de URLs específicas y personalizadas.

En la tabla asociada al entorno, puedes observar la fecha de la última ejecución y el resultado de cada aplicación desplegada en el entorno, proporcionando una visión clara del estado y rendimiento de tus aplicaciones.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/aplicacion-servicio.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/aplicacion-servicio.png" alt="aplicacion-servicio" style="max-width: 100%; height: auto;">
    </a>
</div>

## Aplicaciones y Servicios
Dentro de una aplicación o servicio, podrás realizar diversas configuraciones y gestiones, incluyendo la adición de archivos y variables de entorno, así como el despliegue y progreso en tiempo real. Cada despliegue cuenta con un apartado de **Logs**, donde podrás revisar errores y obtener información actualizada. Las funcionalidades disponibles son:

* **Desplegar:** crea la imagen y reinicia el pod asociado. Esto asegura que los cambios se apliquen y la aplicación se actualice en el entorno.
* **Reiniciar:** recarga los recursos de Kubernetes relacionados con la aplicación. Esta acción puede ser útil para aplicar cambios en la configuración o solucionar problemas.
* **Construir Imagen:** genera la imagen de la aplicación. Este paso es esencial para crear el contenedor que se desplegará.
* **Acciones Personalizadas:** ejecuta diversas acciones personalizadas definidas según las necesidades específicas de la aplicación o del entorno.
* **Builds:** se muestra un historial de builds de un Job.
* **Git:** configura el repositorio de GitHub asociado a la aplicación y despliega una rama o etiqueta específica. Esta pestaña permite integrar el control de versiones directamente con el despliegue.
* **Archivos:** crea archivos que se añadirán al contenedor del pod una vez que la aplicación sea desplegada. Esto facilita la inclusión de archivos de configuración o datos necesarios para la aplicación.
* **Variables del Job:** añade variables de entorno específicas para la aplicación, las cuales serán configuradas en el contenedor del pod.
* **Variables del Pipeline:** muestra las variables de entorno heredadas del pipeline. Estas variables son aplicadas automáticamente a la aplicación creada a partir del pipeline.
* **Comandos:** define comandos que se ejecutarán en diferentes etapas del despliegue de la aplicación. Esto permite personalizar el proceso de despliegue según las necesidades específicas.
* **Método de Construcción de Imágenes:** elige si el despliegue se realiza de forma nativa o utilizando Kaniko.

Historial de Pipelines ejecutados:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/job.png" alt="job" style="max-width: 100%; height: auto;">
    </a>
</div>

Logs de un Pipeline que ha terminado su ejecución:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/logs-job.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/entorno/logs-job.png" alt="llogs-job" style="max-width: 100%; height: auto;">
    </a>
</div>