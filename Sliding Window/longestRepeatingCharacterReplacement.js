/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let [left, right, max] = new Array(4).fill(0)
  let frequencyMap = {}

  while (right < s.length) {
    addRightFrequency(s, right, frequencyMap)

    let count = getHighestChar(frequencyMap)
    const windowLength = right - left + 1
    if (windowLength - count <= k) {
      max = Math.max(windowLength, max)
    } else {
      subtractLeftFrequency(s, left, frequencyMap)
      left++
    }
    right++
  }

  return max
}

const addRightFrequency = (s, right, frequencyMap) => {
  const char = s[right]

  if (!frequencyMap[char]) {
    frequencyMap[char] = 1
  } else {
    frequencyMap[char] += 1
  }
}

const subtractLeftFrequency = (s, left, frequencyMap) => {
  const char = s[left]
  frequencyMap[char] -= 1
}

const getHighestChar = (frequencyMap) => {
  let arr = Object.values(frequencyMap)
  let max = Math.max(...arr)

  return max || 0
}
