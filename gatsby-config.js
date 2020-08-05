require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const { createProxyMiddleware } = require('http-proxy-middleware'); //v1.x.x
// Use implicit require for v0.x.x of 'http-proxy-middleware'
// const proxy = require('http-proxy-middleware')
// be sure to replace 'createProxyMiddleware' with 'proxy' where applicable

module.exports = {
  siteMetadata: {
    title: `Suntime`,
    description: `Simple e-commerce training project. JAM Stack: Gatsby.js, DatoCMS and Netlify, Stripe for payments, and some GSAP fun.`,
    author: `Paweł Trojnacki`,
    siteUrl: `https://suntime.netlify.app/`,
  },
  proxy: {
    prefix: 'https://www.datocms-assets.com/',
    url: 'https://suntime.netlify.app/',
  },
  // developMiddleware: app => {
  //   app.use(
  //     '/.netlify/functions/',
  //     createProxyMiddleware({
  //       target: 'http://localhost:8000',
  //       secure: false, // Do not reject self-signed certificates.
  //       pathRewrite: {
  //         '/.netlify/functions/': '',
  //       },
  //     })
  //   );
  // },
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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
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
  ],
};
