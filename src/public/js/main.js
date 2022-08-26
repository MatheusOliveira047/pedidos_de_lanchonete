// validação de login
const form_login = document.querySelector('#form_login')
form_login.onsubmit = (e)=>{
    e.preventDefault()
    const user = document.querySelector("#user").value
    const pwd = document.querySelector("#password").value

    if(user === 'admin' && pwd === 'admin'){
        form_login.submit()
    }else(
        alert('usuário ou senha incorreto')
    )


}