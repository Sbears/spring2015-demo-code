/*
  For this application we want to build a helpful way of
  keeping track of our movie libraries. Each of us has
  a different set so we want to keep that in mind as we
  build this out.

  On top of that, the primary focus of the app is to visit
  a common problem with working on Object Oriented architectures
  that need to communicate to and from the DOM. It's easy to generate
  new dom elements from a class, but going the other way isn't so
  straightforward.

  Let's take a look!
*/


/**
 * Movie class for representing movie objects
 * within the application.
 * @param {String} title       Title of the movie
 * @param {String} description Description of the movie
 */
var Movie = function(title, description){

  // In our movie constructor we need to set
  // the properties passed as parameters on
  // the new instance being created.
  this.title = title;
  this.description = description;

  // This will save us some thought in the future by
  // having the element pre-rendered. We can just
  // interact with this.el at any point.
  this.render();
};

/**
 * Generate a DOM element for this specific movie
 * and be sure to attach all the proper event listeners
 * as well as set the proper values for each of the
 * template elements.
 * @return {jQuery} DOM element
 */
Movie.prototype.render = function () {

  // Ok, if the element hasn't previously been rendered,
  // this.el will not be defined yet. If it's been set
  // already, nothing in this if-statement will execute.
  if(this.el === undefined){

    // Since this.el isn't set, let's set it
    // by cloning our on-page template and removing
    // the id attribute. We need to do this because id's
    // should be unique per-page and by cloning the element
    // we'd have at least 2 instances of elements with the same
    // id, which is no bueno.
    this.el = $('#movie-tpl')
      .clone()
      .attr('id', null);
  }

  // Whether the element was just created or created awhile ago,
  // it doesn't matter. We can be certain that this.el is set.
  // That means we can traverse the DOM to find the target output
  // fields and fill them with wonderous information!
  this.el.find('.movie-title').text(this.title);
  this.el.find('.movie-description').text(this.description);

  // Just as a utility, let's go ahead and return a reference
  // to this.el so that this render() function can be executed
  // within a append() call later on.
  return this.el;
};

/*
  With the movie class defined, our intrepid explorers can
  move on to the next major component of the application.
  We need a way to store all these movie instances!

  Let's see how this comes together:
*/



/**
 * Class to maintain a library of movies. Each
 * movie will be stored in a list property.
 * @param {String} name Name of the library
 */
var MovieLibrary = function(name){

  // We need to set the name of the library
  // based on the given value for the parameter.
  this.name = name;

  // We'll also initialize the movies property
  // to an empty array so we can easily use it later.
  this.movies = [];

  // Finally, as a precaution, let's automatically
  // render this library in memory:
  this.render();
};

/**
 * Quickly add a new movie to the list. This
 * will also automatically re-render the movie list.
 * @param {Movie} movie Movie instance to add
 */
MovieLibrary.prototype.addMovie = function (movie) {

  // Given a movie instance, we'll push it to the list
  this.movies.push(movie);

  // Since we want to see the movie added visually
  // as well, let's also automatically re-render the library.
  this.render();
};

/**
 * Generate a DOM element for this specific movie library.
 * It will also set the contents of related fields.
 * Event listeners will be attached in this function
 * to all proper items to help maintain a connection
 * back from the DOM to the instance.
 * @return {jQuery} DOM element for this instance
 */
MovieLibrary.prototype.render = function () {

  // First step, much like our movie class,
  // is to check if the library has already been
  // rendered.
  if(this.el === undefined){

    // If it hasn't been rendered yet, let's do
    // that now by cloning the template and
    // removing the id.
    this.el = $('#movie-library-tpl')
      .clone()
      .attr('id', null);

    /*
      Ok, it started to get kind of weird here. We need
      to attach an event listener to our form(s) so that
      when a new movie is submitted, we know exactly where
      to add it (as in, the exact MovieLibrary instance).

      The problem is that, once the DOM element is appended,
      it loses all sense of which MovieLibrary instance created
      it! Also no bueno.

      We can fix this with the band-aid approach of the jQuery
      data() method. I'll let you explore this one on your own
      if you'd like. I'm not a huge fan because it relies heavily
      on jQuery knowing what's going on.

      Another way we can fix this is to give special IDs to everything
      and do reverse-lookups inside of arrays (find the item in the
      array whos id property matches). This one doesn't make much sense
      for us right now, but when we hit the Database, this'll be our
      go-to.

      So if those two methods suck, what are we left with?

      Let's see:
    */

    /*
      First we have JS closure. This means that by creating a function
      inside another function, we have access to all the variables
      that are inherited via scope. We end up with access to our original
      MovieLibrary AND we also get the dom element that fired the event!
      Muy bueno!
    */
    // /* First we set up a reference to a 'snapshot' of what 'this' is */
    // var originalLibrary = this;
    //
    // /* Now we can actually find the form and attach the handler */
    // this.el.find('.new-movie-form').on('submit', function(e){
    //
    //   /* Prevent dat default... */
    //   e.preventDefault();
    //
    //   /* Grab the values from the inputs... */
    //   var movieTitle = $(this).find('[name=movie-title]').val();
    //   var movieDescription = $(this).find('[name=movie-description]').val();
    //
    //   /* Now we generate a new Movie instance from the data */
    //   var newMovie = new Movie(movieTitle, movieDescription);
    //
    //   /* By adding it to the library, it gets pushed to the list and automatically rendered! */
    //   originalLibrary.addMovie(newMovie);
    // });

    /*
      The previous way to set up the event listener was great. It took
      care of our issue! Hot damn!

      But we find ourselves in another quandary. If we have all these big
      event handlers, our render function is insanely large and hard
      to manage. Awwwwk!

      Another way we can solve the problem AND fix the bloat problem
      is to use the bind() method. It does mean getting back with our
      old friend 'this' and controlling its value, but it's a pretty
      minor side-effect.

      We find the element in this.el and attach the event listener.
      In this case, we want to override what jQuery normally does,
      which is to set 'this' in the function to whatever DOM element
      actually fired the event. This is ok, but we then lose our original
      goal to keep track of that MovieLibrary instance. By binding the
      context to 'this's value right now, we override what jQuery does
      and we force the function's 'this' to always be the instance of
      MovieLibrary that attached the event listener.
    */
    this.el.find('.new-movie-form').on('submit', this.onFormSubmit.bind(this));
  }

  /*
    A lot just happened inside the if statement there, but
    fear not! It only executes once per instance. You can call
    render hundreds of times, but the content of the 'if' will
    only fire the first time.

    Now that we have our dom element created and event listeners
    attached, we can do the minor task of updating contents.
  */
  this.el.find('.library-name').text(this.name);

  /*
    Our complicated little novella continues with romance and
    intrigue! Let's jam some functional code up in here.
    Our goal is to render the list of movies contained
    in the library instance, so we first need to get
    an array of all the movie's dom elements. Map will
    help us with that since it'll transform an array
    of Movie instances into their respective DOM elements:
  */
  var movieElements = this.movies.map(function(movie){
    // All we need from the movie is what's returned from
    // the render method (which is a dom element, btw)
    return movie.render();
  });

  // Great! Got an array of DOM elements, let's just
  // append them to our movie-list
  this.el.find('.movie-list').append(movieElements);

  // Utility again, return a reference to the
  // dom element.
  return this.el;
};


/*
  Alright. So above we did this thing to get a context bound
  and an event listener set up. It was weird, but necessary.
  Now we are on to the event handler that was actually bound.

  Whenever we attach an event listener via jQuery, the library
  automatically sets the 'this' of the function to whatever
  dom element fired the event.
  However, since we bound the context above, we are going to
  ignore jQuery and use our own forced value for 'this', which
  in our case is whateve MovieLibrary attached the event handler.
*/

/**
 * Handle submission events on the form
 * set within the MovieLibrary template.
 * @param {EventArgs} e Event arguments from the event
 */
MovieLibrary.prototype.onFormSubmit = function (e) {
  // It's a form, so we definitely want
  // to stop it from submitting for reals.
  e.preventDefault();

  /*
    Since we saw that jQuery was overridden by our valiant
    call to bind(), how do we actually get the dom element
    that fired the event? We've got some options and both
    essentially do the same thing:
  */
  // /* Here, we can get the element that fired the event right from the arguments */
  // console.log($(e.currentTarget));

  // /* Here, since we have the proper context, we can just introspect this.el */
  // console.log(this.el.find('.new-movie-form'));

  // Whichever method we choose, get the title and description
  // values from the target form.
  var movieTitle = $(e.currentTarget).find('[name=movie-title]').val();
  var movieDescription = $(e.currentTarget).find('[name=movie-description]').val();

  // Ok, we've got the values, let's hook it up, bro.
  var newMovie = new Movie(movieTitle, movieDescription);

  // Movie, created. Let's add it to this library's list!
  // Added benefit is that this method also automatically
  // calls render() on the library, so the DOM is updated too.
  this.addMovie(newMovie);
};

/*
  With the base blueprints and prototypes all set up,
  we can kick things off with some lighthearted variable
  declarations and append statements. Everything else cascades
  down in terms of functionality.
*/

// Our first movie in the set!
var goonies = new Movie('The Goonies', 'Hey you guyyyyys');

// And our first library.
var myLibrary = new MovieLibrary('Great Movies');

// Let's add our movie to our library.
myLibrary.addMovie(goonies);

// Finally, we'll append the library to the dom.
// Keep in mind that render returns the dom element
// and has the added effect of updating its contents as well.
$('body').append(myLibrary.render());

// We could create one library, why not add another?
var michaelsLibrary = new MovieLibrary('Michael\'s Library');
$('body').append(michaelsLibrary.render());

/*
  And so we reach the end of our epic tale. We've known love,
  loss, apply, and map. It's been a long and arduous road, but
  we've made it. Congratulations! What now?

  Really read through this code and take it all in. Put
  console logs everywhere! See if the values that are shown
  in console really match with your expectations. Why or why not?

  Try adding some items using the forms in the browser.

  Try running `goonies.title = 'Not the goonies'; goonies.render()`
  to see what happens to the page. Why did it update? What code
  actually made that happen?

  This may all seem like magic, but in the end, you are the magician :)
*/
