// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */
// var characterReplacement = function (s, k) {
//   let [left, right, max] = new Array(4).fill(0)
//   let frequencyMap = {}

//   while (right < s.length) {
//     addRightFrequency(s, right, frequencyMap)

//     let count = getHighestChar(frequencyMap)
//     const windowLength = right - left + 1
//     if (windowLength - count <= k) {
//       max = Math.max(windowLength, max)
//     } else {
//       subtractLeftFrequency(s, left, frequencyMap)
//       left++
//     }
//     right++
//   }

//   return max
// }

// const addRightFrequency = (s, right, frequencyMap) => {
//   const char = s[right]

//   if (!frequencyMap[char]) {
//     frequencyMap[char] = 1
//   } else {
//     frequencyMap[char] += 1
//   }
// }

// const subtractLeftFrequency = (s, left, frequencyMap) => {
//   const char = s[left]
//   frequencyMap[char] -= 1
// }

// const getHighestChar = (frequencyMap) => {
//   let arr = Object.values(frequencyMap)
//   let max = Math.max(...arr)

//   return max || 0
// }

/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let [left, right, longest, max] = new Array(4).fill(0)
  const frequencyMap = new Array(26).fill(0)

  while (right < s.length) {
    const count = addRightFrequency(s, right, frequencyMap)

    longest = Math.max(longest, count)

    let window = right - left + 1
    const canSlide = k < window - longest
    if (canSlide) {
      subtractLeftFrequency(s, left, frequencyMap)
      left++
    }

    window = right - left + 1
    max = Math.max(max, window)

    right++
  }

  return max
}

const addRightFrequency = (s, right, map) => {
  const char = s[right]
  const index = getCode(char)

  map[index]++

  return map[index]
}

const subtractLeftFrequency = (s, left, map) => {
  const char = s[left]
  const index = getCode(char)

  map[index]--

  return map[index]
}

const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0)
