const router = require('express').Router()
const controllersRouter = require('../controllers/controller')

router.get('/',controllersRouter.login)
router.post('/index',controllersRouter.index)


















module.exports = router