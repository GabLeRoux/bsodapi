
/*
* GET home page.
*/

exports.index = function(req, res){

	error = req.app.api.randomError();
	response = {
		fileName: req.app.api.randomDLL(),
		randHex: req.app.api.randomHexString(8),
		errorCode: error[0],
		errorMessage: error[1]
	}

	res.render('index', { response: response });
	console.log("Retuned: ", response);
};
