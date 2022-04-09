module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      'accessToken': 'c1-8uxzXzcVNbkF_5bUF44b_0P3Z6u3hlUgfbWGFf1w',
      'spaceId': 'whnjcboixq5a'
    }
  }, 'gatsby-plugin-styled-components', {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      'trackingId': '310421785'
    }
  }, 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      'icon': 'src/images/icon.png'
    }
  }, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'images',
      'path': './src/images/'
    },
    __key: 'images'
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      'name': 'pages',
      'path': './src/pages/'
    },
    __key: 'pages'
  }]
};
