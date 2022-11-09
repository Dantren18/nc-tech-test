const express = require("express");
const {
  getAllCardsController,
  getCardByIDModel
} = require("./card.controller.js");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getAllCardsController);

app.get("/cards/:cardId/:sizeId?", getCardByIDModel);

module.exports = { app };
