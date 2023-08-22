// console.log(number_1); error
/*
let number_1=1;
const number_2=10;

for(let i=0;i<3;i++)
{
    console.log(i);
}

let instructorName="MEME"; // no exception because different scope

if(true)
{
    let instructorName="Mohamed";
}
*/
/************Function Blocks ***************/
//1-Function declaration
//2-Function Expression
//3- anonymous function (callback Functions)
//4- ES6 Arrow Function
//5- IIFE Functions
/*
/*********************** *****************/
//1-Function declaration 
/*
function sum(x,y)
{
    return x+y;
}
//2- function calling
let result=sum(5,3);
console.log(result);
/****************************************/
/*
// 2- function Expression
let x=function(x,y,z)
{
    return x+y+z;
}
console.log(x(3,3,3));
/****************************************/
// functions cannot be overloaded
//function sum(x,y,z) wrong
/*
function summ (x,y)
{
    var z=10; // local var only in function 
}
/**************************************** */
/*
let instructor1=new String('MOHAMED');
let instructor2=new String('MOHAMED');
/******************************************/
