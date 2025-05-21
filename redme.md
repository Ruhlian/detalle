# Instrucciones para Subir tu Página Web a un Hosting Gratuito

He reorganizado el código en varios archivos para mejor mantenimiento:

- `index.html` - La estructura HTML principal
- `styles.css` - Todos los estilos CSS
- `scripts.js` - Todo el código JavaScript
- `assets/` - Carpeta para la imagen (debes crear esta carpeta)

## Paso 1: Preparar los Archivos

1. Crea una carpeta principal llamada "para-alejita" (o el nombre que prefieras)
2. Copia los archivos `index.html`, `styles.css` y `scripts.js` en esta carpeta
3. Crea una subcarpeta llamada `assets` dentro de la carpeta principal
4. Guarda la imagen que deseas usar como `recuerdo.jpg` en la carpeta `assets`

> **Nota sobre la imagen**: Si tienes la imagen original que quieres usar, solo guárdala como `recuerdo.jpg` en la carpeta `assets`. Si deseas usar la imagen que está codificada en base64 en el HTML original:
> 1. Copia el código base64 que comienza con "data:image/jpeg;base64,"
> 2. Utiliza alguna herramienta en línea como "Base64 to Image Converter" para convertirla
> 3. Guarda la imagen resultante como `recuerdo.jpg` en la carpeta `assets`

## Paso 2: Subir a un Hosting Gratuito

Hay varios servicios gratuitos donde puedes alojar tu página web. Aquí te doy instrucciones para algunos de los más populares:

### Opción 1: GitHub Pages (Recomendado)

1. Crea una cuenta en [GitHub](https://github.com/) si no tienes una
2. Crea un nuevo repositorio público con el nombre que prefieras (por ejemplo, "para-alejita")
3. Sube todos tus archivos a este repositorio
4. Ve a "Settings" > "Pages"
5. En "Source", selecciona "main" (o "master") y haz clic en "Save"
6. GitHub te proporcionará una URL (usualmente en el formato `https://tuusuario.github.io/para-alejita/`)
7. ¡Tu página web estará lista en unos minutos!

### Opción 2: Netlify (También muy bueno)

1. Regístrate en [Netlify](https://www.netlify.com/) (puedes hacerlo con tu cuenta de GitHub)
2. Haz clic en "New site from Git"
3. Conecta tu repositorio de GitHub (si usaste la opción anterior)
4. O simplemente arrastra y suelta la carpeta "para-alejita" en la sección de "Drag and drop"
5. Netlify te dará una URL aleatoria, pero puedes personalizarla en "Site settings" > "Change site name"

### Opción 3: Vercel

1. Regístrate en [Vercel](https://vercel.com/)
2. Importa tu proyecto desde GitHub o sube los archivos directamente
3. Vercel desplegará automáticamente tu sitio y te dará una URL personalizada

## Paso 3: Compartir tu Página Web

Una vez que tu página esté en línea, puedes compartirla simplemente enviando la URL. Algunos consejos:

- Prueba la URL antes de compartirla para asegurarte de que todo funciona bien
- Considera acortar la URL con un servicio como [Bitly](https://bitly.com/) si es muy larga
- Puedes enviar la URL por mensaje, correo electrónico, o incluso crear un código QR para compartirla

## Resolución de Problemas

Si encuentras algún problema:

- **Las imágenes no se muestran**: Asegúrate de que la ruta en el HTML sea correcta (`assets/recuerdo.jpg`)
- **Los estilos no se aplican**: Verifica que `styles.css` esté en la misma carpeta que `index.html`
- **Las funciones no trabajan**: Asegúrate de que `scripts.js` esté correctamente vinculado en el HTML

¡Buena suerte! 💖