/**
 * Formatea una cadena de fecha en un formato específico.
 *
 * @param {string} dateString - La cadena de fecha a formatear.
 * @returns {string} La fecha formateada en el formato 'día (en letras) mes (en letras) año (en números)'.
 */
export const formatDate = (dateString: string, locale) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(locale, options);
};

/**
 *
 * @param {string} slugWithLang - El slug que contiene el idioma.
 * @returns {string} El slug sin el idioma.
 */
export const getSlugWithoutLang = slugWithLang => {
  const [lang, ...slugArray] = slugWithLang.split('/');
  return slugArray.join('/');
};

/**
 * Obtiene un array de imágenes a partir de una cadena de URLs de imágenes.
 *
 * @param {string} imageUrls - La cadena de URLs de imágenes.
 * @returns {string[]} Un array de URLs de imágenes.
 */
export const getImageUrls = (imageUrls: string) => {
  const images = imageUrls.split(',');
  return images.length > 0 ? images : [];
};

export const fixWebUrl = (webUrl: string) => {
  if (webUrl.includes('http')) return webUrl;
  return `http://${webUrl}`;
};

/**
 * Modifica la URL de un vídeo para permitir su visualización incrustada.
 *
 * @param {string} videoUrl - La URL del vídeo a modificar.
 * @returns {string} La URL modificada que permite la visualización incrustada del vídeo.
 * Si la URL es de Google Drive, reemplaza 'view?usp=sharing' por 'preview'.
 * Si la URL es de YouTube, reemplaza 'watch?v=' por 'embed/'.
 * Si la URL no es ni de Google Drive ni de YouTube, la devuelve sin cambios.
 */
export const fixVideoURL = (videoUrl?: string) => {
  let urlType = '';
  let fixedVideoUrl = '';
  if (videoUrl?.includes('drive.google.com')) {
    urlType = 'googleDrive';
    fixedVideoUrl = videoUrl.replace('view?usp=sharing', 'preview');
  } else if (videoUrl?.includes('youtube.com')) {
    urlType = 'youtube';
    fixedVideoUrl = videoUrl.replace('watch?v=', 'embed/');
  }
  return { urlType, fixedVideoUrl };
};

//? ANTIGUAS --------------------------------------------

export const normalizeSlug = name => {
  return name.replace(/ /g, '-').toLowerCase();
};

//!Deprecated
// export const mapPosts = ({ posts, projects, categories }) => {
//   return posts.map(post => {
//     const { project: projectName } = post.frontmatter;

//     const projectObject = projects.find(project => {
//       const { title } = project.frontmatter;
//       return title === projectName;
//     });

//     const projectTypeUrl = categories.find(category => {
//       const { name } = category.frontmatter;
//       return name === projectObject.frontmatter.type;
//     }).url;

//     const projectTagUrl = categories.find(category => {
//       const { name } = category.frontmatter;
//       return name === projectObject.frontmatter.tag;
//     }).url;

//     return {
//       ...post,
//       frontmatter: {
//         ...post.frontmatter,
//         project: {
//           ...projectObject,
//           frontmatter: {
//             ...projectObject.frontmatter,
//             type: { name: projectObject.frontmatter.type, url: projectTypeUrl },
//             tag: { name: projectObject.frontmatter.tag, url: projectTagUrl },
//           },
//         },
//       },
//     };
//   });
// };
