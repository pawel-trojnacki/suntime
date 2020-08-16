require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Suntime`,
    description: `Simple e-commerce training project. JAM Stack: Gatsby.js, DatoCMS and Netlify, Stripe for payments, PWA, and some GSAP fun.`,
    author: `Paweł Trojnacki`,
    siteUrl: `https://suntime.netlify.app/`,
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
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suntime.com`,
        short_name: `Suntime`,
        start_url: `/`,
        background_color: `#ffe0c5`,
        theme_color: `#ffe0c5`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.CMS_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Alegreya`,
            variants: [`400`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        allPageHeaders: ['Access-Control-Allow-Origin: *'],
      },
    },
  ],
};
