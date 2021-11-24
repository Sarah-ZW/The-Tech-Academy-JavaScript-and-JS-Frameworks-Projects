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
    var sql = 'UPDATE customers SET address = "Canyon 123" WHERE address = "Valley 345"';
    con.query(sql, function (err, result) {
        if(err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});