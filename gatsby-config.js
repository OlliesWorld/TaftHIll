const config = require('./config');
require('dotenv').config();

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: `https://www.tafthillacres.com`,
  },
  plugins: [
   
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-186322200-1',
        head: true,
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
     
  ],
};
