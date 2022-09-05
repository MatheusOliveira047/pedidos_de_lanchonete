const router = require('express').Router()
const controllersProduto = require('../controllers/controllerProduto')
const controllersClientes = require('../controllers/controllerClientes')
const controllerIndex = require('../controllers/controllerIndex')

// rota de login
router.get('/',controllerIndex.login)
// rota da pagina inicial
router.post('/index',controllerIndex.index)


// rotas de clientes
router.get('/cadastrarclientes',controllersClientes.cadastrarclientes)
router.post('/cadastrarclientes/add',controllersClientes.cadastrarclientesadd)
router.get('/listarclientes',controllersClientes.listarclientes)
router.get('/excluircliente/:id',controllersClientes.excluircliente)

// rotas de produtos
router.get('/cadastrarprodutos',controllersProduto.cadastrarproduto)
router.post('/cadastrarprodutos/add',controllersProduto.cadastrarprodutoadd)
router.get('/listarprodutos',controllersProduto.listarprodutos)
router.get('/excluirproduto/:id',controllersProduto.excluirproduto)



// rotas de pedidos
// realizar pedidos
// alterar status de pedidos
// listar pedidos











module.exports = router