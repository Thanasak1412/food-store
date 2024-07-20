const menuItems = {
  redSet: 50,
  greenSet: 40,
  blueSet: 30,
  yellowSet: 50,
  pinkSet: 80,
  purpleSet: 90,
  orangeSet: 120,
};

const menuItemDiscount = ["orangeSet", "pinkSet", "greenSet"];

function createCalFoodCost() {
  const cache = {};

  /**
   * Calculator class for food store
   *
   * @param {Object[]} foodItems - The food items object.
   * @param {('redSet'|'greenSet'|'blueSet'|'yellowSet'|'pinkSet'|'purpleSet'|'orangeSet')} foodItems.foodItem - The type of food set.
   * @param {number} foodItems.set - The set number.
   * @param {boolean} hasMemberCard - Indicates if the user has a member card.
   * @returns {number} Final cost
   */
  return function calFoodCost(foodItems, hasMemberCard) {
    const cacheKey = JSON.stringify({ foodItems, hasMemberCard });

    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    let cost = 0;
    let isMenuItemDiscount = false;

    for (let food of foodItems) {
      cost += (menuItems[food.foodItem] ?? 0) * food.set; // * not calculate if the foodItem is not includes the menuItems (with set the price to 0)

      if (menuItemDiscount.includes(food.foodItem)) {
        isMenuItemDiscount = true;
      }
    }

    if (hasMemberCard) {
      const discountAmount = calDiscount(cost, 10);

      cost = cost - discountAmount;
    }

    if (isMenuItemDiscount) {
      const discountAmount = calDiscount(cost, 5);

      cost = cost - discountAmount;
    }

    cache[cacheKey] = cost;

    return cost;
  };
}

/**
 * Calculate a discount
 *
 * @param {number} originalPrice - Original price
 * @param {number} discount - Discount rate
 * @returns {number} Discount amount
 */
function calDiscount(originalPrice, discount) {
  const discountAmount = originalPrice * (discount / 100);

  return discountAmount;
}

const cachedCalFoodCost = createCalFoodCost();

module.exports = { cachedCalFoodCost };
