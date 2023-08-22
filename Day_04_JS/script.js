var number_1=2;
    number_2=10; //forbidden
//strings
var First_Name="Mohamed"; 
var Last_Name='Ali';
var My_Name=First_Name+' '+Last_Name+'The7ag';

var table="<table><tr><td>"+First_Name +" "+Last_Name+" </td></tr></table>"; // bad
console.log(table);
var table2 =`
<table>
    <tr>
        <td>
        ${First_Name} ${Last_Name}
        </td>
    </tr>
</table>
`;
console.log(table2);
