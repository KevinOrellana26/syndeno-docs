---
title: Pipelines
tableOfContents: false
---

Un **Pipeline** en Syndeno es un template configurable que te permite crear múltiples aplicaciones en distintos entornos.

Cada pipeline está vinculado al **repositorio de GitHub** de tu aplicación y te permite agregar diversas configuraciones, como archivos y variables de entorno. que serán aplicadas a las aplicaciones a partir de él.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/pipeline.png" alt="pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/repositorio.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/repositorio.png" alt="repositorio" style="max-width: 100%; height: auto;">
    </a>
</div>

* **Variables del Pipeline:** Al igual que con los proyectos y entornos, puedes definir variables específicas para el pipeline. Estas variables serán heredadas por todas las aplicaciones creadas a partir de ese pipeline, independientemente del entorno en el que se encuentren, Puedes asignar valores a estas variables directamente desde cada aplicación, permitiendo una configuración flexible y personalizada.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/var-pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/var-pipeline.png" alt="var-pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/add-var-pipeline.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/pipeline/add-var-pipeline.png" alt="add-var-pipeline" style="max-width: 100%; height: auto;">
    </a>
</div>