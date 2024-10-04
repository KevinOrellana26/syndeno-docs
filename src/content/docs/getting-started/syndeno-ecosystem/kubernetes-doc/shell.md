---
title: Shell
tableOfContents: false
---

### Introducción
El **Shell** es una interfaz de línea de comandos que permite a los usuarios interactuar con el sistema operativo mediante la ejecución de comandos. Aunque existen varios tipos de shells, los más comunes son **Bash** (Bourne Again Shell) y **SH** (Bourne Shell), ampliamente utilizados en sistemas Unix y Linux.

### Tipos de Shell

* **Bash:** es el shell más popular en sistemas Linux. Ofrece características avanzadas como el historial de comandos, autocompletado, alias y scripting. 
* **Shell:** es el shell original de Unix y es más básico comparado con Bash. Sin embargo, es ligero y eficiente para tareas simples. 

### Comandos básicos

El shell permite realizar una amplia gama de operaciones mediante comandos. Algunos de los comandos más comunes incluyen:
* **Navegación por el sistema de archivos:**
    * **ls:** lista los archivos y directorios.
    * **cd:** cambia de directorio.
    * **pwd:** muestra el directorio actual.
    * **cat, less:** visualización de archivos de texto.

* **Gestión de archivos y directorios:**
    * **cp:** copia archivos o directorios.
    * **mv:** mueve o renombra archivos o directorios.
    * **rm:** elimina archivos o directorios.
    * **mkdir:** crea un nuevo directorio.

* **Información del sistema:**
    * **uname -a:** muestra información del sistema operativo.
    * **df, du:** muestra el espacio en disco.
    * **ps, top:** visualiza procesos en ejecución.

<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/kubernetes-img/shell/shell.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/kubernetes-img/shell/shell.png" alt="shell" style="max-width: 100%; height: auto;">
    </a>
</div>


### Edición y manipulación de archivos
El Shell proporciona herramientas para editar y manipular archivos:

* **Editores de texto:** utiliza editores como ***vi*** o ***nano*** para modificar archivos de texto desde la terminal.

### Administración del sistema
Los shells permiten realizar tareas de administración del sistema como la gestión de servicios y procesos, instalación de paquetes y monitoreo de recursos. 

* **Administrar servicios:** utiliza ***systemctl*** para iniciar, detener o reiniciar servicios en el sistema.
* **Instalación de paquetes:** usa el gestor de paquetes del sistema ***apt-get*** (en Ubuntu) para instalar aplicaciones y herramientas.
    :::caution
    Ten en cuenta que los paquetes instalados manualmente en un contenedor se perderán al reiniciarlo. Para evitarlo, agrégalos al **Dockerfile** o utiliza **volúmenes persistentes**. 
    :::

### Gestión de Pestañas desde la Plataforma

Al igual que con los logs, podrás gestionar **pestañas** de shell para ejecutar múltiples sesiones de terminal en paralelo. Además, la terminal permite **ventanas desacoplables**, lo que facilita el uso de varias ventanas simultáneamente para diferentes tareas.
<div style="display: flex; justify-content: center;">
    <a href="/src/content/docs/img/getting-started/syndeno-ecosystem/kubernetes-img/shell/shell-ventana.png" target="_blank">
        <img src="/src/content/docs/img/getting-started/syndeno-ecosystem/kubernetes-img/shell/shell-ventana.png" alt="shell-ventana" style="max-width: 100%; height: auto;">
    </a>
</div>