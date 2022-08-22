const express = require("express");
const route = express.Router();
const data = require("../data/data.json");

route.get("/", (req, res) => {
  res.send(JSON.stringify(data));
});
route.get("/:id", (req, res) => {
  const { id } = req.params;
  const filter_product = data.find((data) => data.id === parseInt(id));
  res.status(200).send(JSON.stringify(filter_product));
});

module.exports = route;
