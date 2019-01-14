function *upper (items) {
    // your code goes here
  
       for(var item of items){
           try{
               yield item.toUpperCase();
           }
           catch{
               yield null;
           }
       }
   
  }

  var bad_items = ['a', 'B', 1, 'c'];

  for (var item of upper(bad_items)) {
    console.log(item);
  }

  