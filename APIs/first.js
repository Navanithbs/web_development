var express=require("express");
var app=express();
var request=require("request");
    request('https://www.google.com/',
    function(error,response,body)
    {
        if(!error && response.statusCode == 200)
        {
            console.log(body);
        }
        else{
            console.log("something went wrong..!!!!!!!")
        }
    });
