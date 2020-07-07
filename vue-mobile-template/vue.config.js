// vue.config.js
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const {
  NODE_ENV,
  VUE_APP_BASEURL
} = process.env;
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "assets",
  lintOnSave: true,
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: true, //是否热更新
    proxy: {
      "/api": {
        target: VUE_APP_BASEURL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@css": path.join(__dirname, "./src/styles")
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "./src/plugins/vant.less";`,
          },
        },
      },
      postcss: {
        plugins: [
          require("postcss-px2rem-exclude")({
            remUnit: 75,
            exclude: /node_modules|folder_name/i
          })
        ]
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "./src/styles/variable.less")
      ]
    }
  },
  chainWebpack: config => {
    // 解决ie11兼容ES6
    config.entry('main').add('babel-polyfill')
    // 开启图片压缩
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
    // 开启js、css压缩
    if (NODE_ENV === 'production') {
      config.plugin('compressionPlugin')
        .use(new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }))
    }
  },
  transpileDependencies: [
    'biyi-admin', // 指定对第三方依赖包进行babel-polyfill处理
  ]
}