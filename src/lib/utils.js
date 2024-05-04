export const normalizeSlug = (name) => {
  return name.replace(/ /g, "-").toLowerCase();
};

export const mapPosts = ({ posts, projects, categories }) => {
  return posts.map((post) => {
    const { project: projectName } = post.frontmatter;

    const projectObject = projects.find((project) => {
      const { title } = project.frontmatter;
      return title === projectName;
    });

    const projectTypeUrl = categories.find((category) => {
      const { name } = category.frontmatter;
      return name === projectObject.frontmatter.type;
    }).url;

    const projectTagUrl = categories.find((category) => {
      const { name } = category.frontmatter;
      return name === projectObject.frontmatter.tag;
    }).url;

    return {
      ...post,
      frontmatter: {
        ...post.frontmatter,
        project: {
          ...projectObject,
          frontmatter: {
            ...projectObject.frontmatter,
            type: { name: projectObject.frontmatter.type, url: projectTypeUrl },
            tag: { name: projectObject.frontmatter.tag, url: projectTagUrl },
          },
        },
      },
    };
  });
}
