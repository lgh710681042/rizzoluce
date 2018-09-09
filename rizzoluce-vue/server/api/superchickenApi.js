var express = require('express');
var router = express.Router();
const mongodb = require('../mongodb')

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

// 查询吃鸡用户信息
router.use('/userInfo', (req, res) => {
    mongodb.SuperChickenUsers.find().then((userInfo) => {
        //res.send(productList)
        jsonWrite(res, userInfo);
    })
});

// 添加吃鸡用户
router.use('/addUser', (req, res) => {
    var params = req.query;
    console.log(params);

    mongodb.SuperChickenUsers.update({imei:params.imei},{$set:{date:Date()}},{upsert:true},function(err,data){
        console.log('save success...');
        console.log(data);
    });    

    // mongodb.SuperChickenUsers.find({imei:params.imei}).then((user) =>{
    //     console.log(user);

    // })

    // var newUser = new mongodb.SuperChickenUsers({
    //     imei:params.imei,
    //     date:Date()
    // })

    // newUser.save(function(err) {
    //     if (err) {
    //         console.log('save failed');
    //     }
    //     else{
    //         console.log('save success');
    //     }
    // });
});
module.exports = router;