//Merge is is also know as divide and conquer algo , we split an array, ort them and at last merge them 

//basic also foe merge sort 
//sort an unorderd list with mearg sort algo

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
}
const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log(mergeSort(arr));  
