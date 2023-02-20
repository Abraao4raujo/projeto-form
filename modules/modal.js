import {adcElemento, colarInformacoesInput} from "../script.js";
var modal = document.querySelector('#modalCadastrar')
var modalSecondary = document.querySelector('#modalEditar')
var inputs = document.querySelectorAll('.preencher')
var inputValues = []
//abrir-modal-cadastro
export function abrirModal() {
    modal.style.display = 'block'
    modalSecondary.style.display = 'none'
}

//botao-fechar
export function fecharModal() {
    modal.style.display = "none"
    modalSecondary.style.display = "none"
}

//botao-enviar
export function enviarModal() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            console.log('Está vazio!')
            return;
        }
        inputValues.push(inputs[i].value)
    }

    fecharModal()
    colarInformacoesInput()
    adcElemento(...inputValues)
    console.log(...inputValues)
    inputs.forEach(input => input.value = '')
    inputValues = []
}