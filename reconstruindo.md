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

