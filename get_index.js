/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let result =[];
    for (let i = 0; i < nums.length; i++) {
     for (let j= 0; j <i; j++) {
     	let  elei = nums[i];
     	let elej = nums[j];
     	if (elej + elei == target) {
        
          result.push(j);
            result.push(i);
          return result;
     	}
     }
    }
};