var bsodcodes = require('./bsodcodes.json');
var dlls = require('./dlls.json');

// Helpers
function count(obj) { return Object.keys(obj).length; }
function myRand(min, max) { return min + Math.floor((Math.random() * (max - min))+1); }

// API
randHex = function(bytes)
{
	myRand(Math.pow(16, bytes)).toString(16);
}

randomHexString = function(bytes)
{
	return '0123456789ABCDEF'.split('').map(function(v, i, a) {
		return i > (bytes - 1) ? null : a[Math.floor(Math.random() * 16)]
	}).join('');
}

randomDLL = function()
{
	return dlls[myRand(0, dlls.length - 1)] + ".dll";
}

randomError = function()
{
	var arrayLenght = count(bsodcodes);
	return bsodcodes[myRand(0, arrayLenght - 1)];
}

console.log(randomError());

exports.bsodcodes = bsodcodes;
exports.dlls = dlls;
exports.randHex = randHex;
exports.randomHexString = randomHexString;
exports.randomDLL = randomDLL;
exports.randomError = randomError;

console.log("[+] API ready");