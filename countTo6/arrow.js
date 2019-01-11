var inputs = process.argv.slice(2);
var res = [];
var result = inputs.map((word)=>{
                return word[0]
                })
                .reduce((total,word)=>{
                    return total+word;
                });
console.log(`[${inputs}] becomes "${result}"`);
module.exports = result;