'use strict';

const questions=[
  {
question:'What is the record for red cards given in a single football game?',
a:"12",
b:'24',
c:'6',
d:'36',
correct:'36'
}
,
{
  question:'According to the official FIFA rulebook, how long can a goalkeeper hold the ball?',
  a:"8 seonds",
b:'6 seconds',
c:'10 seconds',
d:'12 seconds',
correct:'6 seconds'
}
,
{
  question:'Who kicked the longest goal in soccer history?',
  a:"Asmir Begovic",
b:'TIm Howard',
c:'Moh Syamsuri Mustafa',
d:'Andy Lonergan',
correct:'Asmir Begovic'
}
,
{
  question:'Who was the first player to score at five World Cup editions?',
  a:"Lothar Matthaus",
b:'Pele',
c:'Marta',
d:'Rondaldo',
correct:'Marta'
}
]
const question=document.querySelector('.question');
const answers=document.querySelectorAll('input')
const labels=document.querySelectorAll('label')
const quiz=document.querySelector('.quiz-content')

const body=document.body;

let currentQuiz=0;

const load=function(){
 
  answers.forEach(answer=>{
  question.textContent=questions[currentQuiz].question
document.querySelector('#a-text').textContent=questions[currentQuiz].a
document.querySelector('#b-text').textContent=questions[currentQuiz].b
document.querySelector('#c-text').textContent=questions[currentQuiz].c
document.querySelector('#d-text').textContent=questions[currentQuiz].d

})
}
load()
const effort=function(){
  answers.forEach((answer,idx)=>{
    labels.forEach((label,index)=>{
      if(answer.checked && idx===index &&label.textContent===questions[currentQuiz].correct){
      label.style.color='limegreen'
      label.style.fontSize='1.5rem'
      }
      if(answer.checked && idx===index &&label.textContent!==questions[currentQuiz].correct){
      label.style.color='red'
      label.style.fontSize='1.5rem'
      }
       if(!answer.checked && idx===index &&label.textContent===questions[currentQuiz].correct){
       label.style.color='limegreen'
      label.style.fontSize='2rem'
       }
    })
  })
  document.querySelector('.submit').removeEventListener('click',effort)
}
document.querySelector('.submit').addEventListener('click',effort)
document.querySelector('.next').addEventListener('click',function(){

  currentQuiz++
  if(currentQuiz>questions.length-1){ 
   body.textContent='Game Over !!!'
  
   body.style.fontSize='5rem'
   body.style.color='crimson'
   
    document.querySelector('.submit').style.display='none'
    document.querySelector('.next').style.display='none'
  
}

  document.querySelector('.submit').addEventListener('click',effort)
  answers.forEach(answer=>{
    answer.checked=false
    labels.forEach(label=>{
       label.style.color='black'
      label.style.fontSize='1rem'
    })
  })
  

  load()

    
})

