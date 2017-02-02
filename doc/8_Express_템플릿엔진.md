# 템플릿엔진

## 템플릿 엔진 장점

동적으로 html을 만들 수 있다...

Programmable

그런데... 종류가 너무 많아... 디자이너 혹은 publisher와 협업하려면 어떻게 해야 하나???

---

## Express와 템플릿 사용하기

[Express > 템플릿 엔진 사용](http://expressjs.com/ko/guide/using-template-engines.html)

- Express에서는 기본적으로 템플릿 엔진을 제공하지 않는다.
- Express페이지에서 jade를 기본적으로 설명하긴 한다.

- router 함수에서 template으로 response하기 위해 render메소드를 사용
~~~
res.render('index', { title: 'Hey', message: 'Hello there!'});
~~~

---

## Jade문법

~~~
html
	head
		title!= title
	body
		h1 Hello Jade
		ul
			-for(var inx = 0; inx < 5; inx++)
				li coding
		div!= message
		div!= time
~~~

- 탭 : dom tree 안으로 들어감
- != 또는 = : 변수
- \- : 코딩 (ex. -for)

---

## Top 10 Template HTML Engine

[link](https://colorlib.com/wp/top-templating-engines-for-javascript/)
