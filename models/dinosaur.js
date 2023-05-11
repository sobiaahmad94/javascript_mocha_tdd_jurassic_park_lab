const Park = require('./park.js');

const Dinosaur = function (species, diet, guestsAttractedPerDay, visitors) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
  this.visitors = [];

}

// what dinosaur attracts the most visitors?
// findDinosaursWtihMostVisitors function
Park.prototype.findDinosaurWithMostVisitors = function () {
  let maxVisitorsDinosaur = 0;
  for (const dinosaur of this.dinosaursArray) {
    if (!maxVisitorsDinosaur || dinosaur.visitors > maxVisitorsDinosaur.visitors) {
      maxVisitorsDinosaur = dinosaur;
    }
  }
  return maxVisitorsDinosaur;
};

// *** Can someone please explain this in detail? :)

// getTotalVisitorsPerDay

Park.prototype.getTotalVisitorsPerDay = function () {
  let totalVisitors = 0;
  for (const dinosaur of this.dinosaursArray) {
    totalVisitors += dinosaur.visitors.length;
  }
  return totalVisitors;
};

// set totalVisitors to 0
// use a for loop
// the for loop iterates over each dinosaur item in dinosaursArray 
// for every dinosaur, it adds the length of the visitors array to the totalVisitors 
// returns the totalVisitors

Park.prototype.getTotalVisitorsPerYear = function () {
  const totalVisitorsPerDay = this.getTotalVisitorsPerDay();
  const totalVisitorsPerYear = totalVisitorsPerDay * 365;
  return totalVisitorsPerYear;
};

// getTotalVisitorsPerYear function created, prototype means it can be used for any instance I make of park
// returns the totalVisitorsPerYear by using the getTotalVisitorsPerDay functtion

module.exports = Dinosaur;
