const express = require("express")
const app = express()


app.get("/home",function(req, res){
    console.log(req)
    res.send("hello")
})

app.get("/about",function(req, res){
    console.log(req)
    res.send("this is a web page")
})

app.get("/contact",function(req, res){
    console.log(req)
    res.send("info")
})

app.get("/default", function(req, res){
    console.log(req)
    res.send("this is the default page")
})




app.listen(3000,function(){
    console.log("your server is running on port 3000")
})

