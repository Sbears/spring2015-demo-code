var firstName = 'Chris';
var lastName = 'Rolfs';
var technologies = ['js', 'node', 'css'];

var chris = ['Chris', 'Rolfs', ['js', 'css']];
var manny = ['Manny', 'Navarro', ['everything']];

// accessing the full name? weird...
// chris[0] + ' ' + chris[1]

var chris = {
  firstName: 'Chris',
  lastName: 'Rolfs',
  technologies: ['js', 'css']
};
var manny = {
  firstName: 'Manny',
  lastName: 'Navarro',
  technologies: ['everything']
};

// chris.firstName + ' ' + chris.lastName

var vehicleFactory = function(wheels, color){
  return {
    wheels: wheels,
    color: color
  };
};

var myCar = vehicleFactory(4, 'green');
// myCar === {
//  wheels: 4,
//  color: 'green'
// }


var data = {
  source: 'google.com',
  results: 10,
  terms: ['a', 'b'],
  resultData: [
    {
      title: 'Result 1',
      score: 10,
      meta: {
        rating: 15
      }
    },
    {
      title: 'Result 2',
      score: 6,
      meta: {
        rating: 20,
        getMoreInformation: function(){
          return 'more information';
        }
      }
    }
  ]
};

var results = data.resultData[1].meta.getMoreInformation();

var prop = 'meta';
var results = data['resultData'][1][prop]['getMoreInformation']();


// console.log(a, b, x, y, (a === 10 || b === 20))
// if((a === 10 || b === 20) && (x !== 15 || y !== 15)){
//
// }
//
// var isLabelValid = a === 10;
// ...
// if( isLabelValid && isInputValid && ...)
