const path = require('path'),
    HTMLplugin = require('html-webpack-plugin'), 
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),     
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    
    
 module.exports = {     
    entry: path.resolve(__dirname, 'src', 'App.js'),
    output: {         
        path: path.resolve(__dirname, 'dist'),     
        filename: 'bundle.js'   
    },
    devServer: {            
      contentBase: path.resolve(__dirname, 'dist'),   
    },   
    module: {          
        rules: [       {         
            test: /\.jsx?$/,         
            exclude: /node_modules/,         
            use: { loader: 'babel-loader' }
        },       
        {         
            test: /\.css$/,         
            use: [           
                MiniCssExtractPlugin.loader,           
                'css-loader',           
                'postcss-loader',         
            ],       
        },       
        {         
            test: /\.(gif|png|jpe?g)$/,         
            use: [           
                {             
                    loader: 'file-loader',             
                    options: {               
                        name: 'img/[hash].[ext]'             
                    }           
                }         
            ]       
        },     
    ]   },   
    resolve: {     
        extensions: ['.js', '.jsx'],   },   
        plugins: [     
            new HTMLplugin({       
                template: path.resolve(__dirname, 'src', 'index.html'),       
                filename: 'index.html'     }),     
            new MiniCssExtractPlugin({       
                filename: 'style.css',     }),   
        ], 
};