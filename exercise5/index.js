
let fs = require('fs');
const logger = require('./utils/logger');
require('dotenv').config();
const cors = require('cors');
let express = require('express');
const {writeJSONData} = require('./utils/helper');
const buddyRoute = require('./router/route');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors({
    origin: ["https://136.226.250.189"]
}))

// directing to router
app.use("/buddy",buddyRoute);

// error directing
app.use("/", (req,res,next) => {
    logger.error("invalid operation");
    res.send("this is error");
})

// Starting PORT
app.listen(process.env.PORT, ()=>{
    console.log("Server started at ",process.env.PORT);

    if(!fs.existsSync('./cdw_ace23_buddies.json')){
        writeJSONData('./cdw_ace23_buddies.json',[],(err)=>{
            if(err)
                logger.error(err);
            else
                logger.error("created");
        });
    }
})