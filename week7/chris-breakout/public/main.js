$(document).on('ready', function(){
  
  $('.direction').on('click', function(e){
    e.preventDefault();
    
    var url = $(this).attr('href');
    var car = $(this).closest('.car');
    var img = car.find('img');

    $.get(url, function(data){
      //console.log(data);
      car.css({
        left: data.position.left,
        top: data.position.top
      });
      img.css('transform', 'rotate(' + data.rotation + 'deg)');
    });
  });

  $('.car').on('click', function(){
    var car = $(this);
    car.addClass('active').siblings().removeClass('active');
  });

  $(document).on('keydown', function(e){
    //console.log(e.keyCode);
    // 37L, 39R, 38U, 40D
    var activeCar = $('.car.active');
    if(activeCar.length === 1){
      var directions = {
        '37': 'left',
        '39': 'right',
        '38': 'up',
        '40': 'down'
      };
      if(e.keyCode in directions){
        activeCar.find('.' + directions[e.keyCode]).trigger('click');
      }
    }
  });
});
