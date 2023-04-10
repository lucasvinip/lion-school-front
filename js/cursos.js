'use strict'

import { getCursos } from "../API/apiCursos.js"

const createCard = (curso, index) => {

    const div = document.createElement('div')
    div.classList.add('card_button')
    document.querySelector('card_button')
    div.id = curso.sigla_curso
    div.onclick = function () {
        localStorage.setItem('sigla', div.id)
        localStorage.setItem('nome do curso', curso.nome_curso)
    }


    const img = document.createElement('img')
    img.classList.add('icon')
    img.alt = 'icone do button'
    img.src = `${curso.icone_curso}`

    const title = document.createElement('h2')
    title.textContent = curso.sigla_curso

    div.append(img, title)

    // document.querySelector('card_button')
    // div.addEventListener('click', addLocalStorage)

    return div

}
// const addLocalStorage = (index) => {
//     if (index == 0){
//         getAlunosDs()
//     }else{
//         getAlunosRds()
//     }
//  }


// const addLocalStorage = (index) => {
//     if (index == 0)
//         localStorage.setItem('codigo', 'leonid')
//     else
//         localStorage.setItem('codigo', 'clara')
// }

const carregarCard = async () => {
    const containerbuttons = document.querySelector('.container_buttons')
    const cursos = await getCursos()

    const cursosCard = cursos.map(createCard)
    containerbuttons.replaceChildren(...cursosCard)
}

carregarCard()