var mySQL = require('mysql2');

var con = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'li#2Wams',
    database: 'mydb'
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = 'DROP TABLE testTable';
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log('table deleted');
    });
});