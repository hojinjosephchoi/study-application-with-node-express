# Express


## Framework란???

적은 코드로 더많은 작업을 할 수 있도록 도와주는 것...

## Express

[Express](http://expressjs.com)

> $ mkdir xxx (xxx이름의 폴더(프로젝트)생성)  
> $ cd xxx  
> $ npm init (npm 프로젝트로 선언)  
> $ npm install --save express (express 프레임워크 설치)  

app.js : express에서 권장하는 관습적인 entry 파일

---

## Routing (get 함수가 하는 역할)

사용자의 요청과 요청에 대한 처리인 Controller를 중개하는 역할

> 사용자 - Router - Controller  
> '/' - get('/') - send('hello')  
> '/login' - get('/login') - send('login please')

---

## 연결성

단어 : 의미를 만들어 낸다...

### Node.js 기본 제공기능

- File System
- HTTP
- OS

### Module (npm)

- Express
- Underscore
- Jade
- etc..

### Router

- 연결자의 역할

### Controller

- 회원가입
- 홈페이지 
- 에러화면

Javascript + npm + Router  
Node.js + Module + Controller

---

## Express에서 정적파일을 서비스하는 법

public이라는 디렉토리에 정적파일(txt, img, html 등등)을 놓으면 사용자에게 서비스를 제공할 수 있다...
~~~
app.use(express.static('public'));
~~~

---

## Express에서 웹페이지를 표현하는 방법 (동적으로 서비스하는 법)

javascript 내에서 html을 짜 넣는 것은 까다롭다.
