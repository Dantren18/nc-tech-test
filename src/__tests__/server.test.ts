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
      .then(({ body }) => {});
  });
});

describe("GET /cards/:cardId", () => {
  test.only("Status 200: Returns matching card title", async () => {
    return request(app)
      .get("/cards/card001")
      .expect(200)
      .then(({ body }) => {
        expect(body.card[0]).toEqual({
          id: "card001",
          title: "card 1 title",
          sizes: ["sm", "md", "gt"],
          basePrice: 200,
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
        expect(Array.isArray(body.card)).toEqual(true);
        expect(typeof body.card[0]).toEqual("object");
        expect(body.card.length).toEqual(1);
      });
  });
  test("Status 404: card not found for ID that doesn't exist", async () => {
    const response = await request(app).get("/cards/card9534853");
    expect(response.status).toBe(404);
  });
});
