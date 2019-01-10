var fs = require('fs');
var path = require('path');
module.exports= function(folder,ext,callback){
    fs.readdir(folder,(err,list)=>{
        if(err){
            return callback(err);
        }
        
        list = list.filter(function(list){
            return path.extname(list)==='.' + ext;
        })

        callback(null,list);
       
    });
}  
    
    

