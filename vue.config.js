const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint 校验功能  比如：：声明变量但是没有使用 eslint校验工具会报错
  lintOnSave:false

})
