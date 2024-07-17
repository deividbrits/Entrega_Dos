class Survey  {
    constructor (question , anwser, anotherAnswer ){
    this.question = [];
    this.anwser = [];
    this.anotherAnswer = [];

} 
getQuestion(question){
    this.question.push(question);
};

getanwser(anwser){
    this.anwser.push(anwser);
    
}
getanotherAnswer(anotherAnswer){
    this.anotherAnswer.push(anotherAnswer);
}
};

const quiz = new Survey ();

const btnPregunta = document.getElementById("btnPregunta"); 
const btnRespuesta = document.getElementById("btnRespuesta");
const btnOtraRespuesta = document.getElementById("btnAnotherAnswer");
const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");
const otraRespuesta = document.getElementById("anotherAnswer");

btnPregunta.addEventListener ('click', () => {
    const newQuestion = pregunta.value;
    quiz.getQuestion(newQuestion);
    pregunta.value = "";
    console.log(quiz);

btnRespuesta.addEventListener ('click', () => {
    const newRespuesta = respuesta.value;
    quiz.getanwser(newRespuesta);
    respuesta.value = "";
    console.log(quiz); 

btnOtraRespuesta.addEventListener ('click', () => {
    const newOtraRespuesta = otraRespuesta.value;
    quiz.getanotherAnswer(newOtraRespuesta);
    otraRespuesta.value = "";
    console.log(quiz);


});


});
});

