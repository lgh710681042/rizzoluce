const userApi = require('./api/userApi');
const productApi = require('./api/productApi')
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// 后端api路由
app.use('/api/user', userApi);
app.use('/api/product', productApi);


// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');