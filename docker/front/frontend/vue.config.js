module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "zh",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  devServer: {
    disableHostCheck: true,
  },

  chainWebpack: (config) => {
    config.module
      .rule("raw")
      .test(/\.txt$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap((options) => {
  //       options.transformAssetUrls = {
  //         img: "src",
  //         image: "xlink:href",
  //         "b-avatar": "src",
  //         "b-img": "src",
  //         "b-img-lazy": ["src", "blank-src"],
  //         "b-card": "img-src",
  //         "b-card-img": "src",
  //         "b-card-img-lazy": ["src", "blank-src"],
  //         "b-carousel-slide": "img-src",
  //         "b-embed": "src",
  //       };

  //       return options;
  //     });
  // },
};