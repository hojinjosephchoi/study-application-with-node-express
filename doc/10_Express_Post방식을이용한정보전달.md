# Post방식을 이용한 정보의 전달

## Get vs Post

- Get 방식
	> http://a.com/topic?id=1 -> APP -> 결과물

	- 데이터 전송 길이에 한계가 있다.
- Post 방식
	> html form태그 등에 의한 데이터 전송

	- 데이터 전송 길이가 상대적으로 get방식보다 크다.
	- url에 데이터 포함되지 않고 암시적으로 데이터 전송되기 때문에 불필요하게 데이터 노출되지 않는다.

---

## Express에서 Post방식

[req.body 객체 reference](http://expressjs.com/en/4x/api.html#req.body)

[body-parser 모듈](https://www.npmjs.com/package/body-parser)

- body-parser 모듈을 npm으로 설치한다.
~~~
$ npm install body-parser --save
~~~

- body-parser를 middleware로 사용하는 코드를 삽입한다.
~~~
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
~~~

- router에서 request 객체의 body 프로퍼티에서 값을 가져온다.
~~~
app.post('/form_receiver', (req, res) => {
	res.send(req.body.title + ', ' + req.body.description);
});
~~~
