const formPedidos = document.querySelector('#formPedidos')
formPedidos.onsubmit = (e)=>{
    e.preventDefault()
    const codidoCliente = document.querySelector('#codigoDoCliente')
    const codigoProduto = document.querySelector('#codigoDoProduto')
    const data = document.querySelector("#data")

    if(codidoCliente.value === "" || codigoProduto.value === '' || data.value === ''){
        alert('preencha todos os campos')
    }else{
        formPedidos.submit()
    }
    

}