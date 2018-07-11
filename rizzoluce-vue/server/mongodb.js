// var MongoClient = require('mongodb').MongoClient;
// //连接字符串
// var DB_CONN_STR = 'mongodb://localhost:27017/rizzoluce';  

// //定义函数表达式，用于操作数据库并返回结果
// var insertData = function(db, callback) {  
//     const mydb = db.db('rizzoluce');
//     //获得指定的集合 
//     var collection = mydb.collection('users');
//     //插入数据
//     var data = [{_id:7,"name":'rose',"age":21},{_id:8,"name":'mark',"age":22}];
//     collection.insert(data, function(err, result) { 
//         //如果存在错误
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         } 
//         //调用传入的回调方法，将操作结果返回
//         callback(result);
//     });
// }

// //使用客户端连接数据，并指定完成时的回调方法
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     //执行插入数据操作，调用自定义方法
//     insertData(db, function(result) {
//         //显示结果
//         console.log(result);
//         //关闭数据库
//         db.close();
//     });
// });

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductsSchema = new Schema(
    {
        product_id: Number,
        product_name: String,
        image_url: String
    },
    {VersionKet: false}
)

const Models = {
    Products : mongoose.model('products', ProductsSchema)
}

mongoose.connect('mongodb://localhost:27017/rizzoluce')

const db = mongoose.connection

db.on('error',console.error.bind(console,'Database connection error.'));
db.once('open', () => {
    console.log('The database has connected.')
});

module.exports = Models