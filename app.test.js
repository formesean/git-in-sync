const request = require("supertest");

const app = require("./app");

describe("GET /", () => {
  it("responds welcome text", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to Git in Sync!");
  });
});
