var counterConstructor = function(){
    var x = 0;
    var counter = function(){
        return x++;
    };

    return counter;
};

var myCounter = counterConstructor();
myCounter();
myCounter();
myCounter();

var yourCounter = counterConstructor();
myCounter();
yourCounter();
yourCounter();
myCounter();
myCounter();
yourCounter();
