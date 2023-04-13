'use strict'

export const getCursos = async () =>{
    const url = `https://lion-school-99j4.onrender.com/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()


    return data.cursos
}