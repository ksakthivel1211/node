const express = require('express');
const router = express.Router();
let fs = require('fs');

// const buddyControl = require('../controllers/controller');

// router.get("/getAllBuddies",buddyControl.getAllBuddies);

// module.exports

router.post("/addBuddy",(req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
            const array = JSON.parse(data);
            array.push(req.body);
            fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify(array),(err) => {
                if(err)
                    console.log(err);
                else{
                    res.send(array);
                }
            });
        }
    });
});

router.get("/listAllBuddy",(req,res) => {
    fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
        if(err)
            console.log(err);
        else{
             res.send(data);
            }
    });
});

// router.post("/listBuddy",(req,res) => {
//     fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
//         if(err)
//             console.log(err);
//         else{
//             const array = JSON.parse(data);
//             array.push(req.body);
//             fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify(array),(err) => {
//                 if(err)
//                     console.log(err);
//                 else{
//                     res.send(array);
//                 }
//             });
//         }
//     });
// });

// router.post("/updateBuddy",(req,res) => {
//     fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
//         if(err)
//             console.log(err);
//         else{
//             const array = JSON.parse(data);
//             array.push(req.body);
//             fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify(array),(err) => {
//                 if(err)
//                     console.log(err);
//                 else{
//                     res.send(array);
//                 }
//             });
//         }
//     });
// });

// router.post("/deleteBuddy",(req,res) => {
//     fs.readFile('./cdw_ace23_buddies.json','UTF-8',(err,data) => {
//         if(err)
//             console.log(err);
//         else{
//             const array = JSON.parse(data);
//             array.push(req.body);
//             fs.writeFile('./cdw_ace23_buddies.json',JSON.stringify(array),(err) => {
//                 if(err)
//                     console.log(err);
//                 else{
//                     res.send(array);
//                 }
//             });
//         }
//     });
// });

module.exports = router;