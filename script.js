var btn = document.querySelector('#botao-cadastro')
var modal = document.querySelector('#modalCadastrar')
var modalSecondary = document.querySelector('#modalEditar')
var closeBtn = document.querySelectorAll('.fechar')
var enviarBtn = document.querySelector('#enviar')
var deleteBtn = document.querySelector('#excluirUsuario')
var inputs = document.querySelectorAll('.preencher')
var inputs2 = document.querySelectorAll('.preencher2')
var inputValues = []
var btnSalvar = document.querySelector('#salvarUsuario')
var excluirUsuario = document.querySelector('.btnExcluirUsuario')
let selecionarLinha;

function adcElemento(nome, sobrenome, email, cidade) {
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
    linha.id = uuidv4()

    celulaNome.innerHTML = nome
    celulaSobrenome.innerHTML = sobrenome
    celulaEmail.innerHTML = email
    celulaCidade.innerHTML = cidade
    btnEditarUsuario.innerHTML = `<button class="btnEdit">Editar</button>`

    //botao-editar-usuario
    btnEditarUsuario.addEventListener('click', () => {
    modal.style.display = "none"
    modalSecondary.style.display = "block"
    var linhas = document.querySelectorAll('table tr')
        linhas.forEach(linha => {
        linha.addEventListener('click', selecionandoLinha) 
    })
    })
}


function selecionandoLinha(event) {
    selecionarLinha = event.target.parentNode.parentNode
}

//abrir-modal-cadastro
function abrirModal() {
    modal.style.display = 'block'
    modalSecondary.style.display = 'none'
}

//botao-fechar
function fecharModal() {
    modal.style.display = "none"
    modalSecondary.style.display = "none"
}

//botao-enviar
function enviarModal() {
    for (var i = 0; i < inputs.length; i++) {
        inputValues.push(inputs[i].value)
        if (inputs[i].value == '') {
            console.log('Está vazio!')
            return;
        }
    }

    modal.style.display = "none"
    colarInformacoesInput()
    adcElemento(...inputValues)
    console.log(...inputValues)
    inputs.forEach(input => input.value = '')
    inputValues = []
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
            } else {
            var name = document.getElementById('user-name').value
            var email = document.getElementById('user-email').value
            var sobrenome = document.getElementById('user-sobrenome').value
            var cidade = document.getElementById('user-cidade').value
                        
            selecionarLinha.children[0].innerHTML = name,
            selecionarLinha.children[2].innerHTML = email,
            selecionarLinha.children[1].innerHTML = sobrenome,
            selecionarLinha.children[3].innerHTML = cidade
        }
        }
    modalSecondary.style.display = "none"
}

function excluirUser() {
    selecionarLinha.remove() 

    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('sobrenome').value = ""
    document.getElementById('cidade').value = ""

    modalSecondary.style.display = "none"
}

function removerTr(id){
    id.remove()
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
//eventos
btn.addEventListener('click', abrirModal)
enviarBtn.addEventListener('click', enviarModal)
closeBtn.forEach((item) => {
    item.addEventListener('click', fecharModal)
})
btnSalvar.addEventListener('click', salvarMudancas)
excluirUsuario.addEventListener('click', excluirUser)