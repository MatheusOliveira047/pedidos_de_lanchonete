const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        message: '{VALUE} já está cadastrado'
    },
    telefone:{
        type:Number,
        required:true,
        unique:true,
        message: '{VALUE} já está cadastrado'
    },
    endereco:{
        type:String,
        required:true,
    },
})
const ModelCliente = mongoose.model('cliente',Schema)






module.exports = ModelCliente
