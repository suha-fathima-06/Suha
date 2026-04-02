function generatePlan(){

let subject=document.getElementById("subject").value
let examDate=new Date(document.getElementById("date").value)
let today=new Date()

let days=Math.ceil((examDate-today)/(1000*60*60*24))

let timeline=document.getElementById("timeline")

timeline.innerHTML=""

for(let i=1;i<=days;i++){

let li=document.createElement("li")

li.innerText="Day "+i+" → Study "+subject+" for 2 hours"

timeline.appendChild(li)

}

updateProgress(days)

}

function detectWeakSubject(){

let subject=document.getElementById("subjectName").value
let marks=document.getElementById("marks").value
let result=document.getElementById("weakResult")

if(marks<50){

result.innerText="⚠ Weak Subject: "+subject+" (Extra Study Added)"

}else{

result.innerText="✅ Strong Subject: "+subject

}

}

function askBot(){

let q=document.getElementById("question").value

document.getElementById("answer").innerText=
"AI Suggestion: Review theory and practice questions for "+q

}

let time=1500
let timer

function startTimer(){

timer=setInterval(function(){

time--

document.getElementById("timer").innerText=time

if(time<=0){

alert("Pomodoro Session Finished!")

clearInterval(timer)

}

},1000)

}

function updateProgress(days){

let progress=100/days

document.getElementById("progressBar").style.width=progress+"%"

}