require('dotenv').config();

module.exports = {
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
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
