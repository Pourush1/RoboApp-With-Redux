import { Sub, Mul, Div, Total } from "./math";

const Sum = jest.fn((x, y) => 2);

// Unit Testing
test("Adding 1 + 1 equals 2", () => {
  expect(Sum(1, 1)).toBe(2);
  expect(Sum).toHaveBeenCalledTimes(1);
  expect(Sum).toHaveBeenCalledWith(1, 1);
});

test("Subtracting 2 - 1 equals 1", () => {
  expect(Sub(2, 1)).toBe(1);
});

test("Multiplying 2 * 1 equals 2", () => {
  expect(Mul(2, 1)).toBe(2);
});

test("Dividing 2 / 2 equals 1", () => {
  expect(Div(2, 2)).toBe(1);
});

// Integration Testing
test("Total", () => {
  expect(Total(20, 5)).toBe("$ 25");
});
