const config = require('./config');
require('dotenv').config();

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: `https://www.tafthillacres.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "GOOGLE_ANALYTICS_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "GOOGLE_ANALYTICS_TRACKING_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "GOOGLE_ANALYTICS_TRACKING_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        
      }
    },
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
