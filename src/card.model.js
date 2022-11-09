const cardData = require("./data/cards.json");
const templateData = require("./data/templates.json");

exports.getAllCardsModel = () => {
  const formattedCardData = cardData.map((card) => {
    const imageUrl = templateData.filter(
      (data) => data.id == card.pages[0].templateId
    );
    return {
      card_id: card.id,
      title: card.title,
      imageUrl: imageUrl[0].imageUrl
    };
  });

  return formattedCardData;
};

exports.getCardByIDModel = (cardId) => {
  console.log("inside the new model");
  const singleCard = cardData.filter((card) => card.id == cardId);
  console.log(singleCard, "carddata");
  return singleCard;
};
