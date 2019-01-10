require('es6-promise');

var promise = Promise.resolve('SECRET VALUE');

promise = Promise.reject(new Error('REJECTED'));

promise.then(console.log);

promise.catch(function(err){
    console.log(err.message);
})