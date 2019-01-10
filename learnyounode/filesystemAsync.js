var fs = require('fs');
var array;
var buf = fs.readFile(process.argv[2], 'utf8',(err,data)=>{
    array = data.split("\n").length -1;
    console.log(array);
});

