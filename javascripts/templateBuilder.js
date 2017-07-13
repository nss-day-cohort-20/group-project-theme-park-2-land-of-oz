'use strict';

let $ = require('jquery');
let clickTemplate = require('../templates/clickTemplate.hbs');
let searchTemplate = require('../templates/searchTemplate.hbs');
let timeTemplate = require('../templates/timeTemplate.hbs');

function makeInfoPane(matchedAttractions, whichEvent){
    if (whichEvent==="click") {return clickTemplate({attractions: matchedAttractions});}
    if (whichEvent==="search") {return searchTemplate({attractions: matchedAttractions});}
    if (whichEvent==="time") {return timeTemplate({attractions: matchedAttractions});}
}

module.exports = {makeInfoPane};