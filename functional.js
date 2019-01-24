// This example shows functional programming. 
// We create a function that loops through an array and pushes to a new array.
// We can then use this function to do different work when we call it.

function mapForEach(arr, fn) {
    newArray = [];
    for(i=0; i < arr.length; i++) {
        newArray.push(
            fn(arr[i])
        )
    }
    return newArray;
}

var arr1 = [1, 2, 3]

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})
var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
})
console.log(arr2);
console.log(arr3);