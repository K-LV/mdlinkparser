var fs = require('fs');

//Function that finds links in markdown file
exports.findLinks = function (markdown, callback){

	var links;

	//Reading from file
	fs.readFile(markdown, "utf-8", function(err, data){
		if(err) throw err;

		//Turning data to string, replacing all new lines with a space 
		//and splitting string to array by spaces
		var ans = data.toString().replace( /\n/g, " " ).split(" ");

		//Filtering array if it has '(http' 
		//and taking a substring of just the link
		links = ans.filter(isLink).map(function(element){
			return element.substring(element.indexOf("(") + 1, element.length - 1 );
		})
		
		//Returning links only after everything is done
		return callback(links);
	});

	//Function that will return true if element has '(http' in it
	function isLink(element){
		return element.indexOf("(http") != -1;
	};
};