# URL을 이용한 정보의 전달

## path

http://a.com/login -> APP (router '/login'의 익명함수)  -> 결과물

path를 통해 다른 결과를 제공  

http://a.com/`topic`  
http://a.com/`login`  
http://a.com/`abc`

---

## Query String

같은 path 안에서 물음표(?) 뒤의 값을 통해 다른 결과를 제공

http://a.com/topic?`id=1`  
http://a.com/topic?`id=2`  
http://a.com/topic?`id=3`  


### request.query.xxx

request객체의 query 프로퍼티는 querystring으로 들어온 값을 주는 object이다.

[reference link](http://expressjs.com/ko/4x/api.html#req.query)

~~~
// Get /search?id=1
req.query.id

// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"

req.query.shoe.color
// => "blue"

req.query.shoe.type
// => "converse"
~~~

Query String을 express에서 구현하는 예
~~~
// Get /topic?id=1

app.get('/topic', (req, res) => {
	
	var topics = [
		'Javascript is....',
		'Nodejs is....',
		'Express is....',
	];

	res.send(topics[req.query.id]);
});
~~~

---

## 시멘틱 URL

Query String 없이 query전달

[시멘틱(의미론) URL](https://en.wikipedia.org/wiki/Semantic_URL)

query string 방식
~~~
http://a.com/topic?id=1
~~~

시멘틱 url 방식
~~~
http://a.com/topic/1
~~~

[reference link](http://expressjs.com/ko/4x/api.html#req.params)
~~~
// route /user/:name
// GET /user/tj
req.params.name
// => "tj"
~~~


시멘틱 url을 express에서 구현하는 예
~~~
// Get /topic/1

app.get('/topic/:id', (req, res) => {
	
	var topics = [
		'Javascript is....',
		'Nodejs is....',
		'Express is....',
	];

	res.send(topics[req.params.id]);
});
~~~