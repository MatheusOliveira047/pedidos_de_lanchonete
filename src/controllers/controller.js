const ModelCliente = require('../models/ModelCliente')
const ModelProduto = require('../models/ModelProduto')

// login no sistema
const login = (req,res)=>{
    res.render('login',{
        title:"Login"
    })
}

// pagina inicial do sistema
const index = (req,res)=>{
    res.render('index',{
        title:"Index"
    })
}

//cadastrar um novo cliente
const cadastrarclientes = (req,res)=>{
    res.render('cadastrarclientes',{
        title:"Cadastrar Cliente"
    })
}

//recebe os dados do formulário de clientes e manda para o banco de dados
const cadastrarclientesadd = (req,res)=>{
    const {
        name,
        email,
        telefone,
        endereco,
    } = req.body

    const NewCliente = new ModelCliente({
        name,
        email,
        telefone,
        endereco,
    })

    NewCliente.save()
    res.render('cadastrarclientes',{
        title:"Cadastrar Cliente",
        msg:"cadastro realizado com sucesso"
    })

}

// lista os clientes cadastrados no banco de dados
const listarclientes = async (req,res)=>{
    const clientes = await ModelCliente.find({})

    res.render('listarclientes',{
        
        title:'Lista de Clientes',
        clientes
    })
}

const excluircliente = async (req,res)=>{
    const {id} = req.params

    const remove = await ModelCliente.deleteOne({_id:id})

    if(remove){
       confirm('deseja excluir esse')
    }

}


const cadastrarproduto = (req,res)=>{
    res.render('cadastrarprodutos',{
        title:'Cadastrar Produtos'
    })
}

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

const listarprodutos = async (req,res)=>{
    const produtos = await ModelProduto.find({})

    res.render('listarprodutos',{
        
        title:'Lista de Clientes',
        produtos
    })
}


module.exports = {
    login,
    index,
    cadastrarclientes,
    cadastrarclientesadd,
    listarclientes,
    cadastrarproduto,
    cadastrarprodutoadd,
    listarprodutos,
    excluircliente,
}