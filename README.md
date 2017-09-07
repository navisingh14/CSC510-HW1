# CSC 510 HW1

### Name: 
Navjot Singh
### Student Id: 
200154743
### Unity Id: 
nsingh9@ncsu.edu


### Gh-pages link:
[Webpage using gh-pages branch](https://pages.github.ncsu.edu/nsingh9/CSC510-HW1/)  

### Code
```javascript
var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


var token = "token " + "<Your Token>";
var userId = "navisingh14";

var urlRoot = "https://api.github.com";
var repo = "REST-SELENIUM";
var newRepoName = "CSC510-HW1"; 
var number = '1';

//getYourRepos(userId);
//listBranches(userId, repo);
//createNewRepo(repoName);
//createNewIssue(userId, repo);
//editRepo(userId, repo);
listReactions(userId,repo, number);
```

#### List Branches
```javascript 
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
```
#### Creating a new repo
```javascript
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
```

#### Creating an issue
```javascript
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
```
#### Editing a repo
```javascript 
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
```

#### Listing reactions
```javascript 
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
```

### Answers to concepts section: 
#### Explain some additional concerns related to using REST apis.
Ans.

#### Compare and contrast the benefits and disadvantages of using a RESTful architecture vs. a graph query language. See http://graphql.org/ for details.
Ans.
