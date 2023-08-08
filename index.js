const express = require("express");

const port = 9091;

const app = express();
app.set("view engine", "ejs");

// 최상위 경로에 접속 시 자신의 학번 출력
app.get("/", (req, res) => {
  // ?? : 왼쪽 값이 null, undefined, NaN, "" 일 경우 오른쪽 값을 반환
  res.send(process.env.TEAMLOG ?? "Hello World");
});

// /hello 경로에 접속 시 views/index.ejs 랜더링
// 호스트 PC 에서 index.ejs 를 수정하면 바로 반영
app.get("/hello", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
