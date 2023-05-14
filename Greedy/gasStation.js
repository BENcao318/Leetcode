/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let [totalTank, currTank, startingStation] = [0, 0, 0]

  for (let i = 0; i < gas.length; i++) {
    totalTank += gas[i] - cost[i]
    currTank += gas[i] - cost[i]

    const isEmpty = currTank < 0
    if (isEmpty) {
      startingStation = i + 1
      currTank = 0
    }
  }

  return 0 <= totalTank ? startingStation : -1
}
