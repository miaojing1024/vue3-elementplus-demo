module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    hotOnly: false,
    proxy: { // 配置跨域
      '/api': {
        target: "http://imissu,herokuapp.com/api/",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}