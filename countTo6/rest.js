module.exports = function average(...args) {
    let sum=0;
    args.forEach((arg)=>{
        sum=sum+arg;
    })
    return sum/args.length;
};