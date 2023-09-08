const express = require('express');
const app = express();


app.get("/",function(req,res){
    res.sendFile(__dirname+"/path/idUser.html"); 
    
})
app.get("/idUser.js",function(req,res){
    res.sendFile(__dirname+"/path/id_user.js"); 
    
})

app.get("/getinfos.js",function(req,res){
    res.sendFile(__dirname+"/src/core/getinfos.js"); 
    
})

app.get("/api/apiGet.js",function(req,res){
    res.sendFile(__dirname+"/src/api/apiGet.js"); 
    
})


app.get("/home",function(req,res){
    res.sendFile(__dirname+'/path/index.html'); 
    
})






app.listen(8080,()=>{
    console.log("Servidor executando em http://127.0.0.1:8080/");
});

