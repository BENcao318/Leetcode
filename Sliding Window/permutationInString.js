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

// View on Github
/**
 * https://leetcode.com/problems/permutation-in-string/
 * Time O(N + (M - N)) | Space O(1)
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = (s1, s2) => {
  const isInvalid = s2.length < s1.length
  if (isInvalid) return false

  let [left, right] = [0, 0]
  const [s1FrequencyMap, s2FrequencyMap] = getFrequencyMaps(s1)

  while (right < s2.length) {
    addRightFrequency(s2, right, s2FrequencyMap)

    const window = right - left + 1
    const isPermutation =
      window === s1.length && isSame(s1FrequencyMap, s2FrequencyMap)
    if (isPermutation) return true

    const canSlide = s1.length <= window
    if (canSlide) {
      subtractLeftFrequency(s2, left, s2FrequencyMap)
      left++
    }

    right++
  }

  return false
}

const getFrequencyMaps = (s1) => {
  const [s1FrequencyMap, s2FrequencyMap] = new Array(2)
    .fill()
    .map(() => new Array(26).fill(0))

  for (const char of s1) s1FrequencyMap[getCode(char)]++

  return [s1FrequencyMap, s2FrequencyMap]
}

const getCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)

const addRightFrequency = (s, right, frequencyMap) => {
  const char = s[right]
  const index = getCode(char)

  frequencyMap[index]++

  return frequencyMap[index]
}

const subtractLeftFrequency = (s, left, frequencyMap) => {
  const char = s[left]
  const index = getCode(char)

  frequencyMap[index]--

  return frequencyMap[index]
}

const isSame = (a, b) => {
  for (let i = 0; i < 26; i++) {
    const isMatch = a[i] === b[i]
    if (!isMatch) return false
  }

  return true
}
