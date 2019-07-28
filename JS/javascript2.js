//myFunctionTest implemented as described
function myFunctionTest(exprected, get) {
    if (exprected == get()) return 'TEST SUCCEEDED';
    else return 'TEST FAILED. Expected ' + exprected + ' found ' + get();
}

//finding the max value
function max(a, b) {
    if (a > b) return a;
    else return b;
}

//finding the max of three number
function maxOfThree(a, b, c) {
    let max = a;
    if (max < b) max = b;
    if (max < c) max = c;
    return max;
}

//funding the vowel
function isVowel(v) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(v.toLowerCase()) !== -1
}

//adding all element of an array
function sum(array) {
    return array.reduce(function (prevValue, elem) {
        return prevValue + elem;
    });
}

//multiplying all element of an array
function multiply(array) {
    return array.reduce(function (prevValue, elem) {
        return prevValue * elem;
    });
}

//reversing a string
function reverse(str) {
    return str.split('').reduce(function (prevValue, elem) {
        return elem + prevValue;
    });
}

//find the larged word in an array
function findLongestWord(array) {
    let len = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > len) len = array[i].length;
    }

    return len;
}

//filter words by a specific length
function filterLongWords(array, len) {
    return array.filter(function (elem) {
        return elem.length > len;
    });
}

//using map to change all element of an array
function map(a) {

    return a.map(function (elem, i, array) {
        return elem * 10;
    });

}

//using filter to filter through an array
function filter(a) {
    return a.filter(function (elem, i, array) {
        return elem == 3;
    });
}

//using reduce to add all element of an array
function reduce(a) {
    return a.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
}


//testing all the function above
console.log("Expected output of max(20,10) is 20 and  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

console.log("Expected output of maxOfThree(5,4,44) is 44 and  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));

console.log("Expected output of isVowel(a) is true and  " + myFunctionTest(true, function () {
    return isVowel('a');
}));

console.log("Expected output of sum([1,2,3,4]) is 10 and  " + myFunctionTest(10, function () {
    return sum([1, 2, 3, 4]);
}));

console.log("Expected output of multiply([1,2,3,4]) is 24 and  " + myFunctionTest(24, function () {
    return multiply([1, 2, 3, 4]);
}));

console.log("Expected output of reverse('jag testar') is ratset gaj and  " + myFunctionTest("ratset gaj", function () {
    return reverse("jag testar");
}));

console.log("Expected output of findLongestWord(['as','bcde','uhher']) is 5 and  " + myFunctionTest(5, function () {
    return findLongestWord(['as', 'bcde', 'uhher']);
}));

console.log("Expected output of filterLongWords(['as','bcde','uhher'],3) is 'bcde','uhher'and  " + myFunctionTest(['bcde', 'uhher'], function () {
    return filterLongWords(['as', 'bcde', 'uhher'], 3);
}));

console.log("Expected output of map([1,3,5,3,3]) is 10,30,50,30,30 and  " + myFunctionTest([10, 30, 50, 30, 30], function () {
    return map([1, 3, 5, 3, 3]);
}));

console.log("Expected output of filter([1,3,5,3,3]) is 3,3,3 and  " + myFunctionTest([3, 3, 3], function () {
    return filter([1, 3, 5, 3, 3]);
}));

console.log("Expected output of reduce([1,3,5,3,3]) is and 15 " + myFunctionTest(15, function () {
    return reduce([1, 3, 5, 3, 3]);
}));