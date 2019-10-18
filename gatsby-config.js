/* require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}) */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `AYR gjør IT enkelt for deg og din bedrift`,
    description: `AYR ser helheten, og hjelper deg med å bruke IT til å bli bedre på din kjernevirksomhet.`,
    author: `Bjerk`,
    url: `www.ayr.no`,
    siteLanguage: "no",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W26XD8T",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ayr-web`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    `gatsby-plugin-sass`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AYR`,
        short_name: `AYR`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ayr_logo.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
