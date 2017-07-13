'use strict';

// let $ = require('jquery');
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
            $(searchResultAttractions).each((attraction)=>{
                $(attractionTypes).each((type)=>{
                    if(type.id === attraction.type_Id){attraction.type = type.name;}
                    }
                );
            });
            let infoForPain = builder.makeInfoPane(searchResultAttractions);
            $container.html(infoForPain);
        });
    });
}

function loadInfoByClick(whichArea){
    accordianFactory.getAttractions()
    .then((attractions)=>{
        let searchResultAttractions = search.areaMatcher(attractions, whichArea);
        accordianFactory.getAttractionTypes()
        .then((attractionTypes)=>{
            $(searchResultAttractions).each((attraction)=>{
                $(attractionTypes).each((type)=>{
                    if(type.id === attraction.type_Id){attraction.type = type.name;}
                    }
                );
            });
            let infoForPain = builder.makeInfoPane(searchResultAttractions);
            $container.html(infoForPain);
        });
    });
}