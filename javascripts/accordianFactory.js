'use strict';

let $ = require('jquery');
let fbURL = "https://fir-101-baf2e.firebaseio.com/";

function getAreas() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/areas.json`//<.json is important!
    }).done( (areaData) => {
      resolve(areaData);
    });
  });
}

function getAttractions() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/attractions.json`//<.json is important!
    }).done( (attractionsData) => {
      resolve(attractionsData);
    });
  });
}

function getAttractionTypes() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/attraction_types.json`//<.json is important!
    }).done( (attractionTypesData) => {
      resolve(attractionTypesData);
    });
  });
}

function getParkInfo() {
  return new Promise( ( resolve, reject) => {
    $.ajax({
      url: `${fbURL}/park-info.json`//<.json is important!
    }).done( (parkInfoData) => {
    	console.log("park", parkInfoData);
      resolve(parkInfoData);
    });
  });
}

module.exports = {getAreas, getAttractions, getAttractionTypes, getParkInfo};



// call attractionTypes 
// 	AJAX CALL FOR ATTRACTION TYPES
// 	attractions change baised on info from AT

// let fbURL = "https://fir-101-baf2e.firebaseio.com/";

// // *DATA returned from attractionTypes gets own VAR
// // for each attraction add type field then POST FB
// // loop through attractions for every item loop through types with filter func- creats new array. returns 1 obj
// // return obj whos id is the same as the type id in current attraction 
// // make type ids equal to name

// newAttractionArr is 
// function addType(attractions){
// 	attractions.forEach( (attraction) => {
// 		let newAttractionArr = attractionTypes.filter( (type) => {
// 			return type.id === attraction.typeId
// 		});accordianFactory.getParkInfo
// 	});
// 	console.log("typeArr after ID", );
// };







