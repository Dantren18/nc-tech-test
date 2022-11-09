import * as request from "supertest";

const { app } = require("../server");

describe("GET /cards", () => {
  test("Status 200: Returns an array of objects containing correct keys", async () => {
    return request(app)
      .get("/cards")
      .expect(200)
      .then(({ body }) => {
        expect(Object.keys(body.cards[0])).toEqual([
          "card_id",
          "title",
          "imageUrl"
        ]);
        expect(Array.isArray(body.cards)).toEqual(true);
        expect(body.cards[0]).toEqual({
          title: "card 1 title",
          card_id: "card001",
          imageUrl: "/front-cover-portrait-1.jpg"
        });
        expect(body.cards.length).toEqual(3);
      });
  });
  test("Status 404: directory spelled incorrectly", async () => {
    return request(app)
      .get("/carsd")
      .expect(404)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "Route not found" });
      });
  });
});

describe("GET /cards/:cardId", () => {
  test("Status 200: Returns matching card title", async () => {
    return request(app)
      .get("/cards/card001")
      .expect(200)
      .then(({ body }) => {
        expect(body.card).toEqual({
          title: "card 1 title",
          imageUrl: "/front-cover-portrait-1.jpg",
          card_id: "card001",
          base_price: 200,
          availableSizes: ["sm", "md", "gt"],
          pages: [
            {
              title: "Front Cover",
              templateId: "template001"
            },
            {
              title: "Inside Left",
              templateId: "template002"
            },
            {
              title: "Inside Right",
              templateId: "template003"
            },
            {
              title: "Back Cover",
              templateId: "template004"
            }
          ]
        });
        expect(typeof body.card).toEqual("object");
      });
  });
  test("Status 400: Bad Request card not found for ID that doesn't exist", async () => {
    return request(app)
      .get("/cards/card001234324")
      .expect(400)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "That card ID is not valid" });
      });
  });
  test("Status 404: trying to request from incorrectly spelled endpoint", async () => {
    return request(app)
      .get("/carsd/card001")
      .expect(404)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "Route not found" });
      });
  });
});
