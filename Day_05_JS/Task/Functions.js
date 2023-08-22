let Task1=function(input)
{
    Result = '';
    for(let i=0 ; i<input.length ; i++)
    {
        if(input[i]==input[i].toLowerCase())
        {
            Result += input[i].toUpperCase();
        }
        else
        {
            Result += input[i].toLowerCase();
        }
    }
    return Result;
}
let Task2=function(input)
{
    let Result='';
    let splitInput = input.split(' ');
    for(let i = 0 ; i < splitInput.length ; i++)
    {
        Result += splitInput[i][0].toUpperCase();
        for(let j = 1 ; j < splitInput[i].length ; j++)
        {
            Result += splitInput[i][j].toLowerCase();
        }
        Result += ' ';
    }
    return Result;
}
let Task3 = function(input)
{
    let Result='';
    let max=0;
    let splitInput = input.split(' ');
    for(let i=0 ; i < splitInput.length ; i++)
    {
        if(max < splitInput[i].length)
        {
            max = splitInput[i].length;
            Result=splitInput[i];
        }
    }
    return Result;
}