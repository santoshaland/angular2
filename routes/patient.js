const mysql = require("mysql");
var express = require("express");
// var Joi =require("joi");
var patrouter =  express();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'mydatabase'
  });


var myData =[];
connection.connect();
patrouter.post("/",function(request, response){
    let ename = request.body.name;
    let eemail = request.body.email;
    let epass = request.body.password;
    let emobileno=request.body.mobileno; 
    let query = `insert into project(name,email,password,mobileno) values('${ename}', '${eemail}', '${epass}','${emobileno}')`;
    console.log(query);
    connection.query(query, function(err, result){
        if(err==null)
        {
           response.contentType("application/json");1
           response.send(JSON.stringify(result));
        }
        else
        {
           response.contentType("application/json");
           response.send(err); 
        }
    });
    
});

module.exports = patrouter;