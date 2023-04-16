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

const ctx = document.getElementById("myChart");

const updateChart = async () =>{
    const data = await fetchData();

    const disciplineName = data.disciplinas.map((index)=>{
        console.log(index.nome)
        return index.nome
    })
    

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
