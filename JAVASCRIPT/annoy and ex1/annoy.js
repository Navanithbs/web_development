// var x=prompt("are we there yet??")
// while(x !=="yes"&&x !=="yeah")
// {
//     var x = prompt("are we there yet??")
// }
// alert("yeh,we made it!!!")

//version 2
var x=prompt("are we there yet??")
while(x.indexOf("yes")===-1)//or while(x.indexOf("yes"))
{
    var x = prompt("are we there yet??")
}
alert("yeh,we made it!!!")
