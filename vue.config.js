module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
        '/api': {    //1
            target: 'http://121.40.114.206:9091/',    //2
            changOrigin: true,
            logLevel: 'debug',
            
            pathRewrite: {    //3
                '^/api': '/api'
            }
        }
    }
}
}