const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  //one line implicit return
  //map returns list
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  //use this structure if we need more than one line
return this.journeys.map(journey => {
  return journey.endLocation;
})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  //reduce gets total, remember to start from 0 (second parameter)
  return this.journeys.reduce((runningTotal, journey)  => {
    return runningTotal + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return [... new Set(this.journeys.map(journey => journey.transport))];
};


module.exports = Traveller;
