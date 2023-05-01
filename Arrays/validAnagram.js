/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 */
// var isAnagram = function(s, t) {
//   //Frequency Counter
//   // if(s.length !== t.length) return false

//   // const dict = {}
//   // let count = 0

//   // for(let i = 0; i < s.length; i++) {
//   //     if (!dict[s[i]]) {
//   //         dict[s[i]] = 1
//   //     } else {
//   //         dict[s[i]] += 1
//   //     }
//   // }

//   // for(let i = 0; i < t.length; i++) {
//   //     if(dict[t[i]] && dict[t[i]] !== 0) {
//   //         dict[t[i]] -= 1
//   //         count++
//   //     }
//   // }

//   // return count === s.length

//   //Hash Sort (O(N*LogN))

//   if(s.length !== t.length) return false

//   return reorder(s) === reorder(t)
// };

// const reorder = (string) => {
//   return string.split("").sort().join("")
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const freqS = new Array(26).fill(0)
  const freqT = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    freqS[s.charCodeAt(i) - 97]++
    freqT[t.charCodeAt(i) - 97]++
  }

  for (let i = 0; i < 26; i++) {
    if (freqS[i] !== freqT[i]) {
      return false
    }
  }

  return true
}

/**
 * Hash Map - Frequency Counter
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t, map = new Map()) => {
  const isEqual = s.length === t.length
  if (!isEqual) return false

  addFrequency(s, map) /* Time O(N) | Space O(N) */
  subtractFrequency(t, map) /* Time O(N) | Space O(N) */

  return checkFrequency(map) /* Time O(N) */
}

const addFrequency = (str, map) => {
  for (const char of str) {
    /* Time O(N) */
    const count = (map.get(char) || 0) + 1

    map.set(char, count) /* Space O(N) */
  }
}

const subtractFrequency = (str, map) => {
  for (const char of str) {
    /* Time O(N) */
    if (!map.has(char)) continue

    const count = map.get(char) - 1

    map.set(char, count) /* Space O(N) */
  }
}

const checkFrequency = (map) => {
  for (const [char, count] of map) {
    /* Time O(N) */
    const isEmpty = count === 0
    if (!isEmpty) return false
  }

  return true
}

// View on Github
/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * logN) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t) => {
  const isEqual = s.length === t.length
  if (!isEqual) return false

  return reorder(s) === reorder(t) /* Time O(N * logN) | Space O(N) */
}

const reorder = (str) =>
  str
    .split('') /* Time O(N)          | Space O(N) */
    .sort((a, b) =>
      a.localeCompare(b)
    ) /* Time O(N * log(N)) | Space O(1 || log(N)) */
    .join('') /* Time O(N)          | Space O(N) */
