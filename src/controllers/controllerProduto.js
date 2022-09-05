const ModelProduto = require('../models/ModelProduto')

//cadastrar produtos
const cadastrarproduto = (req,res)=>{
    res.render('cadastrarprodutos',{
        title:'Cadastrar Produtos'
    })
}
//receber dados do formulário de produtos e mandar para o banco de dados
const cadastrarprodutoadd = (req,res)=>{
    const {
        name,
        preco,
    } = req.body

    const NewProduto = new ModelProduto({
        name,
       preco
    })

    NewProduto.save()
    res.render('cadastrarprodutos',{
        title:"Cadastrar Produtos",
        msg:"cadastro realizado com sucesso"
    })

}
//listar produtos
const listarprodutos = async (req,res)=>{
    const produtos = await ModelProduto.find({})

    res.render('listarprodutos',{
        
        title:'Lista de Clientes',
        produtos
    })
}
//excluir produtos
const excluirproduto = async (req,res)=>{
    const {id} = req.params

    const remove = await ModelProduto.deleteOne({_id:id})

    if(remove){
       res.redirect("/listarprodutos")
    }

}


module.exports = {
    cadastrarproduto,
    cadastrarprodutoadd,
    listarprodutos,
    excluirproduto,
}