const ModelCliente = require('../models/ModelCliente')

//cadastrar um novo cliente
const cadastrarclientes = (req,res)=>{
    res.render('cadastrarclientes',{
        title:"Cadastrar Cliente"
    })
}
//recebe os dados do formulário de clientes e manda para o banco de dados
const cadastrarclientesadd = async (req,res)=>{
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
    .then(()=>{
        res.render('cadastrarclientes',{
            title:"Cadastrar Cliente",
            msg:"cadastro realizado com sucesso"
        })
    }).catch((error)=>{
        res.render('cadastrarclientes',{
            title:"Cadastrar Cliente",
            msg:`${email} já está cadastrado`
        })
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
// excluir cliente
const excluircliente = async (req,res)=>{
    const {id} = req.params

    const remove = await ModelCliente.deleteOne({_id:id})

    if(remove){
       res.redirect("/listarclientes")
    }

}

module.exports = {
    cadastrarclientes,
    cadastrarclientesadd,
    listarclientes,
    excluircliente,
}