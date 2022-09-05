const ModelPedido = require('../models/ModelPedido')
const ModelProduto = require('../models/ModelProduto')
const ModelCliente = require('../models/ModelCliente')

const realizarPedido = async (req,res)=>{
    const clientes = await ModelCliente.find({})
    const produtos = await ModelProduto.find({})


    res.render('realizarpedido',{
        title:"Realizar Pedido",
        clientes,
        produtos
    })
}

const realizarPedidoAdd = async(req,res)=>{
    const clientes = await ModelCliente.find({})
    const produtos = await ModelProduto.find({})
    
    const {
        codigoDoCliente,
        codigoDoProduto,
        data,
        status,
    } = req.body

    const newPedido = new ModelPedido({
        codigoDoCliente,
        codigoDoProduto,
        data,
        status
    })

    newPedido.save()
    res.render('realizarpedido',{
        msg:"Pedido Realizado com sucesso!!",
        title:"Realizar Pedido",
        clientes,
        produtos
    })

}

module.exports = {
    realizarPedido,
    realizarPedidoAdd
}