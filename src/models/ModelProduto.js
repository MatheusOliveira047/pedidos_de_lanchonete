const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    preco:{
        type:Number,
        required:true,
    }
})

const ModelProduto = mongoose.model('produto',Schema)






module.exports = ModelProduto