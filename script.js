
let formulario = document.querySelector('#formCadastro')


formulario.onsubmit = function(evento) {
    evento.preventDefault()
    let temErro = false  /*não tem erro*/
    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value) {
        temErro = true   /*tem erro*/

        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite seu Nome'

    } else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formCadastro']['email']
    if(!inputEmail.value) {
        temErro = true     /*tem erro*/
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite seu E-mail'

    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }
    
    let inputCidade = document.forms['formCadastro']['cidade']
    if(!inputCidade.value) {
        temErro = true    /*tem erro*/
        inputCidade.classList.add('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Selecione a sua Cidade'
    } else {
        inputCidade.classList.remove('inputError')

        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro) {
        formulario.submit()
    }
  


}






let contagem = document.querySelector('.valor')

let contador = 0

