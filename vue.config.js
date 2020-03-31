const { development } = require('./config')

module.exports = {
  devServer: {
    port: development.vue.port,
    proxy: process.env.DEV_SERVER || 'http://localhost:8085'
  },
}