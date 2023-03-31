'use strict'

// import { alunos } from './alunos.js'

let cont = 0


const criarCard = (aluno) =>{
    

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `${aluno_nome}`

    const nome = document.createElement('h5')
    nome.classList.add('card__name')
    nome.textContent = alunos[cont].nome


    card.append(img, nome)

    cont++

    return card

}


const listarAlunos = async () =>{
     const container = document.getElementById('container_buttons')
    // const cards = alunos.map(criarCard)

    const url = `http://localhost:8080/v1/lion-school/alunos`
    const response = await fetch(url)
    const cards = await response.json()


    container.replaceChildren(...cards)
}

listarAlunos()
