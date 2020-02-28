require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Greg Jopa`,
    siteTitleAlt: `Greg Jopa - Adventures in Web Development`,
    siteHeadline: `Greg Jopa - Adventures in Web Development`,
    siteUrl: `https://www.gregjopa.com/`,
    siteDescription: `Web development blog of Greg Jopa. Featuring articles about JavaScript and other interesting web technologies.`,
    siteLanguage: `en`,
    siteImage: `/greg_jopa_outdoor_headshot.jpg`,
    author: `@gregjopa`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: `MM.DD.YYYY`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/gregjopa/`
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/gregjopa/`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/gregjopa/`
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-20498821-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gregjopa.com - Adventures in Web Development`,
        short_name: `gregjopa.com`,
        description: `Web development blog of Greg Jopa. Featuring articles about JavaScript and other interesting web technologies.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
