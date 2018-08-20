module.exports = {
  siteMetadata: {
    title: 'Engage Lives',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  ],
}
