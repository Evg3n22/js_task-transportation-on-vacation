/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const COST_PER_DAY = 40;
  let totalCost = days * COST_PER_DAY;

  if (days >= 7) {
    totalCost -= 50;

    return totalCost;
  }

  if (days >= 3) {
    totalCost -= 20;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
