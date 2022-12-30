const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://nflplayoffbracket-test-rof7qukjwa-uc.a.run.app',
      changeOrigin: true,
    })
  );
};