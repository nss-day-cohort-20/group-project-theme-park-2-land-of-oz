'use strict';

let $ = require('jquery');
let infoPaneController = require('./infoPaneController.js');
let gridController = require('./gridController.js');

$("#timeSubmit").on("click", ()=>{
    infoPaneController.loadInfoByTime();
});

$("#testText").keypress((e)=>{
    if(e.which == 13){
        gridController.focusGrid();
    }
});

$("#area1").on("click", ()=>{
    infoPaneController.loadInfoByClick(1);
    console.log("area1");
});
$("#area2").on("click", ()=>{
    infoPaneController.loadInfoByClick(2);
    console.log("area1");
});
$("#area3").on("click", ()=>{
    infoPaneController.loadInfoByClick(3);
    console.log("area1");
});
$("#area4").on("click", ()=>{
    infoPaneController.loadInfoByClick(4);
    console.log("area1");
});
$("#area5").on("click", ()=>{
    infoPaneController.loadInfoByClick(5);
    console.log("area1");
});
$("#area6").on("click", ()=>{
    infoPaneController.loadInfoByClick(6);
    console.log("area1");
});
$("#area7").on("click", ()=>{
    infoPaneController.loadInfoByClick(7);
    console.log("area1");
});
$("#area8").on("click", ()=>{
    infoPaneController.loadInfoByClick(8);
    console.log("area1");
});