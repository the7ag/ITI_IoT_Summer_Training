let changeCase=function(input)
{
    result = '';
    for(let i=0 ; i<input.length ; i++)
    {
        if(input[i]==input[i].toLowerCase())
        {
            result += input[i].toUpperCase();
        }
        else
        {
            result += input[i].toLowerCase();
        }
    }
    return Result;
}
let setFirstLetterUpper=function(input)
{
    let result='';
    let splitInput = input.split(' ');
    for(let i = 0 ; i < splitInput.length ; i++)
    {
        result += splitInput[i][0].toUpperCase();
        for(let j = 1 ; j < splitInput[i].length ; j++)
        {
            result += splitInput[i][j].toLowerCase();
        }
        result += ' ';
    }
    return result;
}
let longestWord = function(input)
{
    let result='';
    let max=0;
    let splitInput = input.split(' ');
    for(let i=0 ; i < splitInput.length ; i++)
    {
        if(max < splitInput[i].length)
        {
            max = splitInput[i].length;
            result=splitInput[i];
        }
    }
    return result;
}