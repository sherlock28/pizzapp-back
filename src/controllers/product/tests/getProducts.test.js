const request = require("supertest");
const { app } = require("../../../index");

describe("Test endpoint /api/v1/product", () => {
    test("products are returned as json", async () => {
        await request(app)
            .get("/api/v1/product")
            .expect("Content-Type", /json/)
            .expect(200);
    }, 10000);
});
