'use strict'

import { getAlunos } from "../API/apiAlunos.js"


const createCard = (aluno) =>{
    
    const div = document.createElement('div')
    div.classList.add('card_aluno')

    const img = document.createElement('img')
    img.classList.add('foto_aluno')
    img.alt = 'foto do aluno'
    img.src = `${aluno.image_aluno}`

    const title = document.createElement('h2')
    title.textContent = aluno.nome_aluno

    div.append(img, title)

    return div

}


const listarAlunos = async () =>{
    const containerbuttons = document.querySelector('.container')
    const  alunos = await getAlunos()
    
    const alunosCard = alunos.map(createCard)
    containerbuttons.replaceChildren(...alunosCard)
}

console.log(listarAlunos());
