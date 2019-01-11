module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(total, item, index, arr) {
      total.push(fn.call(thisArg, item, index, arr))
      return total
    }, [])
  }