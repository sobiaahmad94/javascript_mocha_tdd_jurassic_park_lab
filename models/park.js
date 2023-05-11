const Park = function (name, ticketPrice, dinosaursArray, totalRevenue) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaursArray = dinosaursArray
    this.totalRevenue = 0;
}

// has name check

// has ticketPrice check

// dinosaursArray is an array check

// addDinosaur function

Park.prototype.addDinosaur  = function(dinosaur) {
    this.dinosaursArray.push(dinosaur);
};

// removeDinosaurBySpecies function

Park.prototype.removeDinosaurBySpecies = function (dinosaur) {
    const index = this.dinosaursArray.indexOf(dinosaur);
    if (index >= 0) {
        this.dinosaursArray.splice(index, 1);
    }
};
// pass dinosaur (string species) as an argument in the parameter
// use indexOf() method to get the index and store in a variable
// condition - if index >= 0 (= 0 or more than 0)
// actual should be in the indexOf (*** would this be + 1 or could you just use .length for the length?)
// use the splice method *** ask how this works ***
// indexOf() finds out the index of a dinosaur item in an array
// if it's 0 or less then it's removed from their position in the index of the array
// ********* Will this always work?
// splice method is used to remove that dinosaur from the list

// findDinosaurWithMostVisitors()

// finallAllDinosaursOfSameSpecies function
Park.prototype.findAllDinosaursOfSameSpecies = function (species) {
    return this.dinosaursArray.filter(function (dinosaur) {
        return dinosaur.species === species;
    });
};

// finaAllDinosaursOfSame spcies but pass in species as an argument
// use filter() method - (e.g. const result = words.filter(word => word.length > 6);)
// filter() a higher order method for arrays (it creates a new array containing elements from the original array that pass a filtering condition)
// function (dinosaur) { ... }: - callback function provided to the filter() method. It will be called for each element in the dinosaursArray during the filtering process. The argument dinosaur represents each item of array
// ** Can someone please explain callback functions?
// I read about them here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

module.exports = Park

