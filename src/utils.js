exports.imageUrlFinder = (data, id) => {
  return data.filter((data) => data.id == id)[0].imageUrl;
};
