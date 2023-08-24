let numbers = [3,1,2,5,6,2,3,5,7,8];
/*****************1********************* */
console.log(minmaxValue(numbers));
console.log("/************************ */");
/*****************2***************************** */
printArray(numbers);
console.log("/************************ */");
/*****************3******************************* */
multiplyElements(numbers,5);
console.log("/************************ */");
/********************4********************************* */
let ascending =[...numbers];
console.log(ascending.sort( (a,b)=> a-b ));
console.log("/************************ */");
let descending =[...numbers];
console.log(descending.sort( (a,b)=> b-a ));
console.log("/************************ */");

/******************5*********************** */
console.log(removeDublicates(numbers));