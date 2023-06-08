let arr = [4, 2, 5, 1, 5, 3, 2, 4, 7, 8, 10, 3, 4, 2, 5, 1, 9, 10];

//Sum of the array
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log( sum);

//Largest number in the array
let largest = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

//Unique numbers in the array
let unique = [];
for(let i = 0; i < arr.length; i++) {
    if(unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
    }
}
console.log(unique);

//Repeated numbers in the array
let counts = {};
for(let i = 0; i < arr.length; i++) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
}

let repeated = [];
for(let num in counts) {
    if(counts[num] > 1) {
        repeated.push(Number(num));
    }
}
console.log(repeated);
