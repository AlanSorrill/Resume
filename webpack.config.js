const path = require('path');

module.exports = {
    
    entry: {
        clientIndex: {
            import: './src/Client/index.tsx',
            filename: path.join('public', 'dist', 'clientIndex.js')
        },
        serverIndex: {
            import: './src/Server/ServerIndex.ts',
            filename: path.join('serverDist', 'serverIndex.js')
        }
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "buffer": false,
            "util": false,
            "url": false,
            "querystring": false,
            "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
          } 
    },
    output: {
        
        path: __dirname,
    },
};