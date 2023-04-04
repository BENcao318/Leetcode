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
