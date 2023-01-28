var btn = document.querySelector('#botao-cadastro')
var modal = document.querySelector('#meumodal')
var modalSecundario = document.querySelector('#modal-secundario')
var span = document.querySelectorAll('.fechar')
var btnEnviar = document.querySelector('#enviar')
var btnExcluir = document.querySelector('.excluirUsuario')
var inputs = document.querySelectorAll('.preencher')
var inputs2 = document.querySelectorAll('.preencher2')
var inputValues = []
var btnSalvar = document.querySelector('#salvar')

function adcElemento(nome, email, sobrenome, cidade) {
/*    var tabela = document.querySelector('tbody')
    var elementoTr = document.createElement('tr')
    var elementoTd1 = document.createElement('td')
    var elementoTd2 = document.createElement('td')
    var elementoTd3 = document.createElement('td')
    var elementoTd4 = document.createElement('td')
    var elementoTd5 = document.createElement('td')
    var btnExcluirUsuario = document.createElement('button')
    var btnEditarUsuario = document.createElement('button')
    btnExcluirUsuario.setAttribute('class', 'excluirConta')
    btnEditarUsuario.setAttribute('class', 'editarUsuario')

    tabela.appendChild(elementoTr)
    elementoTr.appendChild(elementoTd1)
    elementoTr.appendChild(elementoTd2)
    elementoTr.appendChild(elementoTd3)
    elementoTr.appendChild(elementoTd4)
    elementoTr.appendChild(elementoTd5)
    elementoTd5.appendChild(btnExcluirUsuario)
    elementoTd5.appendChild(btnEditarUsuario)
    
    elementoTd1.innerHTML = nome
    elementoTd2.innerHTML = sobrenome
    elementoTd3.innerHTML = email
    elementoTd4.innerHTML = cidade
    btnExcluirUsuario.innerHTML = 'excluir'
    btnEditarUsuario.innerHTML = 'editar'

    
    */
   //testando novo codigo

    var tabela = document.querySelector('table')
    var linha = tabela.insertRow()
    var celulaNome = linha.insertCell(0)
    var celulaSobrenome = linha.insertCell(1)
    var celulaEmail = linha.insertCell(2)
    var celulaCidade = linha.insertCell(3)
    var btnEditarUsuario = linha.insertCell(4)
    
    celulaNome.innerHTML = nome
    celulaSobrenome.innerHTML = sobrenome
    celulaEmail.innerHTML = email
    celulaCidade.innerHTML = cidade
    btnEditarUsuario.innerHTML = `<button>Editar</button>`

    //botao-editar-usuario
    btnEditarUsuario.addEventListener('click', () => {
       modalSecundario.style.display = "block"
   })

   //botao-excluir-usuario
    /*
    btnExcluir.addEventListener('click', (event) => {
    var botaoClicado = event.target
    var linhaPai = botaoClicado.parentNode.parentNode
    linhaPai.remove()
    })
    */
}

//abrir-modal-cadastro
function abrirModal() {
    modal.style.display = 'block'
}

//botao-fechar
function botaoFechar() {
    modal.style.display = "none"
    modalSecundario.style.display = "none"
}

//fechar-ao-redor-modal
function fecharAoRedor(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
    if(event.target == modalSecundario) {
        modalSecundario.style.display = "none"
    }}

//botao-enviar
function enviar () {
    for(var i = 0; i < inputs.length; i++){
     inputValues.push(inputs[i].value)
     if(inputs[i].value == '') {
         console.log('Está vazio!')
         return;
     }
 }
 modal.style.display = "none"
 adcElemento(...inputValues)
 console.log(...inputValues)
 inputs.forEach(input => input.value = '')
 }
//botao-salvar
 function botaoSalvar() {
    console.log('clicou no botao salvar')
    var nome = document.getElementById('nome')
    console.log(nome)
 }

 //eventos
btnSalvar.addEventListener('click', botaoSalvar)
btn.addEventListener('click', abrirModal)
window.addEventListener('click', fecharAoRedor)
btnEnviar.addEventListener('click', enviar)
span.forEach((item) => {
    item.addEventListener('click', botaoFechar) 
})
//verificar porque o modal secundario nao fecha quando clica no 'X' --funcionando--
//criar uma funcao para fechar o modal secundario ao redor --funcionando--
//verificar porque o modal primario nao apaga as informações(nome,sobrenome,email,cidade) que ja foram registradas do usuario --funcionando--
//aparecer as informacoes do usuario no modal secundario quando clicar em editar
//editar e salvar quando clicar em editar usuario

//quando clica no botao salvar, ele nao modifica o elemento do form.