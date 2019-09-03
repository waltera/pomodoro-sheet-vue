const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.modules.add(path.resolve(__dirname, 'src'))
  }
}