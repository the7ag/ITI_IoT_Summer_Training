const minmaxValue = function(input)
{
    let result =[];
    if(input.length == 0)
    {
        return undefined;
    }
    min=Math.min(...input);
    max=Math.max(...input);
    result.push(min,max);
    return result;
}
const printArray = function(arr)
{
    arr.forEach(element => {
        console.log(element);
    });
}
const multiplyElements = function(arr,multi)
{
    let x=[...arr]
    for (let index in arr)
    {
        x[index]=x[index]*multi;
    }
    printArray(x);
}
const removeDublicates = function(arr)
{
    let result=[];
    for(let element of arr)
    {
        if(!result.includes(element))
        {
            result.push(element);
        }
    }
    return result;
}