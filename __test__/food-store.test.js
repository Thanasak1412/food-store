const { cachedCalFoodCost } = require("../food-store");

describe("foodStore", () => {
  test("calculates cost without any discount", () => {
    const order = [
      { foodItem: "redSet", set: 2 },
      { foodItem: "blueSet", set: 1 },
    ];

    const hasMemberCard = false;
    const expectedCost = 130;

    expect(cachedCalFoodCost(order, hasMemberCard)).toBe(expectedCost);
  });

  test("calculates cost with member card discount", () => {
    const order = [
      { foodItem: "redSet", set: 2 },
      { foodItem: "blueSet", set: 1 },
    ];

    const hasMemberCard = true;
    const expectedCost = 117;

    expect(cachedCalFoodCost(order, hasMemberCard)).toBe(expectedCost);
  });

  test("calculates cost with item discount", () => {
    const order = [
      { foodItem: "greenSet", set: 1 },
      { foodItem: "yellowSet", set: 1 },
    ];

    const hasMemberCard = false;
    const expectedCost = 85.5;

    expect(cachedCalFoodCost(order, hasMemberCard)).toBeCloseTo(expectedCost);
  });

  test("calculates cost with member card and item discount", () => {
    const order = [
      { foodItem: "pinkSet", set: 1 },
      { foodItem: "yellowSet", set: 1 },
    ];
    const hasMemberCard = true;
    const expectedCost = 111.15;

    expect(cachedCalFoodCost(order, hasMemberCard)).toBeCloseTo(expectedCost);
  });

  test("returns 0 for invalid food items", () => {
    const order = [{ foodItem: "invalidSet", set: 1 }];
    const hasMemberCard = false;
    const expectedCost = 0; // invalid item should not contribute to cost

    expect(cachedCalFoodCost(order, hasMemberCard)).toBe(expectedCost);
  });
});
