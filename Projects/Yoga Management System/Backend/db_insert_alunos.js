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
  var sql = "INSERT INTO alunos (num,	cliente,	nascimento,	sexo,	ultimostatus,	email,	contato,	cpf,	cep,	logradouro,	numero,	complemento,	bairro,	cidade,	uf) VALUES ?";
  var values =
    con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});