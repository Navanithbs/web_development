var express=require("express");
var app=express();
var request=require("request");
    request('https://jsonplaceholder.typicode.com/users/',// ( https://jsonplaceholder.typicode.com/users/1 ) is used to select id=1
    function(error,response,body)
    {
        if(!error && response.statusCode == 200)
        {
            console.log(typeof body);
            //the body is in the string format
            var parseddata = JSON.parse(body);//used to convert string type into object type
            console.log(typeof parseddata);
            console.log(parseddata)
        }
        else{
            console.log("something went wrong..!!!!!!!")
        }
    });

    request('https://jsonplaceholder.typicode.com/users/1',
    function(error,response,body)
    {
        if(!error && response.statusCode == 200)
        {
            console.log(typeof body);
            var parseddata = JSON.parse(body);
            console.log(typeof parseddata);
            console.log(parseddata.name)
            console.log(parseddata.address.street)
            console.log("==================================================================================")
        }
        else{
            console.log("something went wrong..!!!!!!!")
        }
    });