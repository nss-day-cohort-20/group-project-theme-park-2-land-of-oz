// let $ = require('jquery');
let accordianFactory = require('./accordianFactory.js');

// give me burger
accordianFactory.getParkInfo()
// getting burger
.then(function(parkInfo){
    console.log("park info", parkInfo);
});


accordianFactory.getAreas()
.then(function (area){
    console.log("area", area);
});

accordianFactory.getAttractionTypes()
.then(function (attractionTypes){
    console.log("attractionTypes", attractionTypes);
});

accordianFactory.getAttractions()
.then(function (attractions){
    console.log("attractions", attractions);
});