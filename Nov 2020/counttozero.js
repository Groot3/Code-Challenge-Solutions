// Daily Code Challenges by Leetcode
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// 11/20/2020

countToZero = function(num) {
    var repeats = 0
    while (num > 0) {
        if ((num % 2) == 0){
            repeats += 1
            num = num / 2
        }
        if ((num % 2) != 0){
            repeats += 1
            num -= 1
        }
    }
        console.log("The number of steps to reduce the number to zero was ", + repeats )
};

countToZero(5)