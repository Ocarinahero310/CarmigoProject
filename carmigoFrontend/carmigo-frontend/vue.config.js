module.exports = {
  devServer:{
    proxy: {
      "^/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" }
      }
    } 
  },
  transpileDependencies: [
    'vuetify'
  ],
  // devServer:{
  //   proxy: 'http://localhost:3000'
  // }
}
