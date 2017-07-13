'use strict';

let $ = require('jquery');
let clickTemplate = require('../templates/clickTemplate.hbs');

function makeInfoPane(matchedAttractions){
    return clickTemplate({attractions: matchedAttractions});
}

module.exports = {makeInfoPane};