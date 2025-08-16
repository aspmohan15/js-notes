const nums = [0, 0, 1, 20, 1, 1, 2, 2, 3, 3, 4]


let startvalue = nums[0]
for (i = 1; i < nums.length; i++) {
    // debugger
    if (nums[i] > startvalue) {
        startvalue = nums[i]
    }
}

console.log(startvalue);



