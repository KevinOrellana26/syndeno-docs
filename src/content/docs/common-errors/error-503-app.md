---
title: Error 503 en mi aplicación
tableOfContents: false
---

## ¿Qué es el error 503?
El **error 503** indica que tu aplicación no está disponible temporalmente. Esto puede deberse a un fallo en la aplicación, a un problema con la configuración de la imagen en el container registry, o, en algunos casos, a un consumo elevado de recursos que obliga a Kubernetes a reiniciar la aplicación.

### Posibles causas
1. **Error en la aplicación:** la aplicación puede tener un fallo interno que le impide funcionar correctamente.
2. **Consumo elevado de recursos:** si la aplicación consume demasiado recursos (CPU, memoria), Kubernetes podría reiniciarla para evitar afectar el rendimiento del clúster.
3. **Problema de configuración de la imagen:** si la URL de la imagen o la etiqueta (tag) en el container registry están mal configurados, el pod no se ejecutará correctamente.

### Solución
1. **Verificar el estado del pod:** lo puedes comprobar desde la plataforma en la pestaña de **Workloads**. Selecciona el namespace en donde se encuentra el pod afectado y revisa su estado actual:

    <br/>
    <a href="/src/content/docs/img/common-errors/error-503-app/estado-deploy.png" target="_blank">
        <img src="/src/content/docs/img/common-errors/error-503-app/estado-deploy.png" alt="estado-deploy"></img>
    </a>
    <br/>

2. **Abre un ticket** con el equipo de soporte para resolver el problema lo más rápido posible.
