const routerProduto = require('express').Router()
const controllersProduto = require('../controllers/controllerProduto')

// rotas de produtos
routerProduto.get('/cadastrarprodutos',controllersProduto.cadastrarproduto)
routerProduto.post('/cadastrarprodutos/add',controllersProduto.cadastrarprodutoadd)
routerProduto.get('/listarprodutos',controllersProduto.listarprodutos)
routerProduto.get('/excluirproduto/:id',controllersProduto.excluirproduto)

module.exports = routerProduto