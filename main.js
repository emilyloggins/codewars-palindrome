let str = "racecar";

let checkPalindrome = function(string) {
    let reversed = [];
    for (let i = string.length -1; i >= 0; i--) {
        reversed.push(string[i]);
    }
    console.log(reversed.join("") === string);
}

checkPalindrome(str);