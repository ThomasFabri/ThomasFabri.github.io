var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L3TR4&num3r0",
  database: "Dados"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "ALTER TABLE planos CHANGE duracao aulas VARCHAR(255);";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Coluna renomeada com sucesso!");
  });
});