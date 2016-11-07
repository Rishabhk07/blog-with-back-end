/**
 * Created by rishabhkhanna on 07/11/16.
 */
const express = require("express");
const app = express();
const Parse  = require("parse/node");

const routes = {
   test : require('./routes/test'),
   index : require('./routes/index')
};

app.set('views' , __dirname + "/views");
app.set('view engine' , 'hbs');

app.use('/' ,express.static(__dirname + "/public"));

app.use('/test' , routes.test);
app.use('/',routes.index);

app.listen("3002", ()=>{
   console.log("Magic Happens at 3000");
});