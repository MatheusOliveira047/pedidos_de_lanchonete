const routerPedido = require('express').Router()
const controllerPedido = require('../controllers/controllerPedido')

// rotas de pedidos
routerPedido.get('/realizarpedido',controllerPedido.realizarPedido)
routerPedido.post('/realizarpedido',controllerPedido.realizarPedidoAdd)
routerPedido.patch('/listarpedidos',controllerPedido.alterarStatus)
routerPedido.get('/listarpedidos',controllerPedido.listarpedidos)


module.exports = routerPedido