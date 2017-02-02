const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

console.log('env value = ' + app.get('env'));

app.use(express.static('public'));

app.listen(3000, () => {
	console.log('Example app listening on port 3000....');
});


app.get('/', (req, res) => {
	res.send('Hello World!!!');
});

app.get('/topic', (req, res) => {
	
	var topics = [
		'Javascript is....',
		'Nodejs is....',
		'Express is....',
	];

	var as = `
	<a href="/topic?id=0">Javascript</a><br>
	<a href="/topic?id=1">Nodejs</a><br>
	<a href="/topic?id=2">Express</a><br>
	${topics[(req.query.id || 0) % 3]}`;
	res.send(as);
	// res.send(topics[(req.query.id || 0) % 3]);
});

app.get('/topic/:id', (req, res) => {
	
	var topics = [
		'Javascript is....',
		'Nodejs is....',
		'Express is....',
	];

	var as = `
	<a href="/topic?id=0">Javascript</a><br>
	<a href="/topic?id=1">Nodejs</a><br>
	<a href="/topic?id=2">Express</a><br>
	${topics[(req.params.id || 0) % 3]}`;
	res.send(as);
	// res.send(topics[(req.params.id || 0) % 3]);
});

app.get('/template', (req, res) => {
    res.render('temp', {
        title: 'Hey',
        message: 'Hello there!',
        time: Date()
    });
});

app.get('/dynamic', (req, res) => {

	var list = '';
	for(var inx = 0; inx < 5; inx++){
		list += '<li>coding</li>';
	}

	var time = Date();

    var output = `
    <!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title></title>
		</head>
		<body>
			Hello, Dynamic
			<ul>
				${list}
			</ul>
			${time}
		</body>
	</html>`;

	res.send(output);
});

app.get('/route', (req, res) => {
	res.send('Hello Router, <img src="/hello.jpg"/>');
});

app.get('/login', (req, res) => {
	res.send('<h1>Login please</h1>');
});
