const switchCase=function (input)
{
    let result="";
    for(let i=0;i<input.length;i++)
    {
        if(input[i]==input[i].toLowerCase())
        {
            result+=input[i].toUpperCase();
        }
        else
        {
            result+=input[i].toLowerCase();
        }
    }
    return result;
}
