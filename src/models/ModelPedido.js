const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    codigoDoCliente:{
        type:ObjectId,
        required:true,
    },
    codigoDoProduto:{
        type:ObjectId,
        required:true,
    },
    data:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
})
const ModelProduto = mongoose.model('produto',Schema)


module.exports = ModelProduto
