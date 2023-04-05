let {writeFile} = require('fs');

// file writing function 
let writeFileData=function (result){
   return new Promise((resolve,reject)=>{
    writeFile("randomColor.json", result, (err) => {
        if (err){
            console.log(err);
            reject("File not created..!!!");
        }
        else{
            resolve("File created successfully..!!!");
        }
    });
   })
}

module.exports={writeFileData};