'use strict';

let $ = require('jquery');

// $(function () {
// 	$('#datetimepicker3').datetimepicker({
// 		format: 'LT'
// 	});
// });

$("#timeSubmit").on("click", function(){
var times = $("#timeSubmission").val();
console.log(times);
});