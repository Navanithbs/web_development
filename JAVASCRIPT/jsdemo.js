var body = document.querySelector("body");
var isblue=false;

setInterval(
function()
{
    if(isblue)
    {body.style.background = "white";}
    else
    {body.style.background = "blue";}
    isblue=!isblue
}
,2000);