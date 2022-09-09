const formClientes = document.querySelector('#formClientes')
formClientes.onsubmit = (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const endereco = document.querySelector('#endereco')
    const telefone = document.querySelector('#telefone')

    if(name.value === "" || email.value === '' || endereco.value === '' || telefone.value === ''){
        alert('preencha todos os campos')
    }else{
        formClientes.submit()
    }
    

}