// Sum Zero
// time complexity O(n log(n))
function addToZero(nums) {
    while (nums.length > 0) {
        const num = nums.pop()
        for (let i = 0; i < nums.length; i++) {
            const sum = nums[i] + num
            if (sum === 0){
                return true
            }
        }
    }
    return false
}
// console.log(addToZero([1, 0]))
// console.log(addToZero([0, 1, 0]))
// console.log(addToZero([1, 0, 5, 8, 23, 6, 7, 1, 9]))

// Unique Characters
// time complexity O(n log(n))
function hasUniqueChars(str) {
    const chars = str.split("")
    while (chars.length > 0) {
        const char = chars.pop()
        for (let i = 0; i < chars.length; i++) {
            if (char === chars[i]) {
                return false
            }
        }
    }
    return true
}
// console.log(hasUniqueChars('exiguous'))
// console.log(hasUniqueChars('uncopyrightable'))
// console.log(hasUniqueChars('dermatoglyphics'))


// Pangram Sentence
// time complexity O(n)
function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let removeWhite = /\s/g
    let lowerNoWhite = str.toLowerCase().replace(removeWhite, "")

    for(let i = 0; i < alphabet.length; i++) {
        if(lowerNoWhite.indexOf(alphabet[i]) === -1) {
            return false
        }
    }
    return true
}
// console.log(isPangram(
//     'The quick brown fox jumps over the lazy dog.'
//     ))
// console.log(isPangram(
//     'It was the best of times, it was the worst of times.'
//     ))

// Longest Word
function findLongestWord(arr) {
    let longestWord = 0

    for(let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const stringLength = str.length
        if(stringLength > longestWord){
            longestWord = stringLength
        }
    }
    return longestWord
}
// console.log(findLongestWord([
//     'if', 'splendid', 'jammies', 'This'
// ]))
// console.log(findLongestWord([
//     'if', 'splendid', 'jammies', 'This',
//     'that', 'maximum', 'tremendous'
// ]))