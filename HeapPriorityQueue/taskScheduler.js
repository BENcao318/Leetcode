/**
 * https://leetcode.com/problems/task-scheduler/
 * Time O(N) | Space O(1)
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const frequencyMap = getFrequencyMap(tasks)
  const maxFrequency = getMaxFrequency(frequencyMap)
  const mostFrequentTask = getMostFrequentTask(frequencyMap, maxFrequency)
  const interval = (maxFrequency - 1) * (n + 1) + mostFrequentTask

  return Math.max(tasks.length, interval)
}

var getFrequencyMap = (tasks, frequencyMap = new Array(26).fill(0)) => {
  for (const task of tasks) {
    const index = task.charCodeAt(0) - 'A'.charCodeAt(0)

    frequencyMap[index]++
  }

  return frequencyMap
}

const getMaxFrequency = (frequencyMap, maxFrequency = 0) => {
  for (const frequency of frequencyMap) {
    maxFrequency = Math.max(maxFrequency, frequency)
  }

  return maxFrequency
}

const getMostFrequentTask = (
  frequencyMap,
  maxFrequency,
  mostFrequentTask = 0
) => {
  for (const frequency of frequencyMap) {
    const isSame = frequency === maxFrequency
    if (isSame) mostFrequentTask++
  }

  return mostFrequentTask
}
