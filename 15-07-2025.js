/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {

    this.prefixSumArray = [];
    let value = 0;
    for (let i = 0; i < nums.length; i++) {
        value += nums[i]
        this.prefixSumArray.push(value)
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSumArray[right] - this.prefixSumArray[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */


const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

console.log({ numArray: numArray.sumRange(0, 2) });
