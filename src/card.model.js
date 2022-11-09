const cardData = require("./data/cards.json");
const templateData = require("./data/templates.json");

exports.getAllCardsModel = () => {
  console.log("in the model");
  const formattedCardData = cardData.map((card) => {
    return {
      card_id: card.id,
      title: card.title,
      template: card.pages[0].templateId
    };
  });
  return formattedCardData;
};

exports.getCardByIDModel = (id) => {};
