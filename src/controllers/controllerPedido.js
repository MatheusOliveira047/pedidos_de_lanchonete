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

const alterarStatus = async (req,res)=>{
    const pedido = await ModelPedido.find({})
    const {id} = req.params
    const {status} = req.body

    const Status = status

    const pedidoUp = await ModelPedido.findOneAndUpdate({_id:id},Status)



    res.render('alterarstatus',{
        title:'Alterar Status do pedido',
        pedido
    })
}

module.exports = {
    realizarPedido,
    realizarPedidoAdd,
    alterarStatus
}