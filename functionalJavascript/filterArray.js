function getShortMessages(messages) {
    let result = [];
    messages.map((res)=>{
        if(res.message.length<50){
            result.push(res.message);
        }
    })
    return result;
  }

  module.exports = getShortMessages