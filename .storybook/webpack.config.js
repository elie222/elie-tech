const path = require("path");

module.exports = ({ config, mode }) => {
  // Add typescript loader
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("ts-loader"),
    options: {
      configFile: ".storybook/tsconfig.json"
    }
  });
  config.resolve.extensions.push(".ts", ".tsx");

  // Add markdown loader
  config.module.rules.push({
    test: /\.md$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("raw-loader")
  });
  config.resolve.extensions.push(".md");

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"];

  return config;
};
