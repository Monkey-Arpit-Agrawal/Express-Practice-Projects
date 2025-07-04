// Given an array , return an array such that every element in the array is multiplied by 2 . Consider a numeric array .

let arr = [1,2,3,4,5] ;

// Approach - 1 :- Loop Approach

let arr1 = [] ;

for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i]*2) ;
}

console.log(arr1);

// Approach 2 :- For Each

let arr2 = [] ;

arr.forEach((e) => {
    arr2.push(e*2) ;
}) ;

console.log(arr2)

// Approach 3 :- Map

let arr3 = arr.map((element) => (element*2)) ;
console.log(arr3);

// Reduce Practice

let r1 = arr.reduce((acc,element) => (acc * element) , 1) ;
console.log(r1);

const items = [
  { name: 'Apple', price: 30 },
  { name: 'Banana', price: 10 },
  { name: 'Mango', price: 20 },
];

console.log(items.reduce((acc,ele) => (acc + ele.price),0)) 