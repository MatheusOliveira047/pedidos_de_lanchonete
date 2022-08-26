const login = (req,res)=>{
    res.render('login',{
        title:"Login"
    })
}

const index = (req,res)=>{
    res.render('index',{
        title:"Index"
    })
}



module.exports = {
    login,
    index
}