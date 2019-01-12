
function foo(){
    quux=1;
    var bar;
    return function zip(){
        var quux=2;
        bar=true;
    }
}