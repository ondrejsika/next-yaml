module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      config.module.rules.push({
        test: /\.ya?ml$/,
        exclude: nextConfig.exclude,
        use: [
          {
            loader: require.resolve("js-yaml-loader"),
            options: {}
          }
        ]
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
};
