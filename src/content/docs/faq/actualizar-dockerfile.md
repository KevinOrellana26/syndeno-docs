---
title: ¿Se puede actualizar el Dockerfile desde la plataforma?
tableOfContents: false
---

Sí, puedes actualizar el Dockerfile desde la plataforma. Para modificar la versión de la iamgen base u otros componentes, solo necesitas editar el archivo **Dockerfile** y realizar los ajustes necesarios.

Esto se puede hacer desde la pestaña de **Archivos** dentro del **Job** correspondiente. Una vez localizado el archivo **Dockerfile** selecciona el ícono de lápiz para editarlo. 

<br>
<a href="/src/content/docs/img/faq/actualizar-dockerfile/editar-dockerfile.png" target="_blank">
    <img src="/src/content/docs/img/faq/actualizar-dockerfile/editar-dockerfile.png" alt="editar-dockerfile"></img>
</a>
<br>

Por ejemplo, puedes cambiar el tag de la imagen base de esta manera:

<br>
<a href="/src/content/docs/img/faq/actualizar-dockerfile/actualizar-dockerfile.png" target="_blank">
    <img src="/src/content/docs/img/faq/actualizar-dockerfile/actualizar-dockerfile.png" alt="dockerfile"></img>
</a>

<br>
<a href="/src/content/docs/img/faq/actualizar-dockerfile/mod-dockerfile.png" target="_blank">
    <img src="/src/content/docs/img/faq/actualizar-dockerfile/mod-dockerfile.png" alt="mod-dockerfile"></img>
</a>
<br>
Una vez realizado los cambios, estos se aplicarán la próxima vez que despliegues la aplicación.