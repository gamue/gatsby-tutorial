/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gamue",
    description: "bla blubb",
    author: "Joh",
  },
  plugins: ["gatsby-plugin-sass",
      "gatsby-transformer-remark",
      {
        resolve: "gatsby-source-filesystem",
        options: {
            name: "src",
            path: `${__dirname}/src/`,
        },
      },
  ],
}