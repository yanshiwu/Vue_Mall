const path = require('path')
const webpack = require('webpack') // 热更新-2
const htmlWebPack = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 模式  development和production
    // mode: 'development',
    // 入口
    entry: './src/main.js', 
    output: {
        // 打包后的文件名
        filename: 'bundle.js', 
        // 将路径变为绝对路径  
        path: path.resolve(__dirname,'./dist'),  
    },
    devServer:{
        open: true,   // 自动打开浏览器
        port: 8000,   // 设置启动端口
        contentBase: 'src',  // 指定托管项目的根目录
        hot: true   // 热更新-1
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), // 热更新-3
        new htmlWebPack({  // 创建生成一个在内存中生成的html
            // 指定模板页面, 以后会根据指定的页面路径去生成内存中的页面
            template: path.join(__dirname,'./src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        }),
        new vueLoaderPlugin()
        
    ],
    module:{
        rules: [
            { test: /\.css$/,use:['style-loader','css-loader'] },
            { test: /\.less$/,use:['style-loader','css-loader','less-loader'] },
            { test: /\.scss$/,use:['style-loader','css-loader','less-loader','sass-loader'] },
            // limit给定的值是图片的大小,若引用的图片大于或等于limit值,则不会转为base64格式
            // name后面的参数是保持图片的名字不变   8为hash防止重命名
            { test: /\.(jpg|png|gif|bmp|jpeg)$/,use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
            // 字体文件
            { test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader' },
            { test: /\.js$/,use: 'babel-loader',exclude: /node_modules/ },
            { test: /\.vue$/,use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            // 设置vue导入包的路径
            "vue$": "vue/dist/vue.js"
        }
    }

}