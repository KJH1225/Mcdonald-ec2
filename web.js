const express = require('express');
const app = express();
const path = require('path');
const { sequelize } = require('./database/schemas');//DB테이블
const port = 8003;


//시퀄라이즈 연결 부분
sequelize.sync({ force: false }) //force가 true면 킬때마다 DB 새로 만듬
.then(() => { 
  console.log("DB연결 성공");
})
.catch((err) => {
  console.error(err);
});


// 브라우저 cors 이슈를 막기 위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
var cors = require('cors');
app.use(cors());


// '/upload'경로로 뭔가 요청이오면 여기서 걸리고 upload폴더의 정적 파일을 제공하겠다
// 예: "/upload/image.jpg")에 액세스하면 Express.js는 "upload" 디렉터리에서 정적 파일을 찾아 제공
app.use("/upload", express.static("upload"));  

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

app.listen(port, () => {
  console.log(`${port}에서 대기중....`);
})