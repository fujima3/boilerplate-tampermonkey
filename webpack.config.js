const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: {
        main: "./src/main/ts/Main.ts"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {test: /\.html$/, use: 'raw-loader'},
            {test: /\.png$/, use: 'file-loader'},
            {test: /\.ts$/, use: 'ts-loader'}
        ],
    },

    resolve: {
        extensions: [".ts", ".js"],
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },


    plugins: [
        new CopyPlugin({
            patterns: [
                // path.resolve(__dirname, "src", "main", "resources", "icons"),
                // path.resolve(__dirname, "src", "main", "resources", "i18n"),
                // path.resolve(__dirname, "src", "main", "resources", "manifest.json"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces", "option", "option.html"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces", "option", "option.css"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces", "popup", "popup.html"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces", "popup", "popup.css"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces", "content", "content.css"),
                // path.resolve(__dirname, "src", "main", "ts", "interfaces", "content", "girlist.css"),
                // path.resolve(__dirname, "src", "main", "resources", "i18n"),
                path.resolve(__dirname, "src", "main", "resources")
            ]
        })
    ],
    devtool: "source-map"
};
