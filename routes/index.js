
/*
* GET home page.
*/

exports.index = function(req, res){

	// App full url (Thanks stackoverflow)
	var port = req.app.settings.port || cfg.port;
	var full_url = req.protocol + '://' + req.host  + ( port == 80 || port == 443 ? '' : ':' + port );
	var full_req = full_url + req.path;

	// Response stuff
	error = req.app.api.randomError();
	response = {
		fileName: req.app.api.randomDLL(),
		randHex: req.app.api.randomHexString(8),
		errorCode: error[0],
		errorMessage: error[1]
	}

	res.render('index', { response: response, host: full_url, url:full_req, title: "Something went wrong! - BSOD API" });
	console.log("Retuned: ", response);
};
