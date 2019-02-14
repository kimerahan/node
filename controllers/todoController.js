
const mysql = require('mysql');
// connection to mysql db
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : 'ratTunnel',
    database :'EmployeeDB'

});
mysqlConnection.connect((err) => {
    if(!err)
    console.log('DB connection success');
    else
    console.log('DB connection failed \n Error :'+JSON.stringify(err,undefined,2));
});
//
var bodyparser = require('body-parser');
//var data = [{item: 'get milk'},{item: 'walk dog'}];

var urlencodeParser = bodyparser.urlencoded({ extended: false });
var http = require('http');
var fs = require('fs')

module.exports = function(app){
 app.get('/employees',urlencodeParser,function(req,res){
//res.render('todo',{todos:data});

mysqlConnection.query('SELECT * FROM employee',(err,rows,fields)=>{
    if(!err)
    res.render('employees',{rows});
        else
        console.log(err);
        }) 
}); 
app.get('/todo',function(req,res){
        res.render('todo');
            
    });

app.post('/adddata',function(req,res){
    var createEmployee = {
        Name: req.body,Name,
        EmpCode: req.body,EmpCode,
        Salary: req.body,Salary,
        
       }
       // now the createStudent is an object you can use in your database insert logic.
       mysqlConnection.query('INSERT INTO employee SET ?', createEmployee, function (err, resp) {
         if (err) throw err;
         // if there are no errors send an OK message.
         //res.send('Save succesfull');
         console.log('saved successfully' + stringfy(res));
         reload();
       });



});
function reload(){
    $(document).ready(function(){
        location.reload();
    });
}

app.delete('/todo',function(req,res){

});

};