"use strict";

const graphicStudent = (dados) => {
  const contentAll = document.querySelector(".graphic");

  const contentBars = document.querySelector("#graphic-student");

  const contentSpanValue = document.querySelector(".disciplines-span");

  const contentSpanDiscipline = document.querySelector(".span-bar");

  for (let index = 0; index < dados.disciplinas.length; index++) {


    const bar = document.createElement("progress");
    bar.classList.add("progress-bar");
    bar.value = dados.disciplinas[index].media;
    bar.max = "100";

    const span = document.createElement("span");
    span.classList.add("span-bar");
    span.innerHTML = dados.disciplinas[index].media;

    const spanDisciplines = document.createElement("span");
    spanDisciplines.innerHTML = dados.disciplinas[index].nome;


    if (bar.value > 50) {
      bar.classList.add("progress-bar-blue");
      span.classList.add("color-blue");
      spanDisciplines.classList.add("color-blue");
    } else if (bar.value == 50) {
      bar.classList.add("progress-bar-yellow");
      span.classList.add("color-yellow");
      spanDisciplines.classList.add("color-yellow");
    } else if (bar.value < 50) {
      bar.classList.add("progress-bar-red");
      span.classList.add("color-red");
      spanDisciplines.classList.add("color-red");
    }

    contentBars.append(bar);
    contentSpanValue.append(span);
    contentSpanDiscipline.append(spanDisciplines);
  }

  contentAll.append(contentBars, contentSpanValue, contentSpanDiscipline);

  return contentAll;
};
const loadDiscipline = async () => {
  let localStore = localStorage.getItem("registration");
  const url = `http://localhost:8080/v1/lion-school/alunos/${localStore}`;

  const response = await fetch(url);
  const data = await response.json();

  let displines = data.curso;

  console.log(displines);
  

  displines.map(graphicStudent);
};



loadDiscipline();