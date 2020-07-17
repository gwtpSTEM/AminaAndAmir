require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.AminaAndAmir.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:400,700`,
          `M PLUS Rounded 1c\:400,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/temp`],
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `apppHWVPYSIawMUY0`,
            tableName: `Stories`,
            mapping: {
              'message': 'text/markdown',
              'photo': 'fileNode',
            },
            separateMapType: true,
          },
          {
            baseId: `apppHWVPYSIawMUY0`,
            tableName: `Videos`,
          },
          {
            baseId: `apppHWVPYSIawMUY0`,
            tableName: `Activities`,
            mapping: {
              'image': 'fileNode',
              'file': 'fileNode',
            }
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Awesome Adventures of Amina and Amir",
        short_name: "The Awesome Adventures of Amina and Amir",
        start_url: "/",
        background_color: "#424284",
        theme_color: "#424284",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/static/*": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/src/styles/*": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/src/img/*": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/src/pages/*": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/src/components/*": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/public/page-data/*": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/sw.js": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172924165-1",
        head: false,
        exclude: ["/404"],
        pageTransitionDelay: 0,
      },
    },
  ],
}
