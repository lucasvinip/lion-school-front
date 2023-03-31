'use strict'

import { getCursos } from "../API/cursos"

const createCard = (curso) => {
    const div = document.createElement('div')
    div.classList.add('card_button')

    const img = document.createElement('img')
    img.alt= 'icone do button'
    img.src = `${curso.cursos.icone_curso}`

    const title = document.createElement('h2')
    title.classList.add('nome_curso')
    title.textContent = curso.cursos.nome_curso

    div.append(img, title)

    return div

}

const carregarCard = () => {
    const containerbuttons = document.querySelector('.container_buttons')
    const curso = getCursos.map(createCard)
    containerbuttons.replaceChildren(...curso)
}

carregarCard()