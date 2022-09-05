const router = require('express').Router()
const controllersRouter = require('../controllers/controller')

// rota de login
router.get('/',controllersRouter.login)

// rota da pagina inicial
router.post('/index',controllersRouter.index)

// rotas de clientes
router.get('/cadastrarclientes',controllersRouter.cadastrarclientes)
router.post('/cadastrarclientes/add',controllersRouter.cadastrarclientesadd)
router.get('/listarclientes',controllersRouter.listarclientes)
router.get('/excluircliente/:id',controllersRouter.excluircliente)

// rotas de produtos
router.get('/cadastrarprodutos',controllersRouter.cadastrarproduto)
router.post('/cadastrarprodutos/add',controllersRouter.cadastrarprodutoadd)
router.get('/listarprodutos',controllersRouter.listarprodutos)
router.get('/excluirproduto/:id',controllersRouter.excluirproduto)

// excluir produtos


// rotas de pedidos
// realizar pedidos
// alterar status de pedidos
// listar pedidos











module.exports = router