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
const conn = mysql.createConnection(config);

const table_exists_query = `
  SELECT COUNT(*) table_exists 
    FROM information_schema.TABLES 
   WHERE TABLE_SCHEMA = DATABASE()
     AND TABLE_TYPE = 'BASE TABLE'
     AND TABLE_NAME = 'people';`;

var tabela_people_existe = false;

conn.query(table_exists_query, function(err, linhas){ 

    console.log(linhas);

    tabela_people_existe = linhas[0].table_exists > 0 ? true : false

    console.log(linhas[0].table_exists);

    console.log(tabela_people_existe);

    if(!tabela_people_existe) {
        console.log('ENTREI');
        var sqlCriar = `CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))`;
        conn.query(sqlCriar, function(err, rows) {
            if(err) 
                console.log('Erro na criação da tabela people');
            else
                console.log('Tabela people criada');
        });
    }
    
});

conn.end()

let usuarios = ["Valdir", "Torres", "Borges", "Rildav", "Gesbor"];

app.get('/', (req,res) => {

    const connection = mysql.createConnection(config);


    let usuario = usuarios[(Math.floor(Math.random() * usuarios.length))];
    var sql = `INSERT INTO people(name) values('${usuario}')`;
    
    connection.query(sql);

    var conteudo = '<h1>Full Cycle Rocks!</h1>' + '<h3>Lista de Usuários<h3>';

    sql = `SELECT name FROM people`;
    //console.log(sql);
    //var [rows] = connection.query(sql);

    //console.log(rows)

    var linhas;

    connection.query(sql, function(err, linhas){ 
        //const pares = JSON.parse(JSON.stringify(linhas));

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