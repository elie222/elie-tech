module.exports = {
  siteMetadata: {
    title: `elie.tech - full stack software development in Tel Aviv`,
    siteUrl: `https://elie.tech`,
    description: `High-end full stack software development based in Tel Aviv.`,
    name: `Elie Steinbock`,
    twitter: `@elie2222`,
    image: `/images/favicon/elie-tech-og-image.png`
    // GoogleVerification: `abcdefz`,
    // disqus: `gatsby-typescript`
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`
      }
    },
    // Expose `/static/images` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`
      }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136396895-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `elie.tech`,
        short_name: `elie.tech`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `static/images/favicon/favicon.svg`,
        include_favicon: true
      }
    },
    /* eslint-enable camelcase */

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },

    `gatsby-plugin-svgr`,

    `gatsby-plugin-react-helmet`
  ]
}
