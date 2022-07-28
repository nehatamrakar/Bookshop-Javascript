import { greeting } from "./promise-example.js";

describe('greeting', () => {
  test("says good morning", async () => {
    const message = await greeting();
    expect(message).toBe("Good Morning");
  }, 6000);
});
