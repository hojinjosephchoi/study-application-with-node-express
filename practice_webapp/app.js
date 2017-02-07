const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.locals.pretty = true;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/topic/new', (req, res) => {
	fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            // throw err;
        }
    	res.render('new', {
    		topics: files
    	});

    });
});

app.get(['/topic', '/topic/:title'], (req, res) => {
    fs.readdir('data', (err, files) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            // throw err;
        }

        var title = req.params.title;
        if (title) {
            fs.readFile('data/' + title, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                    // throw err;
                }

                res.render('view', {
                    topics: files,
                    title: title,
                    description: data
                });

            });

        } else {
            res.render('view', {
                topics: files,
                title: 'Welcome',
                description: 'Hello, Javascript for server'
            });
        }

    });
});

// app.get('/topic', (req, res) => {
// 	fs.readdir('data', (err, files) => {
// 		if(err){
// 			console.log(err);
// 			res.status(500).send('Internal Server Error');
// 			// throw err;
// 		}

// 		res.render('view', {
// 			topics: files
// 		});	

// 	});

// });

// app.get('/topic/:title', (req, res) => {
// 	var title = req.params.title;

//     fs.readdir('data', (err, files) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//             // throw err;
//         }

//         fs.readFile('data/' + title, 'utf8', (err, data) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send('Internal Server Error');
//                 // throw err;
//             }

//             res.render('view', {
//                 topics: files,
//                 title: title,
//                 description: data
//             });

//         });

//     });

// });

app.post('/topic', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;

    fs.writeFile('data/' + title, description, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            // throw err;
        }
        res.redirect('/topic/' + title);
    });

});

app.listen(3000, () => {
    console.log('connected, 3000 port!');
});