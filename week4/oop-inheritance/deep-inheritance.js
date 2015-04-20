var Food = function(name){
  this.name = name;
};
Food.prototype.eat = function(){
  console.log('I am eating a ' + this.name);
};

var Fruit = function(name, isSweet){
  Food.call(this, name);

  this.isSweet = isSweet;
};
Fruit.prototype = new Food();
Fruit.prototype.constructor = Fruit;

Fruit.prototype.ripen = function(){
  console.log('Ripening intensifies…');
};

var Apple = function(name, color){
  Fruit.call(this, name, true);

  this.color = color;
};
Apple.prototype = new Fruit();
Apple.prototype.constructor = Apple;

Apple.prototype.luster = function(){
  console.log(
    'The ' + this.color + ' ' + this.name +
    ' apple is now lusterous! It also happens to be ' +
    ((this.isSweet)?'sweet':'not sweet')
  );
};

var goldenDelicious = new Apple('Golden Delicious', 'red');
console.dir(goldenDelicious);
