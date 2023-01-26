var btn = document.querySelector('#botao-cadastro')
var modal = document.querySelector('#meumodal')
var span = document.querySelector('.fechar')
var btnEnviar = document.querySelector('#enviar')
var btnExcluir = document.querySelector('#excluirConta')

function adcElemento(nome, email, sobrenome, cidade) {
    var tabela = document.querySelector('tbody')
    var elementoTr = document.createElement('tr')
    var elementoTd1 = document.createElement('td')
    var elementoTd2 = document.createElement('td')
    var elementoTd3 = document.createElement('td')
    var elementoTd4 = document.createElement('td')
    var elementoTd5 = document.createElement('td')
    var btnExcluirUsuario = document.createElement('button')
    btnExcluirUsuario.setAttribute('class', 'excluirConta')


    tabela.appendChild(elementoTr)
    elementoTr.appendChild(elementoTd1)
    elementoTr.appendChild(elementoTd2)
    elementoTr.appendChild(elementoTd3)
    elementoTr.appendChild(elementoTd4)
    elementoTr.appendChild(elementoTd5)
    elementoTd5.appendChild(btnExcluirUsuario)
    
    elementoTd1.innerHTML = nome
    elementoTd2.innerHTML = sobrenome
    elementoTd3.innerHTML = email
    elementoTd4.innerHTML = cidade
    btnExcluirUsuario.innerHTML = 'excluir'
}

function entrar() {
    modal.style.display = "block";
}

function fechar() {
    modal.style.display = "none";
}

function fecharAoRedor(event){
    if(event.target == modal) {
        modal.style.display = "none"
    }
}

function enviar(){
    /*
    var nomeUsuario = document.querySelector('#nome')
    var sobrenomeUsuario = document.querySelector('#sobrenome')
    var emailUsuario = document.querySelector('#email')
    var cidadeUsuario = document.querySelector('#cidade')

    if(!nomeUsuario.value||!sobrenomeUsuario.value||!emailUsuario.value||!cidadeUsuario.value){
        console.log('esta vazio')
    }
    else{
    fechar()
    adcElemento(nomeUsuario.value, sobrenomeUsuario.value, emailUsuario.value, cidadeUsuario.value)
    console.log(nomeUsuario.value, sobrenomeUsuario.value, emailUsuario.value, cidadeUsuario.value)
    }
    */

   var inputs = document.querySelectorAll('input')
   var inputValues = []
   for(var i = 0; i < inputs.length; i++){
    inputValues.push(inputs[i].value)
    if(inputs[i].value == '') {
        console.log('Está vazio!')
        return;
    }
}
fechar()
adcElemento(...inputValues)
console.log(...inputValues)
limparForm()
}

function limparForm() {
    nome.value=''
    sobrenome.value=''
    email.value=''
    cidade.value=''
}

function excluirUsuario() {
    adcElemento().remove()
}


btn.addEventListener('click', entrar)
span.addEventListener('click', fechar)
window.addEventListener('click', fecharAoRedor)
btnEnviar.addEventListener('click', enviar)
//btnExcluir.addEventListener('click', excluirUsuario)