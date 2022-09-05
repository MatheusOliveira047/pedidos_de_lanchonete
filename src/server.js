const express = require('express')
const app = express()

// rotas
const routerClientes = require('./routers/routerClientes')
const routerProdutos = require('./routers/routerProdutos')
const routerIndex = require('./routers/routerIndex')
const routerPedido = require('./routers/routerPedido')

// configurando dados sensiveis 
const dotenv = require('dotenv')
dotenv.config()

// configuração do banco de dados
const db = require('./database/db')
db()

// receber dados via post
app.use(express.urlencoded({extended:true}))

// configuração de pastas 
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// habilitando rotas
app.use(routerIndex)
app.use(routerClientes)
app.use(routerProdutos)
app.use(routerPedido)


// servidor
app.listen(process.env.PORT || 8080, ()=>console.log('connected to server'))