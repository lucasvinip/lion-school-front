'use strict'

import { alunos } from './alunos.js'

let cont = 0

console.log(alunos[0].nome);

const criarCard = (aluno) =>{
    

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `${alunos[cont].foto}`

    const nome = document.createElement('h5')
    nome.classList.add('card__name')
    nome.textContent = alunos[cont].nome


    card.append(img, nome)

    cont++

    return card

}


const carregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = alunos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()