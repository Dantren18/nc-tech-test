const { getAllCardsModel, getCardByIDModel } = require("./card.model.js");

exports.getAllCardsController = async (req, res, next) => {
  try {
    const response = await getAllCardsModel();
    res.status(200).send({ cards: response });
  } catch (err) {
    next(err);
  }
};

exports.getCardByIDModel = (req, res, next) => {};
