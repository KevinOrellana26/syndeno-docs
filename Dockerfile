#Usamos una imagen ligera de node
FROM node:18-alpine AS build
#Definimos el directorio por defecto del contenedor
WORKDIR /app
#Copiamos el package.json y package-lock.json (si existe)
COPY package*.json ./
#Instalamos dependencias
RUN npm install
#Copiamos el resto de archivos del proyecto
COPY . .
#Construimos la wiki
RUN npm run build

#Usamos una imagen ligera para servir la web estática
FROM nginx:alpine
#Copiamos los archvivos generados por astro (del contenedor de node) en el contenedor de nginx
#La carpeta /dist se crea cuando ejecutamos el comando npm run build, que es para generar el contenido estatico para producción
COPY --from=build /app/dist /usr/share/nginx/html
#Exponemos el puerto 80
EXPOSE 80
#Comando por defecto para iniciar nginx
CMD [ "nginx", "-g", "daemon off;" ]
