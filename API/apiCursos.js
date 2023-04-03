'use strict'

export const getCursos = async () =>{
    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()

    return data.cursos
}