---
title: Error 502 en mi aplicación
tableOfContents: false
---

Esta página explica el error 502 en aplicaciones y sus posibles causas, como problemas con puertos no abiertos o configurados incorrectamente. Incluye pasos para diagnosticar el problema usando comandos y recomendaciones sobre cómo solucionar el problema.

## ¿Qué es el error 502?
Al intentar acceder a tu aplicación, puedes recibir un **error 502**. Este error generalmente indica que **aunque la aplicación está activa, hay un problema de conexión que impide que responda correctamente a las solicitudes**. 

**Posibles causas**
1. **El puerto de la aplicación no está abierto:** la aplicación puede no estar escuchando correctamente en el puerto que debería. Esto puede impedir que se establezca la conexión. 
2. **La aplicación no está exponiendo información en el puerto correcto:** aunque la aplicación esté en funcionamiento, puede que no esté configurada para exponer los datos en el puerto esperado.

**Solución**
1. **Verificar si el puerto está abierto:** puedes usar **la terminal o consola (shell)** para revisar si el puerto de la aplicación está en uso y aceptando conexiones. Puedes acceder a la Shell desde la plataforma siguiendo [esta guia](https://docs.syndeno.cloud/how-to/shell-de-un-contenedor/pod-con-un-contenedor/). Una vez estemos dentro del contenedor, con esta serie de comandos puedes listar los puertos abiertos:
    ```bash
    lsof -i -P -n | grep LISTEN
    netstat -tulpn | grep LISTEN
    ss -tulpn | grep LISTEN
    lsof -i:[puerto] ## reemplaza [puerto] por el puerto que quieras verificar ##
    ```
    Esto mostrará una lista de los puertos en uso, permitiéndote identificar si el puerto que necesita la aplicación está disponible.

2. **Revisar la configuración del Target Port:** de momento, solo es **solo el equipo de soporte** puede modificar el **Target Port** (el puerto donde la aplicación recibe solicitudes). Si el problema radica en este aspecto, **contacta con el equipo de soporte** lo antes posible para realizar las configuraciones necesarias.