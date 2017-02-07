# Node.js를 이용한 웹앱 제작 실습

## 환경설정

- express
- jade
- [body-parser](https://www.npmjs.com/package/body-parser) (post > body 받기 위함)
- [supervisor](https://www.npmjs.com/package/supervisor) (소스 수정 시 node restart)


## 라우팅 설계

- /topic, post
	- 게시물 등록 수행

- /topic, get
	- 게시물 목록 출력

- /topic/new, get
	- 게시물 등록화면 출력

- /topic/:title, get
	- 특정 게시물 출력


## 코드 개선

- 중복 제거 (file read)
- routing path를 array로 처리
- post 성공 후 redirect


데이터가 바뀌었다고 코드를 수정하면 안되지...

로직이 바뀌어야 코드를 수정해야 한다...

link를 타고 들어오는 것 : Get
