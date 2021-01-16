// Two Sum
// 1/12/2021
// Groot

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

function nums (nums, target) {
    let place = 0
    let output = []
    for (num of nums) {
        console.log(num + ' ' + nums)
        for (layertwo of nums) {
            if (layertwo == num) {
                console.log("Skipping.")
            } else if (num + layertwo == target) {
                console.log(num + ' ' + layertwo + '=' + target)
                output.unshift(place)
                if (output[1] != undefined) {
                    console.log(output + " is the solution.")
                    return output
                }
            }
        }
        place++
        console.log(output)
    }
    
    
}


nums ([2,7,11,15],9)