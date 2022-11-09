import * as express from "express";

export const app = express();
const cardData = require("./data/cards.json");

const { getAllCardsController, getCardByIDModel } = require(".controllers.js");

const cardsRouter = express.Router();

app.set("json spaces", 2);

topicsRouter.get("/", getAllCardsController);
topicsRouter.post("/cards/:cardId/:sizeId?", getCardByIDModel);

// app.get("/cards", async req, res, next) => {
//   console.log("cardData", cardData);
//   res.status(200).send(cardData);
//   let response = "hello test";

//   return cardData; // respond with a list of cards
// });

// app.get("/cards/:cardId/:sizeId?", () => {
//   // respond with card by id
// });
