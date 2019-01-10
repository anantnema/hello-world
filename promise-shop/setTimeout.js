function promiseTimeout(){
    setTimeout(()=>{
        console.log('TIMED OUT!');
    }, 300);
}

promiseTimeout();