const axios = require("axios");
const jwt = require("jsonwebtoken");
require("dotenv");

class exchangeServices {
  static async getAllCurrencies(token) {
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (!(err == null)) throw err;
    });
    try {
      const result = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${process.env.YOUR_APP_ID}`
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  }
  static async getCustomResult(currency, amount) {
    try {
      const rates = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${process.env.YOUR_APP_ID}`
      );
      const specificRate = await rates.data.rates[currency];
      return specificRate;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = exchangeServices;
