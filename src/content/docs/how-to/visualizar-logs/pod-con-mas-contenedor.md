---
title: Pods con  múltiples contenedores
tableOfContents: false
---

En está sección se explica cómo visualizar los logs de un Pod que contiene múltiples contenedores, lo que permite un monitoreo más preciso y efectivo de cada contenedor individualmente.

Cuando un Pod tiene más de un contenedor, la navegación permanece igual a [Pods con un único contenedor](https://docs.syndeno.cloud/how-to/visualizar-logs/pod-unico-contenedor/), pero se añade la opción de **seleccionar el contenedor específico** cuyos logs deseas consultar:

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/how-to/visualizar-logs/pod-con-mas-contenedores/logs-multi-container.png" target="_blank">
        <img src="/src/content/docs/img/how-to/visualizar-logs/pod-con-mas-contenedores/logs-multi-container.png" alt="logs-multiples-contenedores" style="max-width: 100%; height: auto;">
    </a>
</div>

Seleccione uno de los contenedores, elija la duración de los logs y haga clic en el ▶️ para visualizar los registros.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/how-to/visualizar-logs/pod-con-mas-contenedores/logs-contenedor1.png" target="_blank">
        <img src="/src/content/docs/img/how-to/visualizar-logs/pod-con-mas-contenedores/logs-contenedor1.png" alt="logs-jenkins" style="max-width: 100%; height: auto;">
    </a>
</div>

Visualizando los registros del otro contenedor:
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/how-to/visualizar-logs/pod-con-mas-contenedores/logs-contenedor2.png" target="_blank">
        <img src="/src/content/docs/img/how-to/visualizar-logs/pod-con-mas-contenedores/logs-contenedor2.png" alt="logs-config-reload" style="max-width: 100%; height: auto;">
    </a>
</div>