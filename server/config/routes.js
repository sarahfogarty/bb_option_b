console.log('routes.js');
//Require the controller
var questions = require('./../server/controllers/questions.js');
var answers = require('./../server/controllers/answers.js');

module.exports = function(app) {
    //////////////////////////////////////////////////////////
    //                        Routes                        //
    //////////////////////////////////////////////////////////
	app.get('/getQuestions', function(request, response){
		questions.show(request, response);
	});

	app.post('/addQuestion', function(request, response){
		questions.add(request, response);
	});

	//-----------answers------------------------
	app.get('/getAnswers', function(request, response){
		answers.show(request, response);
	});

	app.post('/addAnswer', function(request, response){
		answers.add(request, response);
		questions.updateCount(request, response);
	});

	app.post('/like', function(request, response){
		answers.like(request, response);
	});

}
