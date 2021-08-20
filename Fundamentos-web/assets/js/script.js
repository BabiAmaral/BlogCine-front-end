/* palavras reservadas para criar variáveis: var/let/const*/

/*
Case sensitive = reconhece letras maiusculas e minusculas

Formas de acesso ao DOM

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let sugestao = document.querySelector('#sugestao')
let nomeOk= false
let emailOk= false
let segestaoOk=false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
 let txtNome= document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color= 'red'
    }
    else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color= 'green'
        nomeOk= true
    }
}

function validaEmail() {
    let txtEmail= document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1  || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML= 'Email inválido'
        txtEmail.style.color= 'red'
    }
    else {
        txtEmail.innerHTML= 'Email Válido'
        txtEmail.style.color= 'green'
        emailOk= true
    }

}

function validaSugestao(){
    txtSugestao= document.querySelector('#txtSugestao')
    if(sugestao.value.length >300) {
        txtSugestao.innerHTML= 'Texto muito grande, digite até 300 caracteres.'
        txtSugestao.style.color= 'red'
        txtSugestao.style.display='block'
    }
    else {
        txtSugestao.style.display='none'
        sugestaoOk= true
    }
}

function enviar(){
    if(nomeOk==true && emailOk==true && sugestaoOk==true){
        alert('Formulário enviado com sucesso!!')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}