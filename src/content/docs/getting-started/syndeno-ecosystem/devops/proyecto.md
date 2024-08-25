---
title: Proyectos
tableOfContents: false
---

Un proyecto de Syndeno es una entidad en la cual se alojarán tus diferentes entornos y pipelines. Dentro de un proyecto, puedes agregar parámetros 

* **Variables del proyecto:** son globales y se heredan en todos los entornos asociados al proyecto.
* **Variables para entornos:** se heredan por los entornos específicos y son cargadas en un listado con su nombre. Posteriormente, puedes asignar valores a estas variables dentro de cada entorno específico.

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/proyecto/" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/devops/proyecto/" alt="proyecto" style="max-width: 100%; height: auto;">
    </a>
</div>

Los valores asignados a las variables de entorno serán heredados por todas las aplicaciones dentro de ese entorno, asegurando que las configuraciones específicas se apliquen adecuadamente en cada contexto.