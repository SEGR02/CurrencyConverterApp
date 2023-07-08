const { Router } = require("express");
const router = Router();
const {
  getAllFiats,
  getCustomExchange,
} = require("../controllers/exchange.controllers");
const error = require("../middlewares/error.middleware");

router.post("/", getAllFiats, error);
router.post("/custom", getCustomExchange, error);

module.exports = router;
