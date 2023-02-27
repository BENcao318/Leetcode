/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (words, map = new Map()) {
  if (!words.length) return []

  groupWords(words, map)

  return [...map.values()] //Time O(N * (K * Log(K)))
}

const reorder = (word) => {
  return word.split('').sort().join('')
}

const groupWords = (words, map) => {
  //Time O(K * Log(K))
  for (const word of words) {
    const sorted = reorder(word)
    const values = map.get(sorted) || []

    values.push(word)
    map.set(sorted, values)
  }
}
