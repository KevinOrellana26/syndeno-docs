---
title: Comandos en despliegue
tableOfContents: true
---

En caso de querer ejecutar comandos en distintas etapas del despliegue de la aplicación también podemos configurarlos:
<br></br>
<a href="/src/content/docs/img/how-to/pasos-para-levantar-app/ejecutar-cmds-despliegue/lista-comandos.png" target="_blank">
    <img src="/src/content/docs/img/how-to/pasos-para-levantar-app/ejecutar-cmds-despliegue/lista-comandos.png" alt="lista de comandos">
</a>

Cada sección tiene un propósito específico en el proceso de despliegue:

### Comandos de preparación
Estos comandos se ejecutan antes de cualquier acción. El objetivo de esta etapa es asegurarse de que el entorno esté correctamente configurado y que se cumplan las dependencias necesarias para el despliegue.

Ejemplos de comandos: 
* **Creción de archivos dinámicamente:**
```bash
cat > .env <<EOF
PUBLIC_RELEASE_VERSION=v1.0
EOF
```
Crea uno fichero **.env** asignando la versión **v1.0** a una variable.

* **Hacer un ejecutable:**
```bash
chmod +x script.sh
```
Este comando otorga permisos de ejecución al archivo **script.sh**, permitiendo que se pueda ejecutar como un programa en el sistema.

* **Listar archivos:**
```bash
ls -la
```
Este comando muestra una lista detallada de todos los archivos y carpetas en el directorio actual, incluyendo los archivos ocultos, junto con sus permisos, propietarios, tamaño y fecha de modificiación.

### Comandos de post creación de imagen

Después de la creación de una imagen, puede haber comandos que se ejecutan para verificar o gestionar esa imagen.

Ejemplos de comandos: 
* **Listar imágenes de Docker:**
```bash
docker images
```
Esto ayuda a verificar si la imagen se ha creado correctamente.

* **Ejecutar pruebas en la imagen:**
```bash
docker run --rm <image_name> npm test
```
Aquí ejecutas pruebas automatizadas dentro de un contenedor para asegurar que la imagen es válida.

* **Subir la imagen a un registro:**
```bash
docker tag <image_id> <repository_url>:<tag>
docker push <repository_url>:<tag>
```
Etiqueta y sube la imagen a un registro, como Docker Hub o Azure Container Registry.

### Comandos post creación de configuración

En esta sección, los comandos típicamente actualizan o verifican configuraciones después de que se haya generado una configuración nueva, como variables de entorno, archivos de configuración de Kubernetes, etc.

Ejemplos de comandos:

* **Validar archivos de configuración YAML de Kubernetes**
```bash
kubectl apply --dry-run=client -f deployment.yaml
```
Este comando valida que los archivos de configuración estén bien formados y listos para ser aplicados.

:::note
Puede utilizar el indicador **--dry-run=client** para previsualizar el objeto que se enviará a su clúster, sin enviarlo realmente. 
:::

* **Actualizar configuración de entorno:**
```bash
export ENV_VAR=value
```
Este comando establece una variable de entorno que será utilizada por el despliegue.

* **Comprobar configuración de Docker Compose:**
```bash
docker-compose config
```
Verifica que el archivo **docker-compose.yml** está correctamente configurado.

### Comandos post despliegue
Una vez que se ha hecho el despliegue, se pueden ejecutar comandos para verificar que los servicios están corriendo correctamente o para realizar tareas posteriores al despliegue.

* **Verificar estado de los pods de Kubernetes:**
```bash
kubectl get pods --namespace=<namespace>
```
Muestra el estado de los pods desplegados en un clúster de Kubernetes.

* **Comprobar servicios expuestos:**
```bash
kubectl get services --namespace=<namespace>
```
Revisa si los servicios están correctamente configurados y funcionando.

* **Prueba de endpoint:**
```bash
curl -I http://<service_url>
```
Verifica que el servicio está accesible y respondiendo correctamente.

### Comandos de finalización
Al final de la ejecución, pueden ejecutarse comandos para limpiar el entorno, liberar recursos o generar reportes finales.

Ejemplos de comandos:
* **Eliminar imágenes temporales de Docker:**
```bash
docker rmi $(docker images -f "dangling=true" -q)
```
Elimina las imágenes huérfanas que ya no son necesarias.

* **Limpiar recursos de Kubernetes:**
```bash
kubectl delete -f deployment.yaml
```
Elimina recursos temporales que fueron creados durante el despliegue.

* **Generar reporte de logs:**
```bash
kubectl logs <pod_name> --namespace=<namespace> > deployment_logs.txt
```
Almacena los logs del despliegue en un archivo para su posterior revisión.