var peopleEls = [] 
var Person = (function(){

    var Person = function(name, language){
        this.name = name;
        this.language = language;
        this.$el = $('<div class="listen-for-clicks">' + this.name);
        // this.el = '<div class="listen-for-clicks">Steve</div>'
        peopleEls.push(this.$el);
        Object.observe(this, function(){
            Person.render();
        })

    }
    // myName is a private method. It is only accessible from the sayHi method
    var myName = function(that){
        return that.name;
    }
    // sayHi has closure over myName. Because sayHi refers to myName, myName will NOT be garbage-collected after this IIFE (immediately invoked function expression) executes. 
    Person.prototype.sayHi = function(){
        console.log(myName(this) + ' says hi.')
    }
    return Person
})()

// var Person = function(name, language){
//     this.name = name;
//     this.language = language;
//     this.$el = $('<div class="listen-for-clicks">' + this.name);
//     // this.el = '<div class="listen-for-clicks">Steve</div>'
//     peopleEls.push(this.$el);
//     Object.observe(this, function(){
//         Person.render();
//     })
// }
// // myName is a private method. It 
// var myName = function(that){
//     return that.name;
// }
// Person.prototype.sayHi = function(){
//     console.log(myName(this) + ' says hi.')
// }

// this is a static method. It belongs to the person class, but not any specific person object
Person.render = function(){
    $mainContent = $('#main-content');
    $mainContent.empty();
    for ( var i = 0; i < people.length; i++ ) {
        $mainContent.append(peopleEls[i]);
    }
}

var steve = new Person('steve');
var jane = new Person('jane');

steve.name = 'Steve';
var myObj = {};
var myObj = new Object();

var Programmer = function(name, language, os){
    // var this = {}; // this is what the 'new' keyword does
    Person.call(this, name, language)
    this.os = os;
    // return this; // this is what the 'new' keyword does
}
Programmer.prototype = new Person();
Programmer.prototype.constructor = Programmer;
Programmer.prototype.program = function(){
    console.log('write some code!');
}
var raine = new Programmer('Raine');
var raine = new Programmer.prototype.constructor('Raine'); // does the same thing as above
raine.sayHi();
raine.myName(); // undefined
console.log(raine.constructor) // logs Programmer


$(document).on('ready', function() {
    $(document).on('click', '.listen-for-clicks', function(){
        console.log('this is a delegated event');
        console.log('you clicked on this guy: ', $(this))
    })



    $.ajax() // an example of a static method. This belongs to the jQUery class, but not to a specific jQuery object.
});


