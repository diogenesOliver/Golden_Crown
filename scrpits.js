let btnEntrar = document.getElementById('btnEntrar')
let btnIsnc = document.getElementById('btnInsc')

let modalEntrar = document.getElementById('modalEntrar')
let modalCriarUsuario = document.getElementById('modalCriarUsuario')

let sairDoMenuCriarUsuario = document.getElementById('sairModal_2')
let sairDoModalEntrar = document.getElementById('sairModal_1')

/* Entrando no menu usuário */

btnEntrar.addEventListener('click', () => {
    modalEntrar.style.display = 'block'
})

btnIsnc.addEventListener('click', () => {
    modalCriarUsuario.style.display = 'block'
})

/* Saindo do menu usuário */

sairDoMenuCriarUsuario.addEventListener('click', () => {
    modalCriarUsuario.style.display = 'none'
})

sairDoModalEntrar.addEventListener('click', () => {
    modalEntrar.style.display = 'none'
})

/* Validando o tamanho da senha */

let primeiraSenha = document.getElementById('idSenha_1')
let segundaSenha = document.getElementById('idSenha_2')

primeiraSenha.addEventListener('input', () => {
    if(primeiraSenha.value.length < 5){
        primeiraSenha.style.borderColor = 'red'
        primeiraSenha.style.color = 'red'
    }else if(primeiraSenha.value.length >= 5 && primeiraSenha.value.length <= 8){
        primeiraSenha.style.borderColor = 'yellow'
        primeiraSenha.style.color = 'yellow'
    }else{
        primeiraSenha.style.borderColor = 'green'
        primeiraSenha.style.color = 'green'
    }
})

/* Validando o compatibilidade das senhas */

segundaSenha.addEventListener('input', () => {
    if(segundaSenha.value != primeiraSenha.value){
        segundaSenha.style.borderColor = 'red'
        segundaSenha.style.color = 'red'
    }else{
        segundaSenha.style.borderColor = 'green'
        segundaSenha.style.color = 'green'
    }
})