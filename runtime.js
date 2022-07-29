//? Here are my run times

//! extraLargeArray = doublerAppend (3.9872ms), doublerInster (702.3052ms)
//! largeArray = doublerAppend (463.4μs), doublerInster (8.1282ms)
//! mediumArray = doublerAppend (135.3μs), doublerInster (165.3μs)
//! smallArray = doublerAppend (108μs), doublerInster (45.3μs)
//! tinyArray = doublerAppend (84μs), doublerInster (34.5μs)

//! It seems push is faster in large data sets, because the computer dousn't need to reassign the value of each of the numbers, it just needs to count through them.
//! However, smaller data sets are faster with unshift, because all it needs to do is put it in the first space and reassign the value of the numbers, no counting needed!

const perf = require('execution-time')();

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);