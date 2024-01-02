const {
  override,
  addLessLoader,
  adjustStyleLoaders,
  overrideDevServer,
} = require("customize-cra");

const DEV_SERVER = "http://localhost:90";

const addPostcssPlugins = (plugins) => (config) => {
  const rules = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf)
  ).oneOf;
  rules.forEach(
    (r) =>
      r.use &&
      r.use.forEach((u) => {
        if (
          u.options &&
          u.options.postcssOptions &&
          u.options.postcssOptions.ident === "postcss"
        ) {
          if (!u.options.postcssOptions.plugins) {
            u.options.postcssOptions.plugins = plugins;
          }
          if (u.options.postcssOptions.plugins) {
            const originalPlugins = u.options.postcssOptions.plugins;
            u.options.postcssOptions.plugins = [originalPlugins, ...plugins];
          }
        }
      })
  );
  return config;
};

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
    addPostcssPlugins([["postcss-pxtorem", { rootValue: 36, propList: ["*"] }]])
  ),
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      proxy: {
        "/app": {
          target: DEV_SERVER,
          changeOrigin: true,
          secure: false,
        },
      },
    };
  }),
};
