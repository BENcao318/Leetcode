/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  // Brute force
  // const sortedPiles = sort(piles)

  // let hr = h
  // let k = sortedPiles[sortedPiles.length - 1] + 1

  // while(hr <= h) {
  //     k--
  //     let sum = 0
  //     for(let i = 0; i < sortedPiles.length; i++) {
  //        sum += Math.ceil(sortedPiles[i] / k)
  //     }
  //     hr = sum
  // }

  // return k + 1

  //Binary search
  let [left, right] = [1, Math.max(...piles)]

  while (left < right) {
      const mid = Math.floor((left + right) / 2)
      const hourSpent = getHourSpent(mid, piles)

      if(hourSpent > h) {
          left = mid + 1
      }

      if(hourSpent <= h) {
          right = mid
      }
  }

  return right
};

// const sort = (piles) => {
//     return piles.sort((a, b) => a - b)
// }

const getHourSpent = (mid, piles, hourSpent = 0) => {
  for(const pile of piles) {
      hourSpent += Math.ceil(pile / mid)
  }
  return hourSpent
}