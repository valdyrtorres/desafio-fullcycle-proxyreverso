* Troubleshooting:
** PASSO 1:
Primeiro isolo o node somente rodando o app sem nginx e mysql:
Nota: configurei para usar o volume apontado para minha máquina local
cd node-desafio
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash

cd /usr/src/app

npm install --save

node index.js

acesse o browser na porta 3000: http://localhost:3000

** PASSO 2:
Adicionar o proxy reverso com o nginx:
Descomentar o service nginx no docker-compose.yaml

** PASSO 3
Adicionar o MySQL e verificar se a tabela está criada
Descomentar o service MySql no docker-compose.yaml
Nota: configurei db (MySQL) para usar o volume apontado para minha máquina local
docker exec -it db bash
mysql -u root -p nodedb
criar tabela:
Não precisou, já existia
select DATABASE(); --> ver o database em que está

** PASSO 4:
Habilitar a gravação: um usuário acessa o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.


