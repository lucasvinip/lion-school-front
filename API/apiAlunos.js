'use strict'

export const getAlunos = async () =>{
    const url = `http://localhost:8080/v1/lion-school/alunos`

    const response = await fetch(url)
    const data = await response.json()

    return data.alunos
}