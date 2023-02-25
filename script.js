var modalCadastrar = document.querySelector('#modalCadastrar')
var botaoFecharModal = document.querySelector('#fechar')
var botaoEnviarInput = document.querySelector('#enviar')
var inputs = document.querySelectorAll('.preencher')
var botaoCadastro = document.querySelector('#botao-cadastro')//usando
var botaoEditar = document.querySelector('#botao-editar')//usando
var botaoExcluir = document.querySelector('#botao-excluir')//usando
var botaoSalvar = document.querySelector('.btnSalvarUsuario')
var inputValues = []
var linhaSelecionada2;
botaoEditar.style.display = 'none'
botaoExcluir.style.display = 'none'

function adcElemento(nome, sobrenome, email, cidade) {
    var tabela = document.querySelector('table')
    var linha = tabela.insertRow()
    linha.innerHTML = `
    <td id="display-nome">${nome}</td>
    <td id="display-sobrenome">${sobrenome}</td>
    <td id="display-email">${email}</td>
    <td id="display-cidade">${cidade}</td>`
    tabela.addEventListener(`click`, selecionandoLinha)
}

function abrirModal(acao) {
    const modalCadastrar = document.querySelector('#modalCadastrar')
    const tituloModal = document.querySelector('.modal-head p')
    const botaoEnviar = document.querySelector('#enviar')
    tituloModal.textContent = acao === 'criar' ? 'Cadastrar Cliente'  : 'Editar Cliente'
    botaoEnviar.value = acao === 'criar' ? 'Cadastrar' : 'Salvar'
    if(tituloModal.textContent === 'Cadastrar Cliente'){
    inputs.forEach(input => input.value = '')
    }
    modalCadastrar.classList.add('active')
}

function selecionandoLinha(event) {
    const linhaSelecionada = event.target.closest(`tr`)
    linhaSelecionada2 = linhaSelecionada
    const nome = linhaSelecionada.children[0].innerText
    const sobrenome = linhaSelecionada.children[1].innerText
    const email = linhaSelecionada.children[2].innerText
    const cidade = linhaSelecionada.children[3].innerText
    dadosInput(nome, sobrenome, email, cidade)
    if (linhaSelecionada) {
        const linhas = document.querySelectorAll('table tr')
        linhas.forEach(linha => {
            if (linha !== linhaSelecionada) {
                linha.classList.remove('active')
            }
        })
        linhaSelecionada.classList.add('active')
        setInterval(() => {
            showButtonUser()
        }, 250);
    } else {
        console.log("linhaSelecionada é null")
    }
}

function showButtonUser() {
    botaoEditar.style.display = 'inline'
    botaoExcluir.style.display = 'inline'
}

function dadosInput(nome, sobrenome, email, cidade) {
    document.querySelector('#nome').value = nome
    document.querySelector('#sobrenome').value = sobrenome
    document.querySelector('#email').value = email
    document.querySelector('#cidade').value = cidade
}

function salvarMudancas() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            console.log('Está vazio!')
            return;
        } else {
        }
    }
    fecharModal()
}

//botao-excluir-usuario
function excluirUser() {
    console.log(linhaSelecionada2.remove())
}

//botao-fechar-modal
function fecharModal() {
    modalCadastrar.classList.toggle('active')
}

//botao-enviar-dados-modal
function enviarModal() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            console.log('Está vazio!')
            return;
        }
        inputValues.push(inputs[i].value)
    }
    fecharModal()
    dadosInput()
    adcElemento(...inputValues)
    console.log(...inputValues)
    inputs.forEach(input => input.value = '')
    inputValues = []
}
//eventos
botaoSalvar.addEventListener('click', salvarMudancas)
botaoExcluir.addEventListener('click', excluirUser)
botaoEditar.addEventListener('click', () => abrirModal('editar'))
botaoCadastro.addEventListener('click', () => abrirModal('criar'))
botaoEnviarInput.addEventListener('click', enviarModal)
botaoFecharModal.addEventListener('click', fecharModal)