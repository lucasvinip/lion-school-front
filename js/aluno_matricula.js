'use strict'

const matricula = localStorage.getItem('matricula')

const getStudentsInfo =async (matricula) =>{

    const fetchData = async () =>{
        
        const url = `https://lion-school-99j4.onrender.com/v1/lion-school/alunos/matricula/${matricula}`
    
        const response = await fetch(url)
    
        const data = await response.json()
    
        // const containerbuttons = document.querySelector('.container')
        
        // const alunosCard = data.matricula.map(createCard)
        // containerbuttons.replaceChildren(...alunosCard)
    
        return {...data}
    
    }

    const ctx = document.getElementById("myChart");
    
    const updateChart = async () =>{
        const data = await fetchData();
    
        const disciplineName = data.disciplinas.map((index)=>{
            console.log(index.nome)
            return index.nome
        })
    
        const disciplineAvarage = data.disciplinas.map((index)=>{
            console.log(index.media)
            return index.media
        })
        
    
    }
    
    let arrayColors = [];
        disciplineAverage.forEach((mediaMateria) => {
          if (mediaMateria >= 0 && mediaMateria < 50) {
            arrayColors.push("rgba(193, 16, 16, 1)");
          } else if (mediaMateria >= 50 && mediaMateria < 80) {
            arrayColors.push("rgba(229, 182, 87, 1)");
          } else if (mediaMateria >= 80 && mediaMateria <= 100) {
            arrayColors.push("rgba(51, 71, 176, 1)");
          }
        });
    
    
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: disciplineName,
          datasets: [
            {
              label: `Media de Notas`,
              data: disciplineAverage,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: arrayColors,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      const createCard = (aluno) =>{

        const data = await fetchData();
        const container = document.getElementById("informations");

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
        container.replaceChildren(div, ctx)
        
        
    }
    createCard()
    updateChart()
}

getStudentsInfo(matricula)