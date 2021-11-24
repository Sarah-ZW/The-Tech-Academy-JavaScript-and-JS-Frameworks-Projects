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
    var sql = 'SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id';
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log(result);
    });
});