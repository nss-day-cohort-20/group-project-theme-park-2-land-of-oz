'use strict';
// let reg = require(javas infopane)
let $ = require('jquery');

let objArray = [];
let matchSuccesses = [];

let searchMatcher = function() {
  matchSuccesses = [];
  $.ajax({
    url: "https://fir-101-143cd.firebaseio.com/attractions.json",
    success: function(data){
      var searchText = document.getElementById("testText").value;
      var reg = new RegExp(`${searchText}`, "i");
      objArray.push(data);
      console.log(reg);
      objArray[0].forEach( function (attraction){
        if (attraction.name.search(reg) === -1){
        }
        else{
          matchSuccesses.push(attraction);
        }
      });
      console.log("successes", matchSuccesses);
    }
  });
  return matchSuccesses;
};


let timeMatcher = function(){
  matchSuccesses = [];
  $.ajax({
    url: "https://fir-101-143cd.firebaseio.com/attractions.json",
    success: function(data){
      var searchText = document.getElementById("timeSubmission").value;
      var reg = new RegExp(`${searchText}`, "i");
      objArray.push(data);
      console.log(reg);
      objArray[0].forEach( function (attraction){
        if (attraction.name.search(reg) === -1){
        }
        else{
          matchSuccesses.push(attraction);
        }
      });
      console.log("successes", matchSuccesses);
    }
  });
};

module.exports = {searchMatcher};
