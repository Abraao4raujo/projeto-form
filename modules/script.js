'use strict'
var btn = document.querySelector('#botao-cadastro')
var modal = document.querySelector('#modal-primario')
var modalSecondary = document.querySelector('#modal-secundario')
var closeBtn = document.querySelectorAll('.fechar')
var enviarBtn = document.querySelector('#enviar')
var deleteBtn = document.querySelector('#excluirUsuario')
var inputs = document.querySelectorAll('.preencher')
var inputs2 = document.querySelectorAll('.preencher2')
var btnSalvar = document.querySelector('#salvarUsuario')
//var usuarios = []

function adcElemento(nome, email, sobrenome, cidade) {
    var tabela = document.querySelector('table')
    var linha = tabela.insertRow()
    var celulaNome = linha.insertCell(0)
    var celulaSobrenome = linha.insertCell(1)
    var celulaEmail = linha.insertCell(2)
    var celulaCidade = linha.insertCell(3)
    var btnEditarUsuario = linha.insertCell(4)

    celulaNome.setAttribute('id', 'display-name')
    celulaEmail.setAttribute('id', 'display-email')
    celulaSobrenome.setAttribute('id', 'display-sobrenome')
    celulaCidade.setAttribute('id', 'display-cidade')
    linha.setAttribute('id', 'linhaTr')

    celulaNome.innerHTML = nome
    celulaSobrenome.innerHTML = sobrenome
    celulaEmail.innerHTML = email
    celulaCidade.innerHTML = cidade
    btnEditarUsuario.innerHTML = `<button class="btnEdit">Editar</button>`

    /*var usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        cidade: cidade,
    }

    usuarios.push(usuario)*/
    //botao-editar-usuario
    btnEditarUsuario.addEventListener('click', () => {
        modalSecondary.style.display = "block"
        inputs2.forEach(input => input.value = '')
    })
}

//abrir-modal-cadastro
const openModal = () => document.getElementById('modal-primario').classList.add('active')

//botao-fechar
const closeModal = () => document.getElementById('modal-primario').classList.remove('active')

//fechar-ao-redor-modal
const fecharAoRedor = (event) => {
    if (event.target == modal) {
        closeModal()
    }
    if (event.target == modalSecondary) {
        modalSecondary.style.display = "none"
    }
}

//botao-enviar
function enviarModal() {
    var inputValues = [];
    for (var i = 0; i < inputs.length; i++) {
        inputValues.push(inputs[i].value)
        if (inputs[i].value == '') {
            console.log('Está vazio!')
            return;
        }
    }

    closeModal()
    colarInformacoesInput()
    adcElemento(...inputValues)
    console.log(...inputValues)
    inputs.forEach(input => input.value = '')
}

function colarInformacoesInput() {
    var name = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var sobrenome = document.getElementById('sobrenome').value
    var cidade = document.getElementById('cidade').value

    document.getElementById("user-name").value = name
    document.getElementById("user-email").value = email
    document.getElementById("user-sobrenome").value = sobrenome
    document.getElementById("user-cidade").value = cidade
}

function salvarMudancas() {
    for (var i = 0; i < inputs2.length; i++) {
        if (inputs2[i].value == '') {
            console.log('Está vazio!')
            return;
        }
    }

    var name = document.getElementById('user-name').value
    var email = document.getElementById('user-email').value
    var sobrenome = document.getElementById('user-sobrenome').value
    var cidade = document.getElementById('user-cidade').value

    document.getElementById("display-name").innerHTML = name
    document.getElementById("display-email").innerHTML = email
    document.getElementById("display-sobrenome").innerHTML = sobrenome
    document.getElementById("display-cidade").innerHTML = cidade


    modalSecondary.style.display = "none"
}

const excluirUser = () => {
    var linha = document.querySelector('#linhaTr')
    linha.remove()

    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('sobrenome').value = ""
    document.getElementById('cidade').value = ""

    modalSecondary.style.display = "none"
}
//eventos
btn.addEventListener('click', openModal)
window.addEventListener('click', fecharAoRedor)
enviarBtn.addEventListener('click', enviarModal)
closeBtn.forEach((item) => {
    item.addEventListener('click', closeModal)
})
btnSalvar.addEventListener('click', salvarMudancas)
deleteBtn.addEventListener('click', excluirUser)
//verificar porque o modal secundario nao fecha quando clica no 'X' --funcionando--
//criar uma funcao para fechar o modal secundario ao redor --funcionando--
//verificar porque o modal primario nao apaga as informações(nome,sobrenome,email,cidade) que ja foram registradas do usuario --funcionando--
//aparecer as informacoes do usuario no modal secundario quando clicar em editar
//editar e salvar quando clicar em editar usuario

//quando clica no botao salvar, ele nao modifica o elemento do form.