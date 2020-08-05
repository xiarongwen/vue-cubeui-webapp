const path = require('path')
const appData = require('./data.json')
const Seller = appData.seller

function resolve(dir) {
  return path.join(__dirname,dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer:{
    before(app){
      app.get('/api/seller',function(req,res){
        res.json({
          erron:0,
          data:Seller
        })
      })
    }
  },
  chainWebpack(config){
    config.resolve.alias
    .set('components',resolve('src/components'))
    .set('common',resolve('src/common'))
  }
}
