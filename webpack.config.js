const {resolve} = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    context: resolve('src'),
    entry: "./index.js",
    output: {
        path: resolve('dist'),
        filename: "bundle.js",
      },
   module:{
       loaders:[{
 test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',       
               query:{presets:['es2015','react'],
    }
       },
         {
             test: /\.(jpe?g|png|gif|svg)$/i,
              loader: "file-loader?name=/public/icons/[name].[ext]",
            },{
            test:
            /\.css$/,
            loader:[{loader:
            'style-loader'
                    },
                {
                    loader:'css-loader'
                }
                    ]
            }
                ]
        },
    devServer:{
     contentBase:'./dist',
     historyApiFallback:true
   },
   plugins:[
    new HtmlWebpackPlugin({
    title:'My App',
    template:'./index.html'}),

    ]
}