let images1=document.getElementsByTagName("img");
console.log(images1);
images1=document.querySelectorAll('img');
console.log(images1);
/*************************************************************************************** */
let select=document.querySelector('select[name="City"]');
for(let i=0;i<select.options.length ; i++)
{
    console.log(select.options[i].text);
}
/****************************************************************************************** */
let table=document.querySelectorAll('table[class="bPink"] tr');
console.log(table);
/***************************************************************************************** */
let fontBLUE=document.getElementsByClassName('fontBlue');
console.log(fontBLUE);
/*********************************************************************************** */
let para=document.getElementsByTagName('p')
console.log(para);
/***************************************************************************************/
let anchor=document.querySelectorAll("table[class=bPink] tr td>a")
for(let i=0;i<anchor.length;i++)
{
    anchor[i].href='trainning.com';
    anchor[i].innerHTML='Trainning';
}
/***************************************************************************** */
for(let i=0;i<images1.length;i++)
{
    images1[i].style.border='2px solid pink';
}
/*********************************************************************************** */
let checkbox = document.querySelectorAll("input[type=checkbox]:checked");
for(let i=0;i<checkbox.length;i++)
{
    alert(checkbox[i].value);
}
/****************************************************************************** */
let example=document.getElementById('example');
example.style.backgroundColor='pink';
/************************************************************ */