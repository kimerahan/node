var express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mysql = require('mysql');
var todoController = require('./controllers/todoController');  
var app = express();

//handle bars
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

var bodyparser = require('body-parser');
var urlencodeParser = bodyparser.urlencoded({ extended: false });
//set up template engine
//app.set('view engine','ejs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(__dirname + './public'));
app.use('/assets',express.static('assets'));
//using sequelize

//Database
const db = require('./config/database');

  //test db
db.authenticate()
.then(() => console.log('Sequelise Database connected....'))
.catch(err => console.log('Error:'+err))
  
//app.get('/',(req,res) => res.send('INDEX'));

//sequel routes
//app.use('/seq' ,require('./routes/seqroute'))

// Index route
app.get('/', (req, res) => res.render('employees', { layout: 'landing' }));

// Gig routes


app.use('/employees', require('./routes/employees'));

app.use('/departments', require('./routes/departments'));
app.use('/branch', require('./routes/branch'));

todoController(app);
app.listen(3000);
console.log('listening to 3000');

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
app.post('/add',urlencodeParser,function(req,res){
    //mysqlConnection.query( "INSERT INTO employee (EmpID,Name,EmpCode,Salary) VALUES ('khan','H37' ,'1237')");
    //console.log('saved successfully');
       // now the createStudent is an object you can use in your database insert logic.
       var sql = "INSERT INTO `employee`(`EmpID`,`Name`, `EmpCode`, `Salary`) VALUES ('"+req.body.EmpID+"','"+req.body.Name+"','"+req.body.EmpCode+"','"+req.body.Salary+"')";
       mysqlConnection.query(sql, function(err, result)  {
   if(err) throw err;
   console.log('saved successfully' );
   console.log("table created");

   mysqlConnection.query('SELECT * FROM employee',(err,rows,fields)=>{
    if(!err)
    res.render('employees',{rows});
        else
        console.log(err);
        }) 
   
  });
      /*  mysqlConnection.query('INSERT INTO employee SET ?', createEmployee, function (err, resp) {
         if (err) throw err;
         // if there are no errors send an OK message.
         //res.send('Save succesfull');
         console.log('saved successfully' + stringfy(res));
         reload();
       }); 
 */


});

