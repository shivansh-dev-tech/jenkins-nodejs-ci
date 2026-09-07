const test = require("node:test");
const assert = require("node:assert");
const { getMessage } = require("./app");

test("application returns the expected message", () => {
  assert.strictEqual(getMessage(), "Hello from Node.js Jenkins CI!");
});
