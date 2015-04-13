// Exploring context (this):

var counter = {
  iteration: 0,
  increment: function(){
    this.iteration++;
    console.log('counter.increment:', this);
  }
};

console.log('global:', this);

counter.increment();
counter.increment();
counter.increment();

// Context is lost because the function
// is being called in the context of the
// window.
// var inc = counter.increment;
// inc();


var testOuter = {
  specialProp: 'i am special',
  funk: function(){
    console.log('testOuter:', this);

    var innerFunk = function(){
      console.log('innerFunk:', this);
    };
    innerFunk();
  },
  funk2: {
    funk3: function(){
      console.log('funk3:', this);
    }
  }
};

testOuter.funk();
// var middleman = testOuter.funk;
// middleman();

testOuter.funk2.funk3();

var middleman = testOuter.funk2;
middleman.funk3();



// jQuery Example:
var setColor = function(element, color){
  element.css('color', color);
};

$(document).on('ready', function(){
  $('#test-button').on('click', function(){
    console.log(this);
    // setColor($(this), 'red');
    var originalButton = this;

    var newButton = $('<button>')
      .text('new button')
      .on('click', function(){
        console.log(this, originalButton);
      })
      .appendTo('body');
  });
});


$(document).on('ready', function(){
  $('.editable').on('click', function(){
    console.log(this);

    var originalField = $(this);

    // Hide the original element
    originalField.hide();

    // Create a new textarea after the original element
    var editor = $('<textarea>')
      .width(originalField.width())
      .height(originalField.height())
      .val(originalField.text());
    originalField.after(editor);

    // added bonus!
    editor.focus();

    // When you click outside of the
    // textarea and it loses focus...
    editor.on('blur', function(){

      var newText = $(this).val();
      $(this).remove();

      originalField
        .text(newText)
        .show();
    });
  });
});


// Forcing context:
var printPerson = function(mood, shoes){
  console.log('Person:', this, mood, shoes);
};
var person1 = {name: 'Chris', color: 'blue'};
printPerson();

// Controlling context via call:
printPerson.call(person1, 'happy', 'yes');

// Controlling context via apply:
printPerson.apply(person1, ['happy', 'of course']);


// Using Math.max:
console.log(Math.max(1, 2, 5, 10, 4));

var numArr = [1, 3, 20, 14, 2];
console.log(Math.max(numArr));

// No need for a context, but being able
// to pass an array as argument? Tops.
console.log(Math.max.apply(null, numArr));



// Being able to force a context "forever":
var printData = function(){
  console.log('Data:', this);
};
var data1 = {
  numbers: 'important',
  tpsReports: 'filed',
  synergy: 'met'
};

printData.call(data1);

// Using bind:
var fixedPrintData = printData.bind(data1);
console.log(fixedPrintData);

// Example of what bind might look like:
var myBind = function(func, context){
  return function(){
    func.apply(context, arguments);
  };
};
var fixedPrintData = myBind(printData, data1);
fixedPrintData();
