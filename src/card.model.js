const cardData = require("./data/cards.json");
const templateData = require("./data/templates.json");
const { imageUrlFinder } = require("./utils.js");

// const imageUrlFinder = (data, id) => {
//   return data.filter((data) => data.id == id)[0].imageUrl;
// };

exports.getAllCardsModel = () => {
  const formattedCardData = cardData.map((card) => {
    const imageUrl = imageUrlFinder(templateData, card.pages[0].templateId);
    return {
      card_id: card.id,
      title: card.title,
      imageUrl: imageUrl
    };
  });

  return formattedCardData;
};

exports.getCardByIDModel = (cardId) => {
  const singleCard = cardData.filter((card) => card.id == cardId);

  if (singleCard.length == 0) {
    return Promise.reject({ status: 400, msg: "Invalid Card ID" });
  }

  const imageUrl = imageUrlFinder(
    templateData,
    singleCard[0].pages[0].templateId
  );

  const singleCardFormatted = singleCard.map((card) => {
    return {
      title: card.title,
      imageUrl: imageUrl,
      card_id: card.id,
      base_price: card.basePrice,
      availableSizes: card.sizes,
      pages: card.pages
    };
  });
  return singleCardFormatted[0];
};
