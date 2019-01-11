function Spy(target, method) {
    // SOLUTION GOES HERE
    var originalFunction = target[method]
    var result = {
        count: 0
    }

    target[method] = function() {
        result.count++ ;
        return originalFunction.apply(this, arguments) 
    }

    return result
    }

  module.exports = Spy