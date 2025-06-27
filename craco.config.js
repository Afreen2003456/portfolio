module.exports = {
  // Remove PostCSS configuration from CRACO since we have postcss.config.js
  webpack: {
    configure: (webpackConfig) => {
      // Ensure proper handling of CSS modules
      return webpackConfig;
    },
  },
} 