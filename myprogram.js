
"use strict";

const uc = require("upper-case");


function hi() {
	console.log(module.filename);
	console.log(uc.upperCase('hello friend') );

}
module.exports.hi = hi;



