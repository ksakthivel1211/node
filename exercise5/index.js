let http = require('http');
let url = require('url');
let fs = require('fs');

let express = require('express');
const app = express();

const port = 4008;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const buddyRoute = require('./router/route');
app.use("/buddy",buddyRoute);

app.use("/", (req,res,next) => {
    res.send("this is error");
})

app.listen(port, ()=>{
    console.log("Server started at ",port);
    fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify([]),(err)=>{
        if(err)
            console.log(err);
        else
            console.log("Hi");
    });
})