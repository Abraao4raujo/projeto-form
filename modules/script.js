var btn = document.querySelector('#botao-cadastro')
var modal = document.querySelector('#meumodal')
var modalSecondary = document.querySelector('#modal-secundario')
var closeBtn = document.querySelectorAll('.fechar')
var enviarBtn = document.querySelector('#enviar')
var deleteBtn = document.querySelector('.excluirUsuario')
var inputs = document.querySelectorAll('.preencher')
var inputs2 = document.querySelectorAll('.preencher2')
var inputValues = []
var btnSalvar = document.querySelector('#salvarUsuario')

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
    
    celulaNome.innerHTML = nome
    celulaSobrenome.innerHTML = sobrenome
    celulaEmail.innerHTML = email
    celulaCidade.innerHTML = cidade
    btnEditarUsuario.innerHTML = `<button class="btnEdit">Editar</button>`

    //botao-editar-usuario
    btnEditarUsuario.addEventListener('click', () => {
       modalSecondary.style.display = "block"
   })
}

//abrir-modal-cadastro
function abrirModal() {
    modal.style.display = 'block'
}

//botao-fechar
function fecharModal() {
    modal.style.display = "none"
    modalSecondary.style.display = "none"
}

//fechar-ao-redor-modal
function fecharAoRedor(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
    if(event.target == modalSecondary) {
        modalSecondary.style.display = "none"
    }}

//botao-enviar
function enviarModal () {
    for(var i = 0; i < inputs.length; i++){
     inputValues.push(inputs[i].value)
     if(inputs[i].value == '') {
         console.log('Está vazio!')
         return;
     }
 }

 modal.style.display = "none"
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

 function salvarMudancas(){
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

 //eventos
btn.addEventListener('click', abrirModal)
window.addEventListener('click', fecharAoRedor)
enviarBtn.addEventListener('click', enviarModal)
closeBtn.forEach((item) => {
    item.addEventListener('click', fecharModal) 
})
btnSalvar.addEventListener('click', salvarMudancas)
//verificar porque o modal secundario nao fecha quando clica no 'X' --funcionando--
//criar uma funcao para fechar o modal secundario ao redor --funcionando--
//verificar porque o modal primario nao apaga as informações(nome,sobrenome,email,cidade) que ja foram registradas do usuario --funcionando--
//aparecer as informacoes do usuario no modal secundario quando clicar em editar
//editar e salvar quando clicar em editar usuario

//quando clica no botao salvar, ele nao modifica o elemento do form.