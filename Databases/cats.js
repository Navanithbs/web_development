var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/cat_app")
var catschema=new mongoose.Schema({
    name:String,
    age:Number,
});
var Cat=mongoose.model("Cat",catschema);

//-------------------Adding a new cat---------------------

var siri=new Cat({
    name:"Snowy",
    age:10
});


siri.save(function(err,cat){               //here cat is a variable which is collecting the data from the database
    if(err){
        console.log("Something went wrong");
    }
    else{
        console.log("We saved a Cat to the Database");
        console.log(cat);

    }
})

//---------another meathod of adding a cat--------------

Cat.create({
    name:"Jerry",
    age:5
    },function(err,cat){               //here cat is a variable which is collecting the data from the database
    if(err){
        console.log("Something went wrong");
    }
    else{
        console.log("We saved a Cat to the Database");
        console.log(cat);
        };     //here it saves directly no need to use .save() again
    });

//----------------Retrieve all cats from DB----------------

Cat.find({},function(err,cats){
    if(err){
        console.log("something went wrong..!!!!")
        console.log(err)
    }
    else{
        console.log("All the Cats............");
        console.log(cats)
    }
})