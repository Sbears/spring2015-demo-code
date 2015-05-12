console.log('Testing from client side!');

$(document).on('ready', function(){
  
  // When the new Monster form is submitted, we need
  // to compile the monster data and submit it to the
  // server. Whenever it comes back with a response, we can
  // just log it to the console.
  $('#new-monster').on('submit', function(e){
    e.preventDefault();

    // Build an object to submit to the server
    var monsterData = {
      name: $(this).find('[name=name]').val(),
      scaryFactor: $(this).find('[name=scaryFactor]').val(),
    };

    // Do the actual post request to the server with our
    // monster data and log the response
    $.post('/addMonster', monsterData, function(dataFromServer){
      console.log(dataFromServer);
    });
  });

  // When clicking our get monsters button, we want to
  // ask the server for an up-to-date listing of all
  // the available monsters. We'll just console log the
  // results.
  $('#get-monsters').on('click', function(){
    $.get('/getMonsters', function(dataFromServer){
      console.log(dataFromServer);
    });
  });

});
