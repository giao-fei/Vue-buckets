const express = require('express');
const path = require('path');
const app = express();

// 设置跨域
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

const db = require('../api/api.json')
const http = require('../api/http.json')
app.get('/api', (req, res) => {
    res.send(db)
})

app.get('/http', (req, res) => {
    res.send(http)
})


app.use(express.static(path.join(__dirname, 'public')))

app.listen(8080, () => console.log('http://localhost:8080'))