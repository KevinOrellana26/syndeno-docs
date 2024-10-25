---
title: Error al Desplegar Aplicaciones
---

En esta sección, encontrarás una lista de errores comunes que pueden ocurrir durante el despliegue de las aplicaciones. 

---
## El despliegue muestra "SUCCESS", pero la aplicación no se actualiza
* **Descripción:** has realizado un despliegue que indica ser exitoso ("SUCCESS"), pero al acceder a la aplicación, ves que no se ha actualizado.

* **Posible causa:** aunque el despliegue se completó, la nueva versión de la aplicación puede no haber iniciado correctamente. En algunos casos, Kubernetes puede estar ejecutando la versión anterior para mantener la estabilidad del servicio.

**Solución:** 
1. **Revisar los logs** del pod para identificar posibles errores de inicio.
2. Considera **desplegar nuevamente el pod** si los logs no indican errores claros, lo que puede forzar a la aplicación a cargar la nueva imagen.
3. Si el problema persiste, **ponte en contacto con el equipo de soporte**. 

**Consejo:** los logs son una de las mejores herramientas para entender qué está pasando. Busca mensajes de error específicos que te den pistas sobre la causa del problema. Para ver los logs de tus contenedores, consulta la guía de [acceso a Logs](https://docs.syndeno.cloud/how-to/visualizar-logs/pod-unico-contenedor/).


## Error al descargar la imagen (ImagePullBackOff)

<br/>
<a href="/src/content/docs/img/common-errors/error-desplegar-apps/podImagePullBackOff.png" target="_blank">
    <img src="/src/content/docs/img/common-errors/error-desplegar-apps/podImagePullBackOff.png" alt="error-pod"></img>
</a>
<br/>

* **Descripción:** el despliegue falla porque Kubernetes no puede descargar la imagen del contenedor, y el pod se queda en estado **ImagePullBackOff**.
* **Posibles causas:** esto puede ocurrir por: 
    * Problemas de red.
    * Credenciales incorrectas para el container registry.
    * Imagen inexistente o tag incorrecto.

**Solución**
* Ponte en contacto con el equipo de soporte para poder solucionar el problema lo más rápido posible.
---

## Error en el pipeline de despliegue
* **Descripción:** el pipeline falla durante el proceso de despliegue.
* **Posibles causas:** esto puede deberse a errores en la configuración del pipeline, problemas en un stage en específico o fallos de dependencia de recursos (como permisos o variables de entorno).

**Solución**
1. Revisa los logs del pipeline para identificar en qué etapa ocurrió el fallo.
2. Ponte en contacto con el equipo de soporte para poder resolver el problema lo más rápido posible.