import { greeting } from "./callback-example";

describe('greeting', () => {
  test("says good morning", () => {
    greeting((message) => {
      expect(message).toBe("Good Morning");
    })
  })
});
