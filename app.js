var express = require ('express');
var todocontroller = require('./public/controller/todocontroller');
//C:\Users\Owner\Desktop\TodoApp\public\controller

var app = express(); 


//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

// we are using the todo controller here so we can delete ,  post and stuff
todocontroller(app);


//localhost:300/assets/styles.css
//listen to a port
app.listen(3003);
console.log('We are listening to port 3003');