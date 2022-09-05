const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    codigoDoCliente:{
        type: String,
        required:true,
    },
    codigoDoProduto:{
        type: String,
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
