var mymodule = require('./fsReadDir.js');
const folder = process.argv[2];
const ext = process.argv[3];
mymodule(folder, ext, (err,list)=>{
    if(err){
        return console.log(err);
    }
    list.forEach((list)=>{
        console.log(list);
    })
})