// $(document).on('ready', function() {
    // var x = 2 + 2
    // // x = !x
    // // The '?' operator takes 3 operands
    // var condition1 = true;
    // if ( condition1 === true ){
    //     // do something
    //     x = 10;
    // } 
    // else {
    //     // do something else
    //     x = 10000;
    // }

    // x = ( condition1 ? 10 : 100000 )

    // var mapFunc = function(elem, ind){
    //     if ( ind % 2 === 0 ) {

    //         console.log('elem: ', elem)
    //         console.log(arguments[2])
    //         return elem + 1;
    //     }
    //     else { return elem; }
    // };
    // var myArray = [1,2,3,4,5];
    // var newArray = myArray.map(mapFunc)
    // elem : 1, index : 0, array : myArray
    // newArray == [2,3,4,5,6]
    // var myArray = ['hi','hellooo?', 'hey', 'HEY!'];
    // var newArray = myArray.filter(function(elem){
    //     if ( elem.length > 3 ) { return true; }
    //     else { return false; }
    // })
    // console.log(newArray)

    // var reduced = myArray.reduce(function(runningTotal, currentValue){
    //     console.log('total: ', runningTotal)
    //     console.log('current: ', currentValue)
    //     console.log('=======================')
    //     return {key : 'a value!'};
    // }, 5)
    // var myArray = ['a','b','c'];
    // myArray.forEach(function(elem){
    //     elem = 0; // this does nothing
    // })



    // var bob = {
    //     name : 'bob',
    //     sayHi : function(){
    //         var thatPerson = this;
    //         setTimeout(function(){
    //             console.log(thatPerson.name)
    //         }, 500)
    //     }
    // };
    // console.log( Math.floor(Math.random() * 10) )

    // var today = new Date()
    // var tomorrow = today.setDate(today.getDate()+1)

    // console.log('now! ', performance.now())
    // var start = performance.now()
    // // do stuff
    // var timeElapsed = performance.now() - start
    // setTimeout(function(){},1000);
    // var now = new Date();

    var bob = {
        'name'   : 'bob',
        'height' : 'tall',
    };    

    // console output
    // Object {name: "bob", height: "tall"}
    // var bobJSON = JSON.stringify(bob)
    // undefined
    // bobJSON
    // "{"name":"bob","height":"tall"}"
    // bobObj = JSON.parse(bobJSON)
    // Object {name: "bob", height: "tall"}
    // bobObj
    // Object {name: "bob", height: "tall"}

    // var newArray = [].map.call('hello!',function(elem){
    //    return elem
    // })

    // var newArray = [].map.apply('hello!', [function(elem){
    //    return elem
    // }])

    var bob = {
        name : 'bob',
        sayHi : function(){
            console.log(this.name)
        }
    }
    var jeff = {
        name : 'jeff'
    }
    var boundFunc = bob.sayHi.bind(jeff)

    // myVar[1]; // valid whether myVar is a string or array
    // DOES NOT WORK! Strings have no 'map' method.
    // var hi = 'hello!';
    // hi.map(function(elem){
    //     return elem
    // })

// });
