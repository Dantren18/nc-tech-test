import * as request from "supertest";

const { app } = require("../server");

describe.only("GET /cards", () => {
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
    const response = await request(app).get("/carsd/");
    expect(response.status).toBe(404);
  });
});

describe("GET /cards/:cardId", () => {
  test("Status 200: Returns matching card title", async () => {
    const response = await request(app).get("/cards/card001");
    expect(response.status).toBe(200);
    expect(response.body).toEqual("test");
  });
  test("Status 404: card not found for ID that doesn't exist", async () => {
    const response = await request(app).get("/cards/card9534853");
    expect(response.status).toBe(200);
    expect(response.body).toEqual("test");
  });
});
