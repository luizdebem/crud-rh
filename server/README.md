### JSON Server

Para simular um serviço de `backend`, usaremos a biblioteca chamada `json-server`. Essa biblioteca fornece um banco de dados em arquivo `json` e permite a realização de ações `REST` normalmente.

## Como Utilizar

O primeiro passo é instalar a biblioteca utilizando o comando `npm install` e após a conclusão da instalação da biblioteca e suas dependências, iniciar o servidor executando o comando `npm start` dentro desse diretório. Se nenhuma configuração for alterada, o serviço utilizará a porta `3001`.

O arquivo `db.json` será o nosso banco de dados. Nesse arquivo, há a lista `employees` que é a nossa tabela de colaboradores. Com essa tabela, é possível listar, inserir e atualizar registros utilizando os verbos `REST` conhecidos.

A `URL` para as requisições referentes à lista de colaboradores será através da `API` de colaboradores. Deverá ser algo próximo a `http://localhost:3001/employees`. Essa é a primitiva que deve ser utilizada para a lista, atualização e inserção de registros na nossa base de dados. O caminho da `URL` pode ser diferente dependendo das suas configurações locais.
