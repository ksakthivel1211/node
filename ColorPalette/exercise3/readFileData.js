let {readFile} = require('fs');

let readFileData=function(){
   return new Promise((resolve,reject)=>{
    readFile("randomColor.json",'utf-8', (err,data) => {
        if (err){
            console.log(err);
            reject("File not readed..!!!");
        }
        else{
            resolve(data);
        }
      
    });
   }).then(data=>{
    return data;
   })
}

module.exports={readFileData};