const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    telefone:{
        type:Number,
        required:true,
    },
    endereco:{
        type:String,
        required:true,
    },
})
const ModelCliente = mongoose.model('cliente',Schema)






module.exports = ModelCliente
