console.log('Hello world!');

$(document).on('ready', function(){

  // When the user clicks our client button,
  // we want to ask the server for updated
  // information and then render the response
  // to the page.
  $('#client-button').on('click', function(){
    console.log('Client button clicked!');

    // Make an ajax request to the server:
    // $.ajax(...)
    $.get('/serverTest', function(data){
      console.log('Server says:', data);
      
      // Append the response to the on-page UL
      var newLi = $('<li>')
        .text(data)
        .appendTo('#responses');
    });
  });


  // for the form...
  $('#client-form').on('submit', function(e){
    // Stop the form from actually submitting
    e.preventDefault();

    // Pull out the data from the inputs
    var message = $(this).find('[name=message]').val();

    // Compile an object to send to the server
    // with our request
    var dataForServer = {
      message: message
    };

    // Send our data to the server with a post request and wait for the response
    $.post('/clientFormSubmit', dataForServer, function(dataFromServer){
      // Let's just console log the response for now.
      console.log(dataFromServer);
    });
  });

});


// Polling example code:
// setInterval(function(){
//    $.get(....);
// }, 1000);
