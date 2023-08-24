/*
ARRAY
*/
let number=new Array(2 , 4 ,5);
// shortcut
let arr=[2,3,4,5,9];  //object

//for loops
//1- for 
for(let i=0 ; i<arr.length ; i++)
{
    console.log(arr[i]);
}
console.log('/********************************************/');
//2- for in
for(let index in arr)
{
    console.log(arr[index]);
}
console.log('/********************************************/');

// 3- for of
for(let index of arr)
{
    console.log(index);
}
console.log('/********************************************/');

//4- for each


//push pop splice join shift unshift indexof includes
/**
 * Call back Functions
 * they take item - index - array
 */
//let result=arr.filter(filterSucess);
/** */
let result = arr.filter(function(item){return item>6})

// arrow function  => === function 
const test = (input)=>{};
//if one input
const ase = input=>{};
// if one output
const np = input => " n["+input
/////////*****************Sort */
arr.sort();
/***********************+ve 1st big -ve 2nd big 0 equals */
arr.sort( (a,b) => { 
    if (a>b)
        return 1;
    else if (a<b)
        return -1;
    else
        return 0;
 } );
 ascending.sort( (a,b) =>  a-b  );

 arr.sort( (a,b) => b-a);