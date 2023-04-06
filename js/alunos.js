'use strict'


const createCard = (aluno) =>{
    
    const div = document.createElement('div')
    div.classList.add('cards_aluno')

    const img = document.createElement('img')
    img.classList.add('foto_aluno')
    img.alt = 'foto do aluno'
    img.src = `${aluno.foto}`

    const title = document.createElement('h2')
    title.classList.add('nome_aluno')
    title.textContent = aluno.nome

    div.append(img, title)

    if ( aluno.status == 'Finalizado' ){
        div.classList.add('blue')
    }else{
        div.classList.add('yellow')
    }

    return div

    
}


const listarAlunos = async () =>{
    let siglaCurso = localStorage.getItem('sigla')
    const url = `http://localhost:8080/v1/lion-school/alunos/curso?sigla=${siglaCurso}`

    const response = await fetch(url)

    const data = await response.json()

    const containerbuttons = document.querySelector('.container_aluno')
    
    const alunosCard = data.curso.map(createCard)
    containerbuttons.replaceChildren(...alunosCard)
}

listarAlunos()