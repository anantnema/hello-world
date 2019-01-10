const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
    for (let i = 0; i < 3; i++) {
      console.log(results[i])
    }
  }

function httpget(index){
    http.get(process.argv[2+index], function(response){
        response.pipe(bl(function(err,data){
            if(err) console.log(err);
            results[index] = data.toString();
            count++;
            if(count==3) printResults();
        }))
    })
}

for (let i = 0; i < 3; i++) {
    httpget(i)
}