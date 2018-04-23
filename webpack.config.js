const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config= {
    target:'web',
    entry: path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path: path.join(__dirname,'dist')
    },    
    module:{
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
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
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
    config.devServer ={
        port:8888,
        host:'127.0.0.1',
        overlay:{
            errors:true,
        }
    }
}

module.exports = config