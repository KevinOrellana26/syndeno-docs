---
title: Instalación y configuración
tableOfContents: false
---

## Credenciales
Recordar que se deben solicitar las credenciales de client-id y client-secret al equipo de Syndeno para poder utilizar la CLI.

## Instalación

### Descargar binario de releases

Se debe descargar el binario desde la sección de [Releases](https://docs.syndeno.cloud/cli/releases/)

Se debe colocar en cualquier dirección del PATH. Generar el autocompletado es opcional.

### Carpetas donde se puede colocar el binario

Dependiendo del sistema operativo se debe obtener el contenido de la variable de entorno PATH para ver que carpetas permiten colocar el binario de synctl.

#### En Linux
En distribuciones basadas en Linux se puede utilizar este directorio:
**/usr/local/bin/**

Si necesitamos otra carpeta lo podemos chequear con este comando:

```bash
$ echo $PATH
/home/ferbar/.asdf/shims:/home/ferbar/.asdf/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/usr/local/go/bin:/home/ferbar/go/bin:/home/ferbar/Apps/bin
```

#### En Windows
En Windows se puede utilizar este directorio:

**C:\Users\<User>\AppData\Local\Microsoft\WindowsApps\**

#### En MacOS
En MacOS se puede utilizar este directorio:

**/usr/local/bin/**

### Tipica instalación con Linux

Renombramos el binario:

```bash
$ mv synctl-linux-amd64 synctl
```

Lo movemos a uno de los directorios que indica la variable de entorno PATH:

```bash
$ sudo cp synctl /usr/local/bin
```

Damos permisos:

```bash
$ sudo chmod +x /usr/local/bin/synctl
```

Opcional - Si necesitamos que se tome el archivo de configuración desde otra parte:

```bash
$ export SYNCONFIG=/home/ferbar/syndeno/syndeno-cli/.synctl/config.yaml
```

Agregamos auto-completado a synctl:

```bash
$ synctl completion bash > /tmp/synctl
$ source "/tmp/synctl"
$ sudo mv /tmp/synctl /etc/bash_completion.d/synctl
[sudo] password for ferbar:
```

> **Nota:** El autocompletado puede hacerse para bash, fish, powershell o zsh.

```bash
$ synctl completion bash
$ synctl completion fish
$ synctl completion powershell
$ synctl completion zsh
```

### Tipica instalación con MacOS

Es similar a la instalación en Linux. Con un paso extra que es dar permisos a synctl. 

Se debe dar permisos a synctl si no veremos esta alerta al ejecutar cualquier comando.

![texto alternativo](/src/content/docs/img/cli/common-errors/synctl-error-macos-installation.png "título opcional")

Siguiendo esta guía oficial de Apple se puede solucionar: https://support.apple.com/en-us/102445

En el caso de querer instalar autocompletado seguramente se requiera hacerlo con zsh no con bash.

## Configuración

### Autenticar y generar archivo de configuración

Permite generar la configuración para poder empezar a usar la CLI. Genera el archivo de configuración en la ubicación por defecto de SYNCONFIG (ej, Linux: $HOME/config.yaml)

```bash
$ synctl auth --client-id syndeno-client --client-secret 9x32m0yr829023 --realm A-0000000003
Successful authentication
Generating configuration file in default path: /home/ferbar/.synctl/config.yaml
Successful creation of configuration file in: /home/ferbar/.synctl/config.yaml
```

Con esto hecho ya podremos empezar a utilizar la CLI.

