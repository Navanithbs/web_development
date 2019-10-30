var z=[];
var x=prompt("what would you like to do???")
 while(x !== "quit")
 {
     if(x === "new")
     {  
         var zz=prompt("what to insert??");
         z.push(zz);
     }
     else if(x === "list")
     {
         console.log(z);
     }
    
     var x=prompt("what would you like to do???");

 }
 console.log("you quit the app!!tq:)");