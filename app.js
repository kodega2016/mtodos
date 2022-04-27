const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");
const initDB = require("./config/initDB");
//Load env variables
dotenv.config({
  path: "./config/config.env",
});

//Database connection
initDB();

app.get("/", (req, res) => {
  res.send("It is working...");
});

//Server configuration
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || "development";
const server = app.listen(PORT, (err, res) => {
  console.log(`Server is running on ${NODE_ENV} in ${PORT}`.inverse);
});

process.on("unhandledRejection", async function (reason, p) {
  await server.close();
  console.log(`Somethings went wrong`.red);
  process.exit(1);
});
