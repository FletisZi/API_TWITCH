const express = require('express');
const app = express();


app.get("/",function(req,res){
    res.sendFile(__dirname+"/path/idUser.html"); 
    
})

app.get("/home",function(req,res){
    res.sendFile(__dirname+'/index.html'); 
    
})

app.get("/getinfos.js",function(req,res){
    res.sendFile(__dirname+"/src/getinfos.js"); 
    
})

app.get("/apiGet.js",function(req,res){
    res.sendFile(__dirname+"/src/apiGet.js");     
})


app.get("/path/public/style.css",function(req,res){
    res.sendFile(__dirname+"/path/public/style.css");     
})







app.listen(8080,()=>{
    console.log("Servidor executando em http://localhost:8080/");
});

