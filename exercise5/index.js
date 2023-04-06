let fs = require('fs');
const logger = require('./logger');
require('dotenv').config();
const cors = require('cors');
let express = require('express');
const app = express();
const {writeJSONData} = require('./utils/helper');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors({
    origin: ["https://136.226.250.189"]
}))

const buddyRoute = require('./router/route');
app.use("/buddy",buddyRoute);

app.use("/", (req,res,next) => {
    logger.error("invalid operation");
    res.send("this is error");
})

app.listen(process.env.PORT, ()=>{
    console.log("Server started at ",process.env.PORT);
    writeJSONData('./cdw_ace23_buddies.json',[],(err)=>{
        if(err)
            logger.error(err);
        else
            logger.error("created");
    });
})