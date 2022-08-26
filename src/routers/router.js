const router = require('express').Router()
const controllersRouter = require('../controllers/controller')

// rota de login
router.get('/',controllersRouter.login)

// rota da pagina inicial
router.post('/index',controllersRouter.index)

// rotas de clientes
router.get('/cadastrarclientes',controllersRouter.cadastrarclientes)
router.post('/cadastrarclientes/add',controllersRouter.cadastrarclientesadd)
// listar clientes
// excluir clientes

// rotas de produtos
// cadastrar produtos
// listar produtos
// excluir produtos


// rotas de pedidos
// realizar pedidos
// alterar status de pedidos
// listar pedidos











module.exports = router