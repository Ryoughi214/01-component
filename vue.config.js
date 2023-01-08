const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // devServer: { // 自定义服务配置
  //   host:'127.0.0.1',
  //   open: true, // 自动打开浏览器
  //   port: 3000
  // },
  transpileDependencies: true,
  lintOnSave:false
})
