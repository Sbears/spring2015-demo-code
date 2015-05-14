$(document).on('ready', function(){

  $('#add-post').on('click', function(){
    var button = $(this);
    button.button('loading');

    var data = {
      title: $('#post-title').val(),
      author: $('#post-author').val(),
      description: $('#post-description').val(),
      url: $('#post-url').val()
    };

    $.post('/addPost', data, function(dataFromServer){
      var newEl = $('.post').first().clone();
      newEl.find('.link').attr('href', dataFromServer.url);
      newEl.find('.title').text(dataFromServer.title);
      newEl.find('.description').text(dataFromServer.description);
      newEl.find('.date').text(dataFromServer.postedAt);
      $('.post-container').append(newEl);

      button.button('reset');

      $('#post-title').val('');
      $('#post-author').val('');
      $('#post-description').val('');
      $('#post-url').val('');

      $('#add-post-modal').modal('hide');
    });

  });

  $(document).on('click', '.upvote', function(){
    var post = $(this).closest('.post');
    var postId = post.attr('data-id');
    $.get('/upvote/' + postId, function(dataFromServer){
      console.log(dataFromServer);
      post.find('.score').text(dataFromServer.score);
    });
  });

});
