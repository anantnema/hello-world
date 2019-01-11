function countWords(inputWords) {
    // SOLUTION GOES HERE
    var countedWords = inputWords.reduce((words, word)=>{
        if(word in words){
            words[word]++;
        }
        else{
            words[word]=1;
        }
        return words;
    },{})
    return countedWords;
  }

  module.exports = countWords