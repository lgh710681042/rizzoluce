var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();

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
    
    // var sql = $sql.user.add;
    // var params = req.body;
    // console.log(params);
    // pool.query(sql, [params.username, params.pwd], function(error, results, fields) {
    //     if (error) throw error;
    //     if (results) {
    //         console.log(results)
    //         jsonWrite(res, results);
    //     }
    // })
});