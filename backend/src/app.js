const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const routerApi = require("./routes");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels();
db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db synched"))
  .catch((error) => console.log(error));

app.get("/", async (req, res) => {
  res.json("Welcome to my server");
});

routerApi(app);

module.exports = app;
