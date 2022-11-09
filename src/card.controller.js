const { send } = require("process");
const { getAllCardsModel, getCardByIDModel } = require("./card.model.js");

exports.getAllCardsController = async (req, res, next) => {
  try {
    const response = await getAllCardsModel();
    res.status(200).send({ cards: response });
  } catch (err) {
    next(err);
  }
};

exports.getCardByIDModel = async (req, res, next) => {
  const cardId = req.params.cardId;
  try {
    const response = await getCardByIDModel(cardId);
    res.status(200).send({ card: response });
  } catch (err) {
    if (err.status == 400) {
      res.status(400).send({ msg: "That card ID is not valid" });
    }

    next(err);
  }
};
