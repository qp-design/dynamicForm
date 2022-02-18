/* craco.config.js */
const nodeExternals = require("webpack-node-externals");
const CracoLessPlugin = require("craco-less");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Process = require("process");
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (Process.env.NODE_ENV === "production") {
        webpackConfig.externals = [
          nodeExternals({
            allowlist: ["@craco/craco"],
          }),
        ];
        webpackConfig.entry = __dirname + "/src/components/form/index.tsx";
        webpackConfig.output = {
          libraryTarget: "umd",
          path: __dirname + "/build", // 打包后的文件存放的路径
          filename: "index.js", // 打包后输出文件的文件名
        };
      }
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          url: false,
          assert: false,
          crypto: false,
          http: false,
          https: false,
          os: false,
          buffer: false,
          stream: false,
        },
      };
      return webpackConfig;
    },
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'acb.css',
    //   chunkFilename: 'acb.css',
    // }),
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#007ffe" },
            javascriptEnabled: true,
          },
        },
        // miniCssExtractPluginOptions: ({
        //   filename: 'acb.css',
        //   chunkFilename: 'acb.css',
        // }),
      },
    },
  ],
};
