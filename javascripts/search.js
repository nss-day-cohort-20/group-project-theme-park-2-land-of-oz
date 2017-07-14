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
    return matchSuccesses;
};

// pass in data
let timeMatcher = function(attraction) {
      matchSuccesses = [];
      var searchTime = document.getElementById("timeSubmission").value;
      searchTime = searchTime.replace(/\s/g, '');
      attraction.forEach(function(attraction){
        if(attraction.times){
          attraction.times.forEach(function(time){
            if(time === searchTime){
              matchSuccesses.push(attraction);
            }
          });
        }
      });
      console.log("mat", matchSuccesses);
      return matchSuccesses;
    };

let areaMatcher = function(attractionsJson, area) {
    matchSuccesses = [];
    objArray = [];
    objArray.push(attractionsJson);
    objArray[0].forEach(function(attraction) {
        if (attraction.area_id.toString().search(area) === -1) {} else {
            matchSuccesses.push(attraction);
        }
    });
    return matchSuccesses;
};

module.exports = {
    searchMatcher,
    timeMatcher,
    areaMatcher
};