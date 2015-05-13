var Car = require('../models/car.js');

var indexController = {
  index: function(req, res) {
    //res.render('index');
    
    Car.find({}, function(err, cars){
      res.render('index', {
        cars: cars
      });
    });
	},

  addCar: function(req, res){
    var car = new Car(req.body);
    /*
     * var car = new Car({
     *    name: req.body.name,
     *    imageUrl: req.body.imageUrl
     * });
     */

    car.save(function(err, result){
      res.redirect('/');
    });
  },

  moveCar: function(req, res){
    var carId = req.params.carId;
    var direction = req.params.direction;
    var toUpdate = {
      'position.left': 0,
      'position.top': 0
    };
    var rotation = 0;

    var INC_AMT = 10;

    if(direction === 'left') {
      toUpdate['position.left'] = -1 * INC_AMT;
      rotation = 180;
    } else if(direction === 'right') {
      toUpdate['position.left'] = 1 * INC_AMT;
      rotation = 0;
    }
    if(direction === 'up') {
      toUpdate['position.top'] = -1 * INC_AMT;
      rotation = 270;
    } else if(direction === 'down') {
      toUpdate['position.top'] = 1 * INC_AMT;
      rotation = 90;
    }

    Car.findByIdAndUpdate(carId, {$inc: toUpdate, $set: {rotation: rotation}}, function(err, result){
      //res.send(result);
      //res.redirect('/');

      // For whatever reason, update is returning the
      // original data, not the updated one, so we just
      // requery the DB for the real data...
      Car.findById(carId, function(err, result){
        res.send(result);
      });
    });
  }

};

module.exports = indexController;
