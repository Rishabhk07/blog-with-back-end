/**
 * Created by rishabhkhanna on 07/11/16.
 */
const express = require("express");
const app = express();

app.use('/' , (req, res)=>{
  res.send("welcome to rishabh khanna's blog ");
});


app.listen("3000", ()=>{
   console.log("Magic Happens at 3000");
});