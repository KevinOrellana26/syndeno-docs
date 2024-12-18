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

ARG GITHUB_TOKEN_CLI=replace

#Construimos la wiki
RUN node scripts/generate-releases.js && npm run build

#Usamos una imagen ligera para servir la web estática
FROM nginx:alpine
# Elimina el contenido por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*
#Copiamos los archvivos generados por astro (del contenedor de node) en el contenedor de nginx
#La carpeta /dist se crea cuando ejecutamos el comando npm run build, que es para generar el contenido estatico para producción
COPY --from=build /app/dist /usr/share/nginx/html/
COPY --from=build /app/src/content /usr/share/nginx/html/src/content/
#Exponemos el puerto 80
EXPOSE 80
#Comando por defecto para iniciar nginx
CMD [ "nginx", "-g", "daemon off;" ]
