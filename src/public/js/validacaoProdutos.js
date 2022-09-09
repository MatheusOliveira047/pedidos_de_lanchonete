const formProdutos = document.querySelector('#formProdutos')
formProdutos.onsubmit = (e)=>{
    e.preventDefault()
    const nome = document.querySelector('#nome')
    const preco = document.querySelector('#preco')
   

    if(nome.value === "" || preco.value === ''){
        alert('preencha todos os campos')
    }else{
        formProdutos.submit()
    }
    

}