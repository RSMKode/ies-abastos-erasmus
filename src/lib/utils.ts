/**
 * Formatea una cadena de fecha en un formato específico.
 *
 * @param {string} dateString - La cadena de fecha a formatear.
 * @returns {string} La fecha formateada en el formato 'día (en letras) mes (en letras) año (en números)'.
 */
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('es-ES', options);
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
export const fixVideoURL = (videoUrl: string) => {
  if (videoUrl.includes('drive.google.com')) {
    return videoUrl.replace('view?usp=sharing', 'preview');
  } else if (videoUrl.includes('youtube.com')) {
    return videoUrl.replace('watch?v=', 'embed/');
  } else {
    return videoUrl;
  }
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
