"use strict";

function myFunctionTest(exprected, gets) {
    const get = gets();
    console.log(get);
    if (exprected == get) return 'TEST SUCCEEDED';
    else return 'TEST FAILED. Expected ' + exprected + ' found ' + get;
}

//reverse an array using a new array
function reverseArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

//reverse an array without using new array
function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let first = array[i];
        let last = array[array.length - i - 1];
        array[i] = last;
        array[array.length - i - 1] = first;
    }
    return array;
}

//convert array to list with help of prepend()
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    return list;
}

//helper for arrayToList()
function prepend(item, list) {
    return {
        value: item,
        rest: list
    };
}

//convert list to array
function listToArray(list) {
    let array = [];
    while (list) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

//helper for nth
function nthHelper(list, index, currentIndex) {
    if (index === currentIndex) {
        return list.value;
    }
    if (list.rest) {
        return nthHelper(list.rest, index, ++currentIndex);
    }
    return undefined;
}

//find the nth value of a list
function nth(list, index) {
    return nthHelper(list, index, 0);
}

//compare two object by going to the deep
function deepEqual(obj1, obj2) {
    if (obj1 && obj2 && typeof obj1 === "object" && typeof obj2 === "object") {
        for (let key in obj1) {
            return true && deepEqual(obj1[key], obj2[key]);
        }
    } else if (obj1 && obj2 && typeof obj1 !== "object" && typeof obj2 !== "object") {
        return obj2 === obj2;
    } else {
        return false;
    }
}

//testing all functions
console.log("Expected output of reverseArray(['A','B','C']) is ['C','B','A'] and  " + myFunctionTest(['C', 'B', 'A'], function () {
    return reverseArray(['A', 'B', 'C']);
}));

console.log("Expected output of reverseArray([1,2,3,4,5]) is [5,4,3,2,1] and  " + myFunctionTest([5, 4, 3, 2, 1], function () {
    return reverseArrayInPlace([1, 2, 3, 4, 5]);
}));

let obj = {
    object: 1,
    object: 2
};
console.log("Expected output of deepEqual(obj, obj) is true and " + myFunctionTest(true, function () {
    return deepEqual(obj, obj);
}));

console.log("Expected output of arrayToList([10, 20] is complicated and " + myFunctionTest("complicated", function () {
    return arrayToList([10, 20]);
}));

console.log("Expected output of listToArray(arrayToList([10, 20]) is [10, 20] and " + myFunctionTest([10, 20], function () {
    return listToArray(arrayToList([10, 20]));
}));

console.log("Expected output of listToArray(arrayToList([10, 20]) is [10, 20] and " + myFunctionTest([10, 20], function () {
    return listToArray(arrayToList([10, 20]));
}));

console.log("Expected output of listToArray(arrayToList([10, 20]) is [10, 20] and " + myFunctionTest([10, 20], function () {
    return listToArray(arrayToList([10, 20]));
}));

console.log("Expected output of nth(arrayToList([10, 20, 30]), 1) is 20 and " + myFunctionTest(20, function () {
    return nth(arrayToList([10, 20, 30]), 1);
}));