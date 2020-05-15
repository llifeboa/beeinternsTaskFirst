const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {

	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: ['html-loader?attrs=false', 
				{
					loader: 'pug-html-loader',
					options: {
						pretty: true
					}
				}],
			},
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			  },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
		  filename: 'index.html',
		  template: path.join(__dirname, 'src/index.pug'),
		  inject: false,
		}),
		new MiniCssExtractPlugin(),
		new CopyPlugin([
			{ from: 'src/assets', to: './static' },
		  ]),
	 ]
};