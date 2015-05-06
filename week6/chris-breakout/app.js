var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Just for messing around with dynamic "theming"
var currentTheme = 'theme2';

/*
 * Helper function for generating a unique id
 * This uses closure to retain access to a "counter"
 * variable that will be utilized by the function
 * returned here.
 */
var uniqueId = (function(){
  var counter = 0;
  return function(prefix){
    return (prefix || '') + (counter++);
  };
})();

/*
 * Helper for finding an item in an array by its
 * id field.
 */
var find = function(arr, id){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].id === id){
      return arr[i];
    }
  }
  return null;
};

/*
 * Our original set of juices, each with their own
 * unique id.
 */
var juices = [
  {id: uniqueId('juice_'), name: 'Mean Green', ingredients: ['Kale', 'Spinach', 'Apple']},
  {id: uniqueId('juice_'), name: 'Wheatgrass', ingredients: ['Wheatgrass']},
  {id: uniqueId('juice_'), name: 'Berry Blast', ingredients: ['Strawberry', 'Blueberry', 'Huckleberry']}
];

/*
 * Render our homepage
 */
app.get('/', function(req, res) {

  // With this render, we'll send down
  // the entire list of juices as well as
  // the current theme that is set.
	res.render('index', {
    juices: juices,
    theme: currentTheme
  });
});

/*
 * Handler for the /addJuice post request.
 * Will build a new juice object
 * and push it to the array. Once the array is
 * up-to-date, the user will be sent back to the
 * main page to see the changes.
 */
app.post('/addJuice', function(req, res){
  // Set up the new juice
  var newJuice = {
    name: req.body.name,
    id: uniqueId('juice_'),
    ingredients: req.body.ingredients.split(',').map(function(ingredient){
      return ingredient.trim();
    })
  };

  // Add juice to the list
  juices.push(newJuice);

  // Send the user back to the homepage
  res.redirect('/');
});

/*
 * Handler for dealing with delete calls for a specific
 * juice, given its id. This will come through as
 * part of the url, so we use the dynamic url parameters
 * (part of express, using the ':...') and then remove
 * the item by its id.
 */
app.get('/delete/:juiceIndex', function(req, res){
  // Loop over all the juices to find the one
  // whos id matches and splice it out.
  for(var i = 0; i < juices.length; i++){
    if(juices[i].id === req.params.juiceIndex){
      juices.splice(i, 1);
      break;
    }
  }

  // Send the user back to the homepage to
  // see their new list.
  res.redirect('/');
});

/*
 * Handler for viewing a specific juice from the list.
 * Given the id of the juice, find it from the list
 * and render its contents to the view.
 */
app.get('/view/:juiceIndex', function(req, res){
  //var currentJuice = juices[req.params.juiceIndex];
  var currentJuice = find(juices, req.params.juiceIndex);
  res.render('view', {
    juice: currentJuice,
    theme: currentTheme
  });
});

/*
 * Handler for editing the details of a juice.
 * Given some ID and new data, find the juice and
 * re-evaluate the information.
 */
app.post('/edit/:juiceIndex', function(req, res){
  var currentJuice = find(juices, req.params.juiceIndex);
  currentJuice.name = req.body.name;

  currentJuice.ingredients = req.body.ingredients.split(',').map(function(ingredient){
    return ingredient.trim();
  });

  // When we are done, we want to send the user back to
  // the proper view page based on the item we just edited.
  res.redirect('/view/' + currentJuice.id);
});

/*
 * Handler for submitting searches. When a new search
 * term is submitted, we'll do a fuzzy search through
 * each juice, looking for any matches.
 */
app.post('/search', function(req, res){
  // Grab the term from the form
  var term = req.body.term;

  // Filter the list down to only ones who match the term
  var results = juices.filter(function(juice){
    // Convert both sides of the query to upper case to get rid
    // of the need for case matching, and then use indexOf to see
    // if the search term exists anywhere within the current
    // juice's name property.
    var nameMatch = juice.name.toUpperCase().indexOf(term.toUpperCase()) > -1;
    return nameMatch;
  });

  // Render the results view with the results list,
  // the term that was originally used, and the theme
  // for fun.
  res.render('results', {
    results: results,
    term: term,
    theme: currentTheme
  });
});

/*
 * Handler for comparing a series of items.
 */
app.post('/compare', function(req, res){
  // Our compare list is going to map over an array,
  // but if the form only submits one item, it will not
  // come in as an array, so we'll need to convert it to
  // one just in case!
  var compareList = req.body.compare;
  var toCompare = (Array.isArray(compareList))?compareList:[compareList];

  // For each of our compare ids, we'll transform them into
  // their object counterparts
  var results = toCompare.map(function(juiceId){
    return find(juices, juiceId);
  });

  // Finally render the view.
  res.render('compare', {
    results: results,
    theme: currentTheme
  });
});

/*
 * Exploration into req.params
 */
app.get('/test/:val1/:val2', function(req, res){
  res.send(req.params);
});

var server = app.listen(7212, function() {
	console.log('Express server listening on port ' + server.address().port);
});
