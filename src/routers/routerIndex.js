const routerIndex = require('express').Router()
const controllerIndex = require('../controllers/controllerIndex')

// rota de login
routerIndex.get('/',controllerIndex.login)
// rota da pagina inicial
routerIndex.post('/index',controllerIndex.index)

module.exports = routerIndex