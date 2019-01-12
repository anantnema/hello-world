function *factorial(n){
    // your code here
    let fact = 1;
    let t=1;
    while(t<=n){
        yield fact = fact * t;
        t++;
    }
  }

  for (var n of factorial(5)) {
    console.log(n)
  }