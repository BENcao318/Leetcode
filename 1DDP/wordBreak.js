/**
 * DP - Bottom Up
 * Array - Tabulation
 * Hash Set - Distinct Keys
 * Time O(N^3) | Space O(N)
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = (s, wordDict) => {
  const wordSet = new Set(wordDict) /* Time O(N)         | Space O(N) */
  const tabu = initTabu(s) /*                   | Space O(N) */

  canBreak(s, wordSet, tabu) /* Time O(N * N * N) | Space O(N) */

  return tabu[s.length]
}

const initTabu = (s) => {
  const tabu = new Array(s.length + 1).fill(false) /* Space O(N) */

  tabu[0] = true

  return tabu
}

var canBreak = (s, wordSet, tabu) => {
  for (let end = 1; end <= s.length; end++) {
    /* Time O(N) */
    checkWord(s, wordSet, end, tabu) /* Time O(N * N) | Space O(N) */
  }
}

var checkWord = (s, wordSet, end, tabu) => {
  for (let start = 0; start < end; start++) {
    /* Time O(N) */
    const word = s.slice(start, end) /* Time O(N) | Space O(N) */

    const canBreak = tabu[start] && wordSet.has(word)
    if (!canBreak) continue

    tabu[end] = true

    return
  }
}
