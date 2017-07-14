'use strict';
// let reg = require(javas infopane)
let $ = require('jquery');
let accordian = require('./accordianFactory.js').getAttractions;

let objArray = [];
let matchSuccesses = [];

let searchMatcher = function(data) {
    matchSuccesses = [];
    var searchText = document.getElementById("testText").value;
    var reg = new RegExp(`${searchText}`, "i");
    objArray.push(data);
    console.log(reg);
    objArray[0].forEach(function(attraction) {
        if (attraction.name.search(reg) === -1) {} else {
            matchSuccesses.push(attraction);
        }
    });
    console.log("successes", matchSuccesses);
    return matchSuccesses;
};

// pass in data
let timeMatcher = function() {
    // var timeResults;
    accordian().then((attractionsData)=>{
      matchSuccesses = [];
      var searchTime = document.getElementById("timeSubmission").value;
      searchTime = searchTime.replace(/\s/g, '');
      console.log("attractionsData", attractionsData);
      attractionsData.forEach(function(attraction){
        if(attraction.times){
          attraction.times.forEach(function(time){
            if(time === searchTime){
              console.log("attraction", attraction);
              matchSuccesses.push(attraction);
            }
          });
        }
      });
      console.log("mat", matchSuccesses);
    });
    




    return matchSuccesses;
};

let areaMatcher = function(attractionsJson, area) {
    matchSuccesses = [];
    if (attractionsJson.area.search() === area.id) {
        matchSuccesses.push(area.name);

    }
    return matchSuccesses;
};

module.exports = {
    searchMatcher,
    timeMatcher,
    areaMatcher
};