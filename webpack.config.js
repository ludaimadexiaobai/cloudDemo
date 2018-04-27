const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
//const ExtractPlugin = require('extract-text-webpack-plugin'); //非JS文件的单独缓存

const isDev = process.env.NODE_ENV === 'development'

const config= {
    target:'web',
    entry: path.join(__dirname,'src/index.js'), // 输入：项目主文件（入口文件）
    output:{
        filename: 'build.[hash:8].js',  // 输出的文件名
        path: path.join(__dirname,'dist') // 输出路径
    },    
    module:{   // 配置加载资源
        rules:[
            { 
                test: /(\.jsx|\.js)$/,
                use: { loader: "babel-loader", },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
               test: /\.less$/,
               use: [
                    'style-loader',
                    'css-loader',
                   'less-loader',
                   'postcss-loader'
                ]            
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    // webpack插件配置
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev?'"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if(isDev){
      // 开发坏境的配置

    config.devtool = '#cheap-module-eval-source-map';
    config.devServer ={
        port:8888,
        host:'0.0.0.0',
        overlay:{
            errors:true,
        },
         // 不刷新热加载数据
        hot: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{
    // 生成坏境的配置
    config.output.filename = '[name].[chunkhash:8].js';
    //config.plugins.push(
        //new ExtractPlugin('style.[contentHash:8].css')
        // // 将类库文件单独打包出来
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // })
        // webpack相关的代码单独打包
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // })
   // )
}

module.exports = config
