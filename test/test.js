const assert = require("assert");
const { add, divide } = require("../src/index");

try {
  // happy path
  assert.strictEqual(add(2, 3), 5, "add(2,3) should be 5");
  assert.strictEqual(divide(10, 2), 5, "divide(10,2) should be 5");

  // edge cases
  assert.strictEqual(add(-1, 1), 0, "add(-1,1) should be 0");

  let threw = false;
  try {
    divide(1, 0);
  } catch (e) {
    threw = true;
    assert.strictEqual(e.message, "division by zero");
  }
  assert.ok(threw, "divide should throw on division by zero");

  console.log("All tests passed");
  process.exit(0);
} catch (err) {
  console.error("Test failure:", err && err.message ? err.message : err);
  process.exit(1);
}
