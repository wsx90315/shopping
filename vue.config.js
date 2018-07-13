module.exports = {
  pwa: {
    name: 'TheShop',
    themeColor: '#277FCC',
    workboxOptions: {
      templatedUrls: {
        '/': 'index.ssr.html'
      }
    }
  },

  pluginOptions: {
    ssr: {
      server: null,
      directives: {}
    },
    generate: {
      scanRouter: true,
      params: {},
      paths: []
    },
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }
}