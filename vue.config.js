module.exports={
    devServer:{
        port:8082,
        open:true,
        proxy:{
            '/api':{
                target:'http://localhost:8888',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/api': ''
                }
            }
        }
    },
    //关掉又爱又恨的eslint
    lintOnSave:false
}