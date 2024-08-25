---
title: Interfaz Web de Syndeno
tableOfContents: false
---
## Kubernetes
Esta sección nos proporciona diferentes herramientas y vistas para gestionar y operar el clúster de Kubernetes de una manera efectiva.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/web-interface/kubernetes.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/web-interface/kubernetes.png" alt="devops" style="max-width: 100%; height: auto;">
    </a>
</div>

**1. Dashboard:**
interfaz gráfica que te permite visualizar y gestionar los recursos del clúster.

**2. Namespaces:**
en el se encuentra todos los namespaces creados en el clúster.

**3. Nodes:**
podemos obtener un listado de todos los nodos que forman parte del clúster ejecutan contenedores.

**4. Logs:**
información en tiempo real sobre la actividad y estado de los Pods del clúster. Esenciales para la depuración y monitoreo.

**5. Shell:**
acceso a una línea de comandos dentro de un Pod ya sea con uno o más contenedores.

---

## DevOps
Estos componentes trabajan juntos para optimizar y automatizar el proceso de desarrollo y despliegue de software, facilitando un flujo de trabajo más eficiente y controlado.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/web-interface/devops.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/web-interface/devops.png" alt="devops" style="max-width: 100%; height: auto;">
    </a>
</div>

**1. Proyectos:**
agrupan recursos y configuraciones relacionadas con el desarrollo de una aplicación o servicio. 

**2. Entornos:**
definen las diferentes etapas del ciclo de vida del desarrollo, como *dev*, *staging*, *prod*.

**3. Pipelines:**
agrupa y muestra los procesos automatizados de CI/CD, permitiendo gestionar y ejecutar flujos completos de desarrollo y despliegue. Cada pipeline está vinculado a un proyecto y puede lanzar jobs específicos, asegurando la automatización y consistencia en el ciclo de vida del software.

**4. Jobs:**
centraliza y organiza los jobs individuales asociadas a proyectos y entornos específicos, permitiendo a los usuarios gestionar, ejecutar y monitorizarlos de manera eficiente en la plataforma.
