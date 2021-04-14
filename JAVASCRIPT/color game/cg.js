var numsq=6;
var colors=generateRandclr(numsq);
var sq=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var clr=document.getElementById("clr");
var xyz=document.getElementById("xyz");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
easy.addEventListener("click",function()
{
    easy.classList.add("select")
    hard.classList.remove("select")
    numsq=3;
    colors= generateRandclr(numsq);
    pickedcolor=pickcolor();
    clr.textContent=pickedcolor;
    for(var i=0;i<sq.length;i++)
    {
        if(colors[i]){
            sq[i].style.background=colors[i];
        }
        else{
            sq[i].style.background="none";

        }
        
    }
    h1.style.background=' aquamarine';
});

hard.addEventListener("click",function()
{
    easy.classList.remove("select")
    hard.classList.add("select")
    colors= generateRandclr(numsq)
    pickedcolor=pickcolor();
    clr.textContent=pickedcolor;
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background=colors[i];
    }
    h1.style.background=' aquamarine';
});
reset.addEventListener("click",function(){
    colors= generateRandclr(numsq)
    pickedcolor=pickcolor();
    clr.textContent=pickedcolor;
    xyz.textContent="";
    this.textContent="new colors";


    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background=colors[i];
    }
    h1.style.background=' aquamarine';
});
for(var i=0;i<sq.length;i++)
{
    sq[i].style.background=colors[i];
    sq[i].addEventListener("click",function()
    {
        var clickcolor=this.style.background;
        if(clickcolor===pickedcolor)
        {
            clr.textContent=pickedcolor;
            xyz.textContent="correct:)";
            color(clickcolor);
            h1.style.background=pickedcolor;
            reset.textContent="playagain!!";
        }
        else{
                this.style.background='black';
                xyz.textContent="Try again! :(";

        }
    });
}
function color(color){
    for(var i=0;i<sq.length;i++)
    {
        sq[i].style.background=color;
    }
}
function pickcolor(){
   var x=Math.floor(Math.random()*6+1)
   return colors[x];
}

function generateRandclr(num)
{
    for(var i=0;i<num;i++)
    {
        var arr = [];
        for(var i=0;i<num;i++)
        {
            arr.push(randclr());
        }
        return arr;
    }
}

function randclr()
{
    var r=Math.floor(Math.random()*256)
    var g=Math.floor(Math.random()*256)
    var b=Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b +")";
}