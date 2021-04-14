var express = require("express")
var app = express()
var bodyparser = require("body-parser")
var mongoose = require("mongoose")
var methodoverride = require("method-override")

mongoose.connect("mongodb://localhost/blog",{ useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify :false })
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}))
app.use(methodoverride("_method"))

var blogschema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type : Date, default : Date.now}
})
var Blog= mongoose.model("Blog",blogschema)

// Blog.create({
//     title:"Blog",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqDimT4RhxxChNCFsFrGMwJSSqb92MsxCRjw&usqp=CAU",
//     body:"A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page."
// })

app.get("/",function(req,res){
    res.redirect("/blog")
})

app.get("/blog",function(req,res){
    Blog.find({},function(err,allblog){
        if(err)
        {console.log("Error")}
        else{    
            res.render("index",{blog:allblog});
            }
    })
})

app.get("/blog/new",function(req,res){
    res.render("new.ejs")
})

app.post("/blog",function(req,res){
    Blog.create(req.body.blog,function(err,newBlog){
        if(err){
            console.log("Error..!!!")
        }else{
            res.redirect("/blog")
        }
    })
})

app.get("/blog/:id",function(req,res){
    Blog.findById(req.params.id,function(err,id){
        if(err){console.log("ERROR")}
        else{
            res.render("show",{id:id})
        }
    })
})

app.get("/blog/:id/edit",function(req,res){
    Blog.findById(req.params.id,function(err,id){
        if(err){res.render("/blog/:id")}
        else{
            res.render("edit",{id:id})
        }
    })
})

app.put("/blog/:id",function(req,res){
    Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,id){
        if(err){console.log("Error")}
        else{
            res.redirect("/blog/"+req.params.id)
        }
    })
})

app.delete("/blog/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blog");
        } else {
            res.redirect("/blog");
        }
    });
 });

app.listen(9034,"localhost",function(){
    console.log("Blog server started...!!!!!!!")
            })
