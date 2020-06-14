// vue.config.js
const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: "dist",
  assetsDir: "assets", //静态资源目录
  lintOnSave: true,
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8001,
    https: false,
    hotOnly: false, //是否热更新
    proxy: {
      "/api": {
        target: "http://ycbuniapp.edtsoft.com/gateway",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     "@css": path.join(__dirname, "./src/styles")
    //   }
    // }
  },
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的 BASE_URL，以便 axios 的请求地址不同
    // config.plugin('define').tap(args => {
    //   args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
    //   return args
    // });
    const svgRule = config.module.rule("svg");
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "./src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
    const fileRule = config.module.rule("file");
    fileRule.uses.clear();
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, "./src/icons"))
      .end()
      .use("file-loader")
      .loader("file-loader");
  }
}