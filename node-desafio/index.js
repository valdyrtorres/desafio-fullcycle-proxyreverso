const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

let usuarios = ["Valdir", "Torres", "Borges", "Rildav", "Gesbor"];

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    let usuario = usuarios[(Math.floor(Math.random() * usuarios.length))];
    let sql = `INSERT INTO people(name) values('${usuario}')`
    
    connection.query(sql)
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})