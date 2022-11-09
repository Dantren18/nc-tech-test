import * as request from "supertest";
import { app } from "../server";

describe("GET /cards", () => {
  test.only("Status 200: Returns an array of objects containing correct keys", async () => {
    const response = await request(app).get("/cards");
    console.log(response.body, "res");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        title: "card 1 title"
      })
    );
  });
  test("Status 200: All objects have values attached to all keys", async () => {
    const response = await request(app).get("/cards/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        title: "card 1 title"
      })
    );
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
