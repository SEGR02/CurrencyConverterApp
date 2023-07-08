const exchangeServices = require("../services/exchange.services");

const getAllFiats = async (req, res, next) => {
  try {
    const { token } = req.body;
    console.log(token);
    const result = await exchangeServices.getAllCurrencies(token);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getCustomExchange = async (req, res, next) => {
  try {
    const { currency, amount } = req.body;
    const result = await exchangeServices.getCustomResult(currency, amount);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFiats,
  getCustomExchange,
};
