var path = require('path');
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
    },
    output: {
        path: __dirname,
    },
};
