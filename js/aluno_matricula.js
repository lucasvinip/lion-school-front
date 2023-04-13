'use strict'

const createCard = (aluno) =>{

    const div = document.createElement('div')
    div.classList.add('card_aluno')
    

    const img = document.createElement('img')
    img.classList.add('card_image')
    img.alt = 'foto do aluno'
    img.src = `${aluno.image_aluno}`

    const title = document.createElement('h2')
    title.classList.add('nome_aluno')
    title.textContent = aluno.nome_aluno

    div.append(img, title)

    return div
    
    
}


const criarNotas = (diciplina) => {


    const materia = document.createElement('div')
    materia.classList.add('materia')

    const media = document.createElement('p')

    const nota = document.createElement('div')

    const mediaALuno  = diciplina.curso_aluno.disciplina.media
    
    
    if (mediaALuno >= 65) {

        media.classList.add("media-azul")
        media.textContent = mediaALuno

        nota.classList.add("nota-alta");
        nota.style.height = `${mediaALuno}%`
       
    } else if (mediaALuno < 65 && mediaALuno >= 50) {

        media.classList.add("media-amarela")
        media.textContent = mediaALuno

        nota.classList.add("nota-media");
        nota.style.height =`${mediaALuno}%`

    
    } else if (mediaALuno < 50) {

        media.classList.add("media-vermelha") 
        media.textContent = mediaALuno

        nota.classList.add("nota-baixa")
        nota.style.height = `${mediaALuno}%`
    }
  

    const barra = document.createElement('div')
    barra.classList.add('barra')

    const sigla = document.createElement('p')
    sigla.classList.add('sigla')
    sigla.textContent = diciplina.nome.split(' ').map(word => word.charAt(0)).join('').toUpperCase()


    materia.append(media, barra, sigla)
    barra.append(nota)
    
    return materia

}



const listarAlunos = async () =>{
    let matricula = localStorage.getItem('matricula')
    const url = `https://lion-school-99j4.onrender.com/v1/lion-school/alunos/matricula/${matricula}`

    const response = await fetch(url)

    const data = await response.json()

    const containerbuttons = document.querySelector('.container')
    
    const alunosCard = data.matricula.map(createCard)
    containerbuttons.replaceChildren(...alunosCard)



}

listarAlunos()
