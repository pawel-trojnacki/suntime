const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetProducts {
      products: allDatoCmsProduct {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.products.nodes.forEach(({ slug }) => {
    createPage({
      path: `/products/${slug}`,
      component: path.resolve(`src/templates/ProductTemplate.js`),
      context: {
        slug,
      },
    });
  });
};
