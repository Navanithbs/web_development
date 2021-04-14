var express = require("express")
var app=express()
var bodyparser=require("body-parser")
var mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/yelp_campground",{ useNewUrlParser: true , useUnifiedTopology: true })

var campgroundSchema=mongoose.Schema({
    name:String,
    img:String,
    desc:String
})

var Campground=mongoose.model("Campground",campgroundSchema)

//-------------------To add a new Campground-----------------------

// Campground.create({
//         name:"Camp",
//         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR27nLAKcwJ3OqrTpkF0sDrhf4tK4k8L3deFw&usqp=CAU",
//         desc:"This is a huge tent,No Bathrooms,Beautiful scenery"
//         },function(err,camps){
//         if(err){
//             console.log("err");
//         }else{
//             console.log("Camp added Successfully..!!!")
//             console.log(camps)
//         }
// })
//--------------------------------------------------------------------

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("landing")
})

app.get("/campground",function(req,res){
//------------------To get all campgrounds------------------------
    Campground.find({},function(err,allcamps){
        if(err){
            console.log(err)
        }else{
            res.render("campground",{index:allcamps})
        }
    })
})

app.post("/campground",function(req,res){
    var name=req.body.name
    var image=req.body.image
    var description=req.body.desc
    var newcamps={name:name, img:image,desc:description}
//------------------To add a new camps for Database--------------------
    Campground.create(newcamps,function(err,newcamps){
        if(err){
            console.log(err)
        }else{
            res.redirect("/campground")
        }
    })

})
//---------page To add a new camp--------------------
app.get("/campground/new",function(req,res){
    res.render("new")
})

//------Page to show description-------------
app.get("/campground/:id",function(req,res){
    Campground.findById(req.params.id, function(err, foundcamp){
        if(err){
                console.log(err)
                }
        else{
            res.render("show",{campground: foundcamp})
            }
    })
})

app.listen(9033,'localhost',function(){
    console.log("yelpcamp server started")
})
