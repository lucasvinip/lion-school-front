'use strict'

import { alunos } from './alunos.js'

console.log(alunos[0].nome);

const criarCard = (aluno) =>{

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `${alunos[1].foto}`

    const nome = document.createElement('h5')
    nome.classList.add('card__name')
    nome.textContent = alunos[1].nome


    card.append(img, nome)

    return card

}


const carregarAluno = () =>{
    const container = document.getElementById('container')
    const cards = alunos.map(criarCard)

    container.appendChild(...cards)
}

carregarAluno()