const authRoutes = require("./auth.router");
const exchangeRoutes = require("./exchange.router");
const error = require("../middlewares/error.middleware");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/exchange", exchangeRoutes, error);
};

module.exports = routerApi;
