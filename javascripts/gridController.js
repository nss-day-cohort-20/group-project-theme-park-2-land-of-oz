'use strict';

let $ = require('jquery');
let search = require('./search.js');
let getAttractions = require('./accordianFactory.js');

function clearClasses() {
	for (var i=1; i<8; i++) {
		var $areaRemoveConcat = "area" + i;
		$('#' + $areaRemoveConcat).removeClass("hvr-bob");
	}
}

let focusGrid = function() {
	clearClasses();
	getAttractions.getAttractions()
	.then((attractions)=>{
		let searchResults = search.searchMatcher(attractions);
		searchResults.forEach( function(id){
			var attractionId = id.area_id;
			var $areaConcat = "area" + attractionId;
			$('#' + $areaConcat).addClass("hvr-bob");
		});});
};

module.exports = {focusGrid, clearClasses};


//gridController will call accordianFactory.getattractions
//match gotten object's area id with the div area#
//if they match, add a class.