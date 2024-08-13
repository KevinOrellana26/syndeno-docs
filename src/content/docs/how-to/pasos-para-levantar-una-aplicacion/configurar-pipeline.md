---
title: Configurar pipeline
---

1. Lo primero es agregar la URL del repositorio de Git donde tenemos la aplicación. Para esto recordar generar un token con permisos y ponerlo en la URL:
[captura del apartado GIT del Pipeline]: #

2. El segundo paso es agregar una JenkinsFile. En esta estarán definidos todos los recursos que deberá crear la aplicación, algunas variables y configuraciones:
[captura del apartado JenkinsFile agregando el Jenkinsfile]: #

3. Aquí una JenkinsFile de un backend con node.js básico de ejemplo:
[código de JenkinsFile de node.js]: #