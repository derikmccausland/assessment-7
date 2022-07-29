const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] ===0) {
                return true
            }
        }
    }
    return false
}
//! I think this will be an O(n2)

const hasUniqueChars = str => {
    let arr1 = str.split('')
    let arr2 = [... new Set(arr1)]
    if(arr1.length === arr2.length){
        return true
    } else {
        return false  
    }
    
}
//! I think this will be an O(1)

const isPangram = str => {
    let simple = str.split(' ').join('').toLowerCase().replaceAll('!')
    let arr1 = [... new Set(simple)]
    if(arr1.length === 26){
        return true
    } else {
        return false  
    }
    
}
//! I think this will be an O(n)

const findLongestWord = arr => {
    let longest = 0
    arr.forEach((word) => {
        longest = (word.length > longest) ? word.length : longest
    })

    return longest
}
//! I think this will be an O(1)

console.log(addToZero([1, 3, -2]))
console.log(hasUniqueChars('moonday'))
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(findLongestWord(["hi", "hello"]))