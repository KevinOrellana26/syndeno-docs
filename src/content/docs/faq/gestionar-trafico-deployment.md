---
title: ¿Cómo se gestiona el tráfico entre réplicas en Kubernetes?
tableOfContents: false
---

Cuando trabajas con un **Deployment** en Kubernetes que tiene múltiples réplicas, es común preguntarse cómo se distribuye el tráfico entre estas réplicas y si es posible dirigir las peticiones de forma controlada. A continuación, te explicamos cómo funciona este proceso y qué opciones tienes para monitorear el tráfico.

## Introducción
En Kubernetes, la alta disponibilidad y escalabilidad de las aplicaciones se logran mediante el uso de réplicas. Al escalar un deployment a dos o más réplicas, **Kubernetes distribuye automáticamente el tráfico** entrante de manera equitativa entre ellas mediante un **Service**, que actúa como un punto de acceso y realiza un balanceo de carga. Sin embargo, s posible que en ciertos casos quieras comprender o monitorear cómo se dirige este tráfico a nivel de pod.

## Distribución del tráfico
Por defecto, Kubernetes no permite redirigir manualmente el tráfico hacia una réplica específica. Los **Services** utilizan un balanceo de carga que distribuye las solicitudes de forma uniforme (por ejemplo, un 50/50 entre dos réplicas). Esto garantiza una distribución del tráfico que mantiene la eficiencia y la disponibilidad del servicio.

## Monitoreo de las solicitudes
Aunque no es posible controlar directamente la distribución del tráfico, sí puedes observar qué pod recibe cada petición revisando los **logs** de los pods al mismo tiempo. Puedes hacerlo siguiendo está [guía para visualizar los logs de los pods](https://docs.syndeno.cloud/how-to/visualizar-logs/pod-unico-contenedor/).
