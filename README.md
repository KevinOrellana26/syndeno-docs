# Syndeno Docs

Esta es una guía paso a paso de cómo se pueden añadir nuevas páginas, hacer pruebas en local y los pasos que tienes que seguir para poder hacer publicaciones para personas sin previo conocimiento técnico.

**Conceptos:**
* **Astro:** es un framework de JavaScript que genera todo el contenido estático cuando pasa por el proceso de compilación.
* *Compilación:* significa el código que hacemos, lo transformamos a código que entienden las máquinas.

---

## Índice
- [Instalar node](#instalar-node)
- [Instalar y Configurar Git](#instalar-y-configurar-git)
- [Instalar Visual Studio Code](#instalar-visual-studio-code)
- [Atajos de estilos MarkDown](#atajos-de-estilos-markdown)
- [Puntos más importantes](#puntos-más-importantes)
- [Añadir una nueva página](#añadir-una-nueva-pagina)



---
### Instalar node
Los siguientes pasos detallan cómo instalar tanto **node.js** como **npm** (node package manager), que es necesario para manejar dependencias en proyectos.

#### Pasos para descargar e instalar Node.js en Windows:

1. Descargar el instalador de Node.js: [Node.js](https://nodejs.org/)
2. Estando en la página oficial, descarga la versión “lts” (Long Term Support), es más estable y recomendada.
   
![node.js](https://github.com/user-attachments/assets/0b058763-5442-465f-80d8-62420a248242)

4. Sigue los pasos del instalador, aceptando los términos y seleccionando las opciones por defecto. 
5. Verifica la instalación:
   * Desde una terminal o powershell ejecutar: ```node -v``` y ```npm -v```

---
### Instalar y Configurar Git

1. Instalar Git:
   - Si aún no tienes Git instalado, puedes descargarlo desde [git](https://git-scm.com/downloads) y seguir las instrucciones para tu sistema operativo.

2. Configurar tu usuario de Git
Previamente debes crear una cuenta en GitHub si aún no la tienes. 
Teniendo la cuenta creada, desde la terminal puedes ejecutar los siguientes comandos:

```bash
git config --global user.name "NombreGit"
git config --global user.email "tu-email@example.com"
```

#### Clonar repositorio
1. Clona el repositorio desde Git usando la terminal:

   ```git clone https://github.com/syndeno/syndeno-docs.git```

2. Muévete a la carpeta

   ```cd syndeno-docs/```

3. Instalar las dependencias del proyecto (esto descargará todas las dependencias del archivo package.json)

   ```npm install```

4. Ejecutar el servidor en local

   ```npm run dev```

5. Acceder al navegador

   ```http://localhost:4321```

6. Ver cambios en tiempo real. El servidor estará observando los cambios que hagas en los archivos. Cuando edites algún archivo, el navegador se actualizará automáticamente para reflejar los cambios.

### Instalar Visual Studio Code

Lo puedes instalar desde la miscrosofts store o desde la propia página oficial: [descargar](https://code.visualstudio.com/download)

### Atajos de estilos MarkDown

Usa este [enlace](https://markdown.es/sintaxis-markdown/) para ver como utilizar MarkDown.

---
### Puntos más importantes

1. El archivo más importa **astro.config.mjs**
   - Starlight es un tema o integración dentro de astro. Dentro de Starlight definimos el **título, las redes sociales, idioma, y el sidebar**. 
   - Dentro del fichero *astro.config.mjs*:
     - **Sidebar**: es la sección en donde podrás añadir las páginas y verlas en el sidebar.
     - **Label**: es el título que nosotros veremos en la documentación. Y es la categoría que agrupa al resto de guías.
     - **Ítems**: todas las guías que meteremos dentro de una categoría.
     - **Collapsed: true | false**. Es para que se abra o cierre el label padre si contiene labels hijos. Ejemplo:
      ![taxonomia](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcekIlcagcVIjhTy53PtnUyl-iopQS375NmJjKzNZlcofJSaQkAYf1y0iawzr7F2bovjpHDvIIEYjyKPPn2zsOh3VDL6zZmfid1uW5Zf8e9BJPjLpkG1P5Q4FabLKBTd-OdINy8dF0BGPCvfmGQ9SGgy-Wh?key=0nQ5Eq8Vp_f12Vgec5vGYQ)

2. **Slug**: es la URL en donde se encuentra el archivo.md. Dependiendo de donde se encuentre. Todo lo que pongamos en la carpeta **/docs** astro lo va a referenciar como rutas.
3. Fichero **index.mdx:** es el primer fichero que se muestra en la documentación.
4. Ficheros **.md y .mdx**.
   * Es markdown. Las 4 primeras líneas es metadata de HTML donde le pasamos el título y en algunas ocasiones la tabla de contenidos dentro de la página.
   * El resto es markdown. Algunos ficheros serán .mdx donde le decimos que vamos a añadir algunos componentes.
5. Añadir estilos en la carpeta **/styles/custom.css**.
6. Añadir imágenes en la carpeta **/img**.
7. Versionado y despliegue.

---

### Añadir una nueva página
Para añadir una nueva página tienes que estar dentro de la siguiente dirección: 
```syndeno-docs/src/content/docs/[nombre-carpeta]/[nombre-fichero].md```






















## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
|   |   |   ├── img/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
