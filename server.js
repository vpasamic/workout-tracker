const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db= require("./models")

const PORT = process.env.PORT || 3000;
const app = express();
app.use(logger("dev"));
pp.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
