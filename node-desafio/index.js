const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');

// Criar tabela people
const conn = mysql.createConnection(config);

const sqlCriaTabela = `CREATE TABLE if not exists people(id int not null auto_increment, name varchar(255), primary key(id));`
conn.query(sqlCriaTabela)
conn.end()
// Fim criar tabela people

let usuarios = ["Valdir", "Torres", "Borges", "Rildav", "Gesbor"];

app.get('/', (req,res) => {

    const connection = mysql.createConnection(config);


    let usuario = usuarios[(Math.floor(Math.random() * usuarios.length))];
    var sql = `INSERT INTO people(name) values('${usuario}')`;
    
    connection.query(sql);

    var conteudo = '<h1>Full Cycle Rocks!</h1>' + '<h3>Lista de Usuários<h3>';

    sql = `SELECT name FROM people`;

    var linhas;

    connection.query(sql, function(err, linhas){ 

        for (var i = 0; i < linhas.length; i++){
            conteudo = conteudo + linhas[i].name + '<br>';
        }

        console.log(conteudo);
        res.send(conteudo);
    });

    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})