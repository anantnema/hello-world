

var attachTitle = name => {
    return 'DR. ' + name;
}

var promise = new Promise((resolve, reject) => {
    resolve('MANHATTAN');
})



promise.then(attachTitle).then(console.log);

