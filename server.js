const express = require("express");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./models")
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
})