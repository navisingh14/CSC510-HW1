var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "<Your Token>";
var userId = "navisingh14";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

var repo = "REST-SELENIUM";
var newRepoName = "CSC510-HW1"; 
var number = '1';

//getYourRepos(userId);
//listBranches(userId, repo);
//createNewRepo(repoName);
//createNewIssue(userId, repo);
//editRepo(userId, repo);
listReactions(userId,repo, number);

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}


//listing the branches in a particular repo
function listBranches(owner,repo)
{

	var options = {
		url: urlRoot + '/repos/' + owner + "/" + repo + "/branches",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

	
}

//creating a new repo
function createNewRepo(newRepoName)
{

	var options = {
		url: urlRoot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"name": newRepoName,
			"description": "This is your first repository",
			"homepage": "https://github.com",
			"private": false,
			"has_issues": true,
			"has_projects": true,
			"has_wiki": true
		  }


	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
//		console.log( body );
		console.log( response.statusCode );
	});

	
}

//creating new issues for a particular repo
function createNewIssue(owner, repo)
{

	var options = {
		url: urlRoot + '/repos/' + owner + "/" + repo + "/issues",
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"title": "Found an issue",
			"body": "I'm having a problem with this.",
	//		"assignee": "navisingh14",
	//		"milestone": 1,
	//		"labels": [
	//		  "bug"
	//		]
		  }


	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
//		console.log( body );
		console.log( response.statusCode );
		console.log( response );
		
	});

	
}

//editing a particular repo
function editRepo(owner, repo)
{

	var options = {
		url: urlRoot + '/repos/' + owner + '/' + repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: {
			"name": repo,
			"description": "CSC510-HW1",
			"homepage": "https://github.com",
			"private": false,
			"has_issues": true,
			"has_projects": true,
			"has_wiki": false
		  }


	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
//		console.log( body );
		console.log( response.statusCode );
//		console.log(response);
	});
}

//listing reactions for a particular repo and issue number
function listReactions(owner,repo, number)
{

	var options = {
		url: urlRoot + '/repos/' + owner + "/" + repo + "/issues/" + number + "/reactions" ,
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			"Accept" : "application/vnd.github.squirrel-girl-preview"
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

	
}
