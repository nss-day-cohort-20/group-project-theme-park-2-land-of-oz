'use strict';

let $ = require('jquery');
let search = require('./search.js');
let infoPaneController = require('./infoPaneController.js');

$("#timeSubmit").on("click", function(){
var times = $("#timeSubmission").val();
console.log(times);
});

// add EL on search in html??
// id text

var searchButton = $("#testButton");
searchButton.click(function(){
	let matched = search.searchMatcher();
	console.log("search button", searchButton);
	console.log("search master", matched);
});

var testButton = $("#timeSubmit");
testButton.click(function(){
	let matched = search.timeMatcher();
	return matched;
});