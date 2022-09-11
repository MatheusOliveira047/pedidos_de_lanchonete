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
Ultilizei Express para criar a API da lanchonete, criando rotas para cadastrar clientes, cadastrar produtos, realizar pedidos, listar clientes, listar produtos, listar pedidos e alterar status dos pedidos.

### NODEMON
Ultilizei Nodemon para auxiliar na aerea de desenvolvimento da aplicação.

### DOTENV
ultilizei Dotenv para guardar dados sensiveis da aplicação, para não subir para o repositório remoto como a URL com o do banco de dados com usuário e senha. 

### MONGOOSE
Ultilizei o Mongoose para usar o metódo connect para connectar o banco de dados a aplicação e o metódos model e schema para criar os Schemas da aplicação, onde pude colocar as validações, unique para impedir de criar dados já cadastrados no banco de dados e required para o usuário não deixar o campo em branco.

### MONGODB
Ultilizei o MongoDb para guardar dados, usando o MongoDb Atlas.

## Link
**live preview**: https://pedidos-lanchonete.herokuapp.com/


## Obs
caso queira analisar o codigo como se estivesse no vscode aperte a tecla ponto (.)
