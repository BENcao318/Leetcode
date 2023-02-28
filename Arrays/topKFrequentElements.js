/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Bucket sort
  const map = createMap(nums)
  const bucket = createBucket(map, nums)
  return getTopK(bucket, k)
}

const createMap = (nums, map = new Map()) => {
  for (const num of nums) {
    const count = (map.get(num) || 0) + 1
    map.set(num, count)
  }
  return map
}

const createBucket = (map, nums) => {
  const bucket = new Array(nums.length + 1).fill().map(() => [])
  for (const [num, count] of map.entries()) {
    bucket[count].push(num)
  }
  bucket.reverse()
  return bucket
}

const getTopK = (bucket, k, topK = []) => {
  for (const count of bucket) {
    for (const item of count) {
      if (topK.length === k) break
      topK.push(item)
    }
  }
  return topK
}
