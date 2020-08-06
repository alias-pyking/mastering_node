const net = require('net');
const server = net.createServer(function (socket) {
	let date = new Date();
	let year = date.getFullYear().toString();
	let month = date.getMonth().toString();
	let day = date.getDate().toString();
	let hours = date.getHours().toString();
	let minutes = date.getMinutes().toString();
	if (month.length < 2) {
		month = Number(month) + 1;
		month = '0' + month;
		
	}
	if (day.length < 2) {
		day = '0' + day;
	}
	if (hours.length < 2) {
		hours = '0' + hours;
	}
	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}
	const data = `${year}-${month}-${day} ${hours}:${minutes}\n`;
	
	console.log(data);
	socket.write(data);
	socket.end();
});
server.listen(Number(process.argv[2]));