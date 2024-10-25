---
title: ¿Qué hacer cuando falla un Pipeline?
---

Cuando un pipeline falla, es importante identificar si el problema proviene de la aplicación o del propio pipeline. En esta página, encontrarás una guía para diagnosticar el origen del error y como solucionarlo.

## Pasos para Resolver un Error en el Pipeline
### 1. Revisar los logs del Pipeline
El primer paso para diagnosticar cualquier problema es revisar los logs generados durante la ejecución del pipeline. Los logs te proporcionarán información detallada sobre en qué parte del proceso ocurrió el error, lo que te ayudará a identificar la causa.

### 2. Determinar si el Error Proviene de la Aplicación o del Pipeline
Al analizar los logs, intenta identificar si el error está relacionado con la aplicación que se está ejecutando o con la configuración del pipeline. A continuación, te mostramos ejemplos de ambos tipos de errores para ayudarte a diferenciarlos:

* **Errores de la aplicación:** ocurren cuando hay problemas en la lógica de tu aplicación, como dependencias rotas, errores de código o problemas de configuración. Un mensaje típico de error podría ser que no se pueda conectar a la base de datos:

    ```text
    ERROR: Cannot connect to the database - connection timed out.
    ```

* **Error del pipeline:** suceden cuando hay problemas en el flujo del pipeline, como fallos en la ejecución, problemas en la configuración del pipeline o credenciales. Un ejemplo de este tipo de error es:

    ```text
    ERROR: Authentication failed while pushing to Docker registry.
    ```

### ¿Aún tienes dudas? Contacta con el Soporte Técnico
Si después de revisar los logs no logras identificar el origen del error o no sabes cómo solucionarlo, no dudes en contactar con el equipo de soporte técnico. Para obtener asistencia personalizada, puedes **abrir un ticket** describiendo el problema y adjuntando los logs relevantes. El equipo de soporte te ayudará a diagnosticar y resolver el problema lo antes posible.