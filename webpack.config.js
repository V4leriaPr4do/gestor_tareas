const path = require ('path');

module.exports = {
    mode:'development',
    entry: './src/index.js', //punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    module: {
        rules:[
            {
                test: /\.css$/, //expresion regular (regex) para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //loaders para procesar archivos CSS
            },
            {
                test:/\.js$/, //regex para identificar archivos JS
                exclude: /node_modules/, //escluir carpeta node_modules
                use: {
                    loader: 'babel-loader', //loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //generar mapas de codigo para facilitar la depuración, ayuda a webpack
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true, //habilitar la compresión gzip, archivos pesan menos
        port: 9000, //puerto del servidor de desarrollo
    },
};