/**
 * Created by rishabhkhanna on 08/11/16.
 */
const express = require("express");
const route = express.Router();

route.use("/" , (req , res)=>{
   res.render('index');
});

module.exports = route;