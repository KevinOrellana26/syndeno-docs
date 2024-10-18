---
title: ¿Qué diferencias hay entre las bases de datos de dev y prod?
tableOfContents: false
---

La principal diferencia entre los entornos de desarrollo **(DEV)** y producción **(PROD)** en las bases de datos radica en la carga y la cantidad de datos. Aunque la configuración entre ambos entornos puede ser similar, el entorno de **PROD** generalmente maneja una mayor cantidad de datos, lo que puede impactar en el rendimiento.

Para realizar pruebas más precisas y evitar que algo funcione correctamente en **DEV** pero no en **PROD**, es recomendable que la base de datos en DEV tenga una carga de datos similiar a la de PROD. Esto permite que las pruebas de calidad y funcionamiento sean más realistas y reflejen mejor el comportamiento en producción.