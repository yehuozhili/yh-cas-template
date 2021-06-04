const prefix = "<%=projectName%>";
module.exports = {
	publicPath: `/${prefix}`,
	filenameHashing: true,
	outputDir:
		process.env.NODE_ENV === "development"
			? `develop/${prefix}`
			: `prod/${prefix}`,
	configureWebpack: {
		output: {
			filename: "[name].[hash].js",
			chunkFilename: "[name].[hash].js",
		},
	},
};
