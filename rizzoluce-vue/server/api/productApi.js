var express = require('express');
var router = express.Router();
const mongodb = require('../mongodb')

//连接字符串
var DB_CONN_STR = 'mongodb://localhost:27017/rizzoluce';

var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.use('/productInfo', (req, res) => {
    mongodb.Products.find().then((productList) => {
        //res.send(productList)
        jsonWrite(res, productList);
    })
});
module.exports = router;