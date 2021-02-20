module.exports = {
  siteMetadata: {
    title: `rama's note`,
    description: `just another web developer note`,
    author: 'ramageek',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        name: `Qisthi Ramadhani`,
        short_name: `QR`,
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: false,
        display: `standalone`,
        icon: `static/ramageek-icon.png`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
      },
    },
  ],
}
