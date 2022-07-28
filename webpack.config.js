const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [ // rules — это массив правил
            {
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
                exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // регулярное выражение для картинок
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext]' // новое имя картинки
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/, // регулярное выражение для шрифтов
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]' // новое имя шрифта
                }
            },
            {
                test: /\.css$/, // применять это правило только к CSS-файлам
                use: [
                    MiniCssExtractPlugin.loader, { // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html' // путь к файлу index.html
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ] 
}