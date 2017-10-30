var express = require('express');
var router = express.Router();
var mysql    = require('mysql');

var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',//administrator    管理员
  password : '123456',
  database : 'baobei'
});
/* GET home page. */
router.get('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    connection.query('SELECT title,date,id FROM news', function (err, rows, fields) {
        console.log(rows);
        res.send(rows)
    });
})
router.post('/detail', function(req, res, next) {
    var det=req.body.id;
    console.log(det);
    res.header('Access-Control-Allow-Origin','*');
    connection.query('SELECT title,detail FROM news WHERE id='+det, function(err, rows, fields) {
        console.log(rows);
        res.send(rows)
    });
})
module.exports = router;
