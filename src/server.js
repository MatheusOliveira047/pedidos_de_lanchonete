const { urlencoded } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const router = require('./routers/router')

app.use(express(urlencoded,{extends:true}))

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(router)





app.listen(process.env.PORT || 8080, ()=>console.log('connected to server'))