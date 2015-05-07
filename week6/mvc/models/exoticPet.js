// Our maintained list of all the pets
var allPets = [];

/**
 * Base class for all our exotic pets
 *
 * @param {string} name Name of the pet
 * @param {string} imageUrl Url for an image of this pet
 */
var ExoticPet = function(name, imageUrl){
  this.name = name;
  this.slug = this.name.toLowerCase().replace(/ /g, '-');
  this.imageUrl = imageUrl;
};

/**
 * Helper for quickly adding a new pet to the list
 *
 * @param {string} name Name of the pet
 * @param {string} imageUrl Url for an image of this pet
 */
var addPet = function(name, imageUrl){
  var newPet = new ExoticPet(name, imageUrl);
  allPets.push(newPet);
};

/**
 * Helper for finding and then removing a pet from the list
 *
 * @param {string} slug Slug value to match in the list
 */
var removePet = function(slug){
  for(var i = 0; i < allPets.length; i++){
    if(allPets[i].slug === slug){
      allPets.splice(i, 1);
      return;
    }
  }
};

/**
 * Look for a pet by its slug value
 *
 * @param {string} slug Slug value to match in the list
 * @return {ExoticPet} The pet that was found or undefined
 */
var findPet = function(slug){
  for(var i = 0; i < allPets.length; i++){
    if(allPets[i].slug === slug){
      return allPets[i];
    }
  }
};

// Export access to the key components of this model
module.exports = {
  ExoticPet: ExoticPet,
  allPets: allPets,
  addPet: addPet,
  findPet: findPet,
  removePet: removePet
};


// Prefill some exotic pets
var miniGiraffe = new ExoticPet('Mini Giraffe', 'http://www.graspingforobjectivity.com/wp-content/uploads/2011/03/LapGiraffe_thumb.jpg');
var toucan = new ExoticPet('Toucan', 'http://i.telegraph.co.uk/multimedia/archive/01448/Toucan_1448853c.jpg');

allPets.push(miniGiraffe);
allPets.push(toucan);
