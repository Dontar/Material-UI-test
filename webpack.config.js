const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
	entry: "./src/Main.tsx",
	output: {
		filename: "bundle.js",
		path: buildPath
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	plugins: [
		// Define production build to allow React to strip out unnecessary checks
		new webpack.DefinePlugin({
			'process.env': {
				// 'NODE_ENV': JSON.stringify('production')
				'NODE_ENV': JSON.stringify('develop')
			}
		}),
		// Minify the bundle
		// new webpack.optimize.UglifyJsPlugin({
		// 	comments: false,
		// 	compress: {
		// 		// suppresses warnings, usually from module minification
		// 		warnings: false,
		// 	},
		// }),
		// Allows error warnings but does not stop compiling.
		// new webpack.NoEmitOnErrorsPlugin(),
		// Transfer Files
		new TransferWebpackPlugin([
			{ from: 'www' },
		], path.resolve(__dirname, 'src')),
	],
	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, use: "awesome-typescript-loader" },
			{ test: /\.js$/, use: "source-map-loader" },
			{
				test: /\.css$/, use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader", options: {
							modules: true,
							getLocalIdent: (context, localIdentName, localName, options) => {
								return localName;
							}
						}
					}
				]
			}
		]

	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	// externals: {
	//     "react": "React",
	//     "react-dom": "ReactDOM"
	// },
};