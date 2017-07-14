'use strict';

let $ = require('jquery');
let accordianFactory = require('./accordianFactory.js');
let search = require('./search.js');
let builder = require('./templateBuilder.js');
let $container = $('#infoPaneText');

function loadInfoByTime(){
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
console.log("who wants this dog???");
function loadInfoByClick(whichArea) {

    accordianFactory.getAttractions()
    .then((attractions)=>{
        let searchResultAttractions = search.areaMatcher(attractions, whichArea);
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
            let infoForPain = builder.makeInfoPane(searchResultAttractions);
            $container.html(infoForPain);
        });
    });
}

module.exports = {loadInfoByTime, loadInfoByClick};