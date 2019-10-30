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
         console.log("***************************");
         z.forEach(function(y,i){
            console.log(i+":"+y);
         }
         )
     }
     else if(x === "delete"){
        var n=prompt("index to delete???")
        z.splice(n,1);
     }
    
     var x=prompt("what would you like to do???");

 }
 console.log("***************************");

 console.log("you quit the app!!tq:)");