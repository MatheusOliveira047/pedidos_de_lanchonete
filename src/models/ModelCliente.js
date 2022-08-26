const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    telefone: Number,
    endereco: String,
})
const ModelCliente = mongoose.model('cliente',Schema)






module.exports = ModelCliente
