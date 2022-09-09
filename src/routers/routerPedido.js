const routerPedido = require('express').Router()
const controllerPedido = require('../controllers/controllerPedido')

// rotas de pedidos
routerPedido.get('/realizarpedido',controllerPedido.realizarPedido)
routerPedido.post('/realizarpedido/add',controllerPedido.realizarPedidoAdd)
routerPedido.get('alterarstatus/:id',controllerPedido.alterarStatus)
// listar pedidos

module.exports = routerPedido