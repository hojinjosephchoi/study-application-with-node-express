const fs = require('fs');


//Sync
console.log(1);
const data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt', {encoding: 'utf8'}, (err, data) => {
	console.log(3);
    
    if (err) {
    	throw err;
    }

    console.log(data);
});

console.log(4);