function doubleAll(numbers) {
    var result = []
    

    numbers.map((res)=>{
        result.push(res*2);
    })
    return result;
  }

  module.exports = doubleAll