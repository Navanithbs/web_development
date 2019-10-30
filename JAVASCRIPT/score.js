var b1=document.querySelector("#p1");
var b2=document.querySelector("#p2");
var b3=document.querySelector("#res");
var s1=document.querySelector("#xy");
var s2=document.querySelector("#yz");
var inp=document.querySelector("input");
var xx=document.querySelector("#ip");
var gameover=false;
var winscore=inp.value;
var x=0;
var y=0;

b1.addEventListener("click",function(){
    if(!gameover)
    {
        x++;
        s1.textContent=x;
        if(x === winscore)
        {
            console.log(x, winscore)
            xy.classList.add("win")
            gameover = true;
        }
    }
});
b2.addEventListener("click",function(){
    if(!gameover)
    {
        y++;
        s2.textContent=y;
        if(y === winscore)
        {
            yz.classList.add("win")
            gameover = true;
        }
    } 
});
b3.addEventListener("click",function()
{
    gameover = false;
    x=0;
    y=0;
    xy.textContent=0;
    yz.textContent=0;
    xy.classList.remove("win")
    yz.classList.remove("win")

});
inp.addEventListener("change",function(){
    xx.textContent=inp.value;
})