const quizDB=[{
    question: "Q1: Water boils at 212 degrees on which temperature scale?",
    a:"Fahrenheit.",
    b:"Selcius",
    c:"rictor",
    d:"galvano",
    ans:"ans1"
},{
    question: "Q2: Who created the animation for Monty Python?",
    a:"robert dogh",
    b:"Terry Gilliam.",
    c:"jashon",
    d:"galv rogger",
    ans:"ans2"
},
{
    question: "Q3: If you rode a Chopper, what was this?",
    a:"robert dogh",
    b:"Terry Gilliam.",
    c:"Bicycle.",
    d:"galv rogger",
    ans:"ans3"
},
{
    question: "Q4: What was soaked in vinegar then hung on a string?",
    a:"robert dogh",
    b:"Terry Gilliam.",
    c:"Bicycle.",
    d:"Conker.",
    ans:"ans4"
}];

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showscore");

let gyiu=0;
let score=0;

const load = () =>{
   const jdba=quizDB[gyiu];
   question.innerHTML = jdba.question;
   option1.innerHTML = jdba.a;
   option2.innerHTML = jdba.b;
   option3.innerHTML = jdba.c;
   option4.innerHTML = jdba.d;
}
load()

const getanswer = () =>{
    let answer;
    answers.forEach((curentanswer)=>{
        if (curentanswer.checked){
            answer=curentanswer.id;
        }
    });
    return answer;
};

const clearall = ()=>{
    answers.forEach((curentanswer)=>curentanswer.checked=false);
}

submit.addEventListener("click",()=>{
    const check=getanswer();
    console.log(check);

    if (check === quizDB[gyiu].ans){
        score++;
    };
    gyiu++;
    clearall();
    if (gyiu < quizDB.length){
        load();
    }else{

        showScore.innerHTML= `
            <h3>Your score is ${score}/${quizDB.length}</h3>                   
        `;
        showScore.classList.remove('scorearea');
    }
});