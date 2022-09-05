const routerClientes = require('express').Router()
const controllersClientes = require('../controllers/controllerClientes')

// rotas de clientes
routerClientes.get('/cadastrarclientes',controllersClientes.cadastrarclientes)
routerClientes.post('/cadastrarclientes/add',controllersClientes.cadastrarclientesadd)
routerClientes.get('/listarclientes',controllersClientes.listarclientes)
routerClientes.get('/excluircliente/:id',controllersClientes.excluircliente)


// rotas de pedidos
// realizar pedidos
// alterar status de pedidos
// listar pedidos

module.exports = routerClientes