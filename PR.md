# PREPARAÇÃO DO DATASET

O dataset foi preparado com recurso a um script Python, que não só remove o campo redundante "id" no inicio de cada objeto, mas tambem preenche qualquer campo em falta com o valor "unknown".

O dataset corrigido, tal como o script Python, estão ambos na pasta 'ex1'

# EX1

Criei apenas um model e um controller, ambos denomidados de 'edicoes.js' nas suas respetivas pastas.
A base de dados tem apenas uma colecao, 'edicoes', logo provem dai a minha solucao.
Todas as queries sao feitas com recurso aos routers, que chamam o controller, que por si usa o modelo para
realizar operacoes na base de dados. 

## Execucao:

Para executar esta API usa-se o seguinte conjunto de comandos:

1. cd ./ex1
2. docker cp ./dataset_tratado mongoEW:/tmp/dataset_tratado.json
3. docker exec -it mongoEW sh
4. mongoimport -d eurovisao -c edicoes /tmp/dataset_tratado.json --jsonArray
5. exit
6. cd ./API
7. npm i
8. npm start

# EX2

Esta aplicação tira especial proveito do modulo Axios para realizar pedidos à API desenvolvida.

Para executar esta app, temos de executar o seguinte conjunto de comandos:

1. cd ./ex2/Frontend
2. npm i
3. npm start
