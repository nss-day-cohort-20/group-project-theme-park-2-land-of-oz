'use strict';
// let reg = require(javas infopane)
let $ = require('jquery');

let objArray = [];
let matchSuccesses = [];

$("#testButton").click( function() {
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
});
// let attractionsGetter = require ("/accordianFactory.js")
// function search(reg) {

//   let attractions = attractionsGetter.getAttractions();

// }

// for loop that goes through each attraction in the attraction array
// compare the names of each tot he regex. for( if( ))

// search module
// create "gloabl" empty array.
// take the regex from the searchbar, ‘i’ is case insensitive
// regex expression will be the value in the searchbar. all to lowercase. once we have the regex expression to compare
// for every atraciton in the JSON, compare that regex to the name of the attraction name. if the expressions fails  (nothing)
// else take results and push to the empty array. append PARENT OBJECT to the array. not attraction. name, but the entire object.



// Regex comparing name to expression, append parent obj to arr object data, to the template builder