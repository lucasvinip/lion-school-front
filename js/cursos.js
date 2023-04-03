'use strict'

import { getCursos } from "../API/apiCursos.js"



const createCard = (curso, index) => {

    const div = document.createElement('div')
    div.classList.add('card_button')
    div.dataset.index = index

    const img = document.createElement('img')
    img.classList.add('icon')
    img.alt = 'icone do button'
    img.src = `${curso.icone_curso}`

    const title = document.createElement('h2')
    title.textContent = curso.sigla_curso

    div.append(img, title)

    return div
    

}

const getIndex = (event) =>{

    event.preventDefault()

}

const cards = document.querySelectorAll('.card_button')
cards.forEach(item => {
    console.log(item);
})

console.log(cards)

const carregarCard = async() => {
    const containerbuttons = document.querySelector('.container_buttons')
    const  cursos = await getCursos()
    
    const cursosCard = cursos.map(createCard)
    containerbuttons.replaceChildren(...cursosCard)
}

carregarCard()