para funcionar:
docker-compose up -d

Acessar localhost:8080

Nome dos containers:

app -> aplicação retorna ao acessar localhost:8080

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrados no banco de dados.

db -> Banco de dados mysql com database chamado nodedb e tabela chamada people.
Para acessar:
docker exec -it db bash

No prompt: mysql -u root -p nodedb
Digite o comando sql: select * from people;

nginx -> Proxy reverso
Direciona para o app node que é acessado por localhost:3000 e é acessado pelo proxy reverso em localhost:8080











