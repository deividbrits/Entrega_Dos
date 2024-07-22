

const btnPregunta = document.getElementById("btnPregunta")
const btnRespuesta = document.getElementById("btnRespuesta")
const btnOtraRespuesta = document.getElementById("btnAnotherAnswer")
const pregunta = document.getElementById("pregunta")
const respuesta = document.getElementById("respuesta")
const otraRespuesta = document.getElementById("anotherAnswer")

let survey = [ {
    question : [],
    answer : [], 
    anotherAnswer : []
} ];

btnPregunta.addEventListener ('click', () => {
    const newQuestion = pregunta.value;
    survey[0].question.push(newQuestion);
    pregunta.value = "";
    console.log(survey);
})

btnRespuesta.addEventListener ('click', () => {
    const newRespuesta = respuesta.value;
    survey[0].answer.push(newRespuesta);
    respuesta.value = "";
    console.log(survey);
})

btnOtraRespuesta.addEventListener ('click', () => {
    const newOtraRespuesta = otraRespuesta.value;
    survey[0].anotherAnswer.push(newOtraRespuesta);
    otraRespuesta.value = "";
    console.log(survey);
})