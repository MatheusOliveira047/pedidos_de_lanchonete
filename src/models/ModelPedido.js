const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    codigoDoCliente:{
        type: mongoose.ObjectId,
        required:true,
    },
    codigoDoProduto:{
        type: mongoose.ObjectId,
        required:true,
    },
    data:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
})
const ModelProduto = mongoose.model('pedido',Schema)


module.exports = ModelProduto
