module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.yml'],
    },
    module: {
      rules: [
        {
          test: /\.yml$/,
          loader: 'json-loader!yaml-loader',
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/app.scss";',
      },
    },
  },
}
