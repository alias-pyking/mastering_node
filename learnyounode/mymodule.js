const fs = require('fs');
const path = require('path');
module.exports = function(dirname, extension, callback){
	fs.readdir(dirname, (error, list)=>{
		if(error) return callback(error);
		const resultList = [];
		list.forEach(element => {
			if (element.endsWith('.' + extension)) {
				resultList.push(element);
			}
		});
		callback(null, resultList);
	});
}

