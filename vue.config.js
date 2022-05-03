// vue.config.js
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/enforce/2018/" : "/",
  devServer: {
    // https : true,
    proxy: {
      "/api": {
        target: {
          protocol: "http:",
          host: "localhost",
          port: 4000,
        },
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
  configureWebpack: {
    plugins: [new CompressionWebpackPlugin()],
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/main.scss";`,
      },
    },
  },
  pwa: {
    name: "Enforce",
    themeColor: "#151A22",
    msTileColor: "#151A22",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },
};
