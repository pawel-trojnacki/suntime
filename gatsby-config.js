module.exports = {
  siteMetadata: {
    title: `Suntime`,
    description: `Simple e-commerce training project. JAM Stack: Gatsby.js, Contentful and Netlify, Stripe for payments, and some GSAP fun.`,
    author: `Paweł Trojnacki`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suntime`,
        short_name: `Suntime`,
        start_url: `/`,
        background_color: `#ffe0c5`,
        theme_color: `#ffe0c5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `3a6e9f71a060ff7482fb5c4e0a96cf`,
      },
    },
  ],
}
