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


module.exports = {
    login,
    index
}