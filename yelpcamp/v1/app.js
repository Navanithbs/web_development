var express = require("express")
var app=express()
var bodyparser=require("body-parser")
var camp=[
    {name:"Camp1",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQV-agHQXlLvfbHc8P3_XkrmoHf1YlFjMRYVQ&usqp=CAU"},
    {name:"Camp2",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR32GiXn_PUueM-MUGufBgY7jgpYbw9pi-Ug&usqp=CAU"},
    {name:"Camp3",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR27nLAKcwJ3OqrTpkF0sDrhf4tK4k8L3deFw&usqp=CAU"}
]
app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.render("landing")
})

app.get("/campground",function(req,res){

    res.render("campground",{campground:camp})
})
app.post("/campground",function(req,res){
    var name=req.body.name
    var image=req.body.image
    var newcamps={name:name, img:image}
    camp.push(newcamps)
    res.redirect("/campground")

})

app.get("/campground/new",function(req,res){
    res.render("new.ejs")
})

app.listen(9030,'localhost',function(){
    console.log("yelpcamp server started")
})
