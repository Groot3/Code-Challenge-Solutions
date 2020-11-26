// https://leetcode.com/problems/jewels-and-stones/
// 11/21/2020
// Calculate Jewels & Stones that are the same

MatchingString = function(J, S) {
    var StringsMatch = 0
    for (J of S) {
        if (J === S) {
            StringsMatch += 1
        }
    console.log(StringsMatch)
    }
}

MatchingString(("a","A"), ("a","A","A","b","b","b","b"))