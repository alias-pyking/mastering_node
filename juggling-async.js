const http = require('http');
const { url } = require('inspector');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
http.get(urls[0], response => {
	let result = '';
	response.on('data', data => {
		result += data.toString();
	});
	response.on('end', () => {
		console.log(result);
		result = '';
		http.get(urls[1], response => {
			response.on('data', data => {
				result += data.toString();
			});
			response.on('end', () => {
				console.log(result);
				result = '';
				http.get(urls[2], response => {
					response.on('data', data => {
						result += data.toString();
					});
					response.on('end', () => {
						console.log(result);
					})
				})
			})
		})
	})
}).on('error', error => {
	console.log('There was and error', error);
});


// official solution

const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
	console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
	response.pipe(bl(function (err, data) {
	  if (err) {
		return console.error(err)
	  }

	  results[index] = data.toString()
	  count++

	  if (count === 3) {
		printResults()
	  }
	}))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}