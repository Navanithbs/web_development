alert("hello");
var secretnum=5;
var x=prompt("Guess the number");
if(Number(x)===secretnum)
{
    alert("your guess is right");
}
if(Number(x)>secretnum)
{
    alert("too high!!");
}
if(Number(x)<secretnum)
{
    alert("too low!!");
}