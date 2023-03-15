/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let [left, right] = [0, 0]

  const frequencyMap = getFrequencyMap(s1)
  let map = new Map(frequencyMap)

  while (right < s2.length) {
    const char = s2[right]
    if (!map.has(s2[right])) {
      left++
      right = left
      map = new Map(frequencyMap)
    } else {
      map.set(char, map.get(char) - 1)
      if (map.get(char) === 0) map.delete(char)
      right++
    }
    const window = right - left

    if (window === s1.length) return true
  }

  return false
}

const getFrequencyMap = (s) => {
  const map = new Map()

  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      map.set(char, map.get(char) + 1)
    }
  }

  return map
}
