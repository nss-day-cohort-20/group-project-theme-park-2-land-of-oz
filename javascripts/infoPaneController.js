'use strict';

let $ = require('jquery');
let accordianFactory = require('./accordianFactory.js');
let search = require('./search.js');
let builder = require('./templateBuilder.js');
let $container = $('#infoPaneText');
let clearClasses = require('./gridController.js');

function loadInfoByTime(){
	clearClasses.clearClasses();
	accordianFactory.getAttractions()
	.then((attractions)=>{
		let searchResultAttractions = search.timeMatcher(attractions);
		accordianFactory.getAttractionTypes()
		.then((attractionTypes)=>{
			searchResultAttractions.forEach((attraction)=>{
				attractionTypes.forEach((type)=>{
                    // console.log("attractiontype", attraction.type_id);
                    if(type.id === attraction.type_id){
                    	attraction.type = type.name;
                    }
                  });
			});
			console.log("attractions", searchResultAttractions);
			let infoForPain = builder.makeInfoPane(searchResultAttractions);
			console.log("info", infoForPain);
			$container.html(infoForPain);
		});
	});
}
console.log("who wants this dog?");
function loadInfoByClick(whichArea) {
	clearClasses.clearClasses();
	accordianFactory.getAttractions()
	.then((attractions) => {
		let searchResultAttractions = search.areaMatcher(attractions, whichArea);
		accordianFactory.getAttractionTypes()
		.then((attractionTypes) => {
			searchResultAttractions.forEach((attraction) => {
				attractionTypes.forEach((type) => {
					if (type.id === attraction.type_id) {
						attraction.type = type.name;
					}
					searchResultAttractions.forEach((attraction) => {
						if (attraction.times === undefined) {
							attraction.times = {"operatingHours" : `Open 9:00 AM to 10:00 PM`};
						}
					});
				});
				let infoForPain = builder.makeInfoPane(searchResultAttractions);
				$container.html(infoForPain);
			});
		});
	});
}
module.exports = { loadInfoByTime, loadInfoByClick };
