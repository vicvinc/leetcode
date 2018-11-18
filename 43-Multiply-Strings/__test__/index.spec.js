const multiply = require("../index");

test("1 x 0 to be 0", () => {
  expect(multiply([1], [0])).toBe("0");
});

test("0x0 should be 0", () => {
  const a = [0];
  const b = [0];
  expect(multiply(a, b)).toBe("0");
});

test("19x19 should be 361", () => {
  const a = [1, 9];
  const b = [1, 9];
  expect(multiply(a, b)).toBe("361");
});

test("20*14 should be 280", () => {
  const a = [2, 0];
  const b = [1, 4];
  expect(multiply(a, b)).toBe("280");
});

test("12345678901x34567890123123 should be 426764071745125913327823", () => {
  const a = "12345678901";
  const b = "34567890123123";
  expect(multiply(a, b)).toBe("426764071745125913327823");
});
