# Pedidos de Lanchonete

## Sobre o projeto

### Interface de uma lanchonete onde é possível realizar:
* Cadastro de clientes
* listar e excluir clientes
* cadastro de produtos
* listar e exluir produtos
* realizar pedidos
* listar e alterar status dos pedidos  

## Tecnologias utilizadas
### NPM
Com NPM instalei as bibliotecas Mongoose, Dotenv, Nodemon, o framework Express e a template engine EJS. 

### EJS
Ultilizei EJS para desenvolver o Front-End da aplicação, ultilizando partials para uma melhor reutilização de codigo,
ForEach para vizualição dinâmica dos dados vindo do banco de dados.

### CSS
Ultilizei CSS para estilizar a interface.

### EXPRESS
Ultilizei Express para criar a API da lanchonete, criando CRUD para clientes, produtos e pedido. no CRUD dos Clientes é possível Cadastrar um cliente com __NOME__, __EMAIL__, __ENDEREÇO__, __TELEFONE__ e possível também listar todos os clientes cadastrados e Excluir o cliente que desejar. No CRUD para Produtos é possível cadastrar um produto com __NOME__ e __PREÇO__ e também listar todos os produtos cadastrados e excluir o produto que desejar. No CRUD de Pedidos é possível realizar um pedido selecionando um dos clientes já cadastrados no banco de dados e escolhendo os produtos ja cadastrados e possível também listar os pedidos já realizado e alterar o status do pedido.

### NODEMON
Ultilizei Nodemon para auxiliar na aerea de desenvolvimento da aplicação.

### DOTENV
ultilizei Dotenv para guardar dados sensiveis da aplicação, para não subir para o repositório remoto como a URL com o do banco de dados com usuário e senha. 

### MONGOOSE
Ultilizei Mongosse para criar os Schemas dos __CLIENTES__, __PRODUTOS__ e __PEDIDOS__, ultilizando os metódos Model e Schema adicionando também algumas validações com __unique__ onde é possível verificar se o dados já foi cadastrado no banco de dados e __required__ onde é possível verificar se o usuário deixou o campo em branco.

### MONGODB
Ultilizei o MongoDb para guardar dados, usando o MongoDb Atlas.

## Link
**live preview**: https://pedidos-lanchonete.herokuapp.com/


## Obs
caso queira analisar o codigo como se estivesse no vscode aperte a tecla ponto (.)
