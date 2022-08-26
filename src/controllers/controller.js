const ModelCliente = require('../models/ModelCliente')

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

function cadastrarclientesadd(req,res){
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
    res.send('cadastro Realizado')

}


module.exports = {
    login,
    index,
    cadastrarclientes,
    cadastrarclientesadd,
}