/*

var twoSum = function(nums, target) {

    for(let i=0; i<nums.length; i++) {
        var j= nums.length-1;
        while(j>0) {
            if(nums[i]+nums[j] == target) {
                let firstNumber = indexOf(nums[i]);
                let secondNumber = indexOf(nums[i+1]);
                let returnNumbers = {firstNumber, secondNumber};
                return returnNumbers;
            }
            j = j-1;
        }      
    }
};

let array1=[2,7,11,15];
twoSum(array1, 10);
*/

var twoSum = function(nums, target) {
    for(i=0; i<nums.length; i++) {
        for(j=0; j<nums.length; j++) {
           let result =nums[i] + nums[j+1]
           if(result == target) {
               let numIndex1 = i;
               let numIndex2 = j+1;
               let output = { numIndex1, numIndex2};
               return output;
            }
           }
        }
    };

let array1=[15,11,2,7];
let answer =twoSum(array1, 9);
console.log(answer);