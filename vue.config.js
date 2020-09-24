module.exports = {
  outputDir: 'www',
  pwa: {
    name: 'my-app'
  },
  devServer: {
    host: 'localhost'
  },
  pluginOptions: {
    i18n: {
      locale: 'ja',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
