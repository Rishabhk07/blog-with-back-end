/**
 * Created by rishabhkhanna on 08/11/16.
 */

const express = require("express");
const route = express.Router();
const Parse = require("Parse/node");


    route.get("/", (req , res )=> {
    Parse.initialize("yx2tmAu3o5Q6oxwWn0bnvWr5yctisAlFx8YyNxZq", "UQ3Aj8OIejL7DfTrwSmtEESXkMeSFMNOQQ50SwUc");

    Parse.serverURL = 'https://parseapi.back4app.com/';
    var test = Parse.Object.extend("Test");
    var testOject = new test();
    testOject.save({foo: "bar"}).then(()=> {
        res.send("yay it worked");
    });
});

module.exports = route;