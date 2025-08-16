
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

let hasMap = new Map()
for (let i = 0; i < nums.length + 1; i++) {

    hasMap.set(nums[i], i)
}
for (let i = 0; i < nums.length + 1; i++) {
    if (!hasMap.has(i)) {
        return i

    }
}
