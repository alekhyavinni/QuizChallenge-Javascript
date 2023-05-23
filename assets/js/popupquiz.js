var headinEle = document.querySelectorAll("h3");
var timeEl = document.querySelector('.time');
var divTag =document.querySelector("#que");
var questions= document.querySelector("#question");
var ans1 =document.querySelector('#option1');
var ans2 =document.querySelector('#option2');
var ans3 =document.querySelector('#option3');
var ans=document.querySelectorAll("button");
var result=document.querySelector("#result");
var form=document.querySelector("#quizform");


var count=0;
var timeLeft = 60;
var questionindex = 0;

var  answers= [
    {
    question:"Who invented JavaScript?",
    options:[ "a: Douglas Crockford","b: Sheryl Sandberg", "c: Brendan Eich"],
    answer:"b: Sheryl Sandberg"
    },
    {
    question:"Which one of these is a JavaScript package manager?",
    options: [ " a:Node.js", "b:TypeScript", "c: npm" ],
    answer:"c: npm"
    },
    {
    question:"Which tool can you use to ensure code quality?",
    options: [ " a:Angular", "b:jQuery", "c: ESLint"],
    answer:"c: ESLint"
    }
  ];


for(var index=0;index<headinEle.length;index++){
    headinEle[index].setAttribute("style","font-size:30px;color:blue");
}

function setTime(){
    var TimeInt = setInterval(function(){
        timeLeft--;
        timeEl.textContent="Time :" + timeLeft;

        if(timeLeft===0){
            alert("timeup");
            clearInterval(TimeInt);
            
        }
    },1000);
  
}


function getquestion(){
    if(questionindex > 2){
        getresults();
    }
    questions.textContent=answers[questionindex].question;
    ans1.innerText=answers[questionindex].options[0];
    ans2.innerText=answers[questionindex].options[1];
    ans3.innerText=answers[questionindex].options[2];
    Anschecking();
}

function Anschecking(){
for(var index=0;index<3;index++){
ans[index].addEventListener("click", function() {
    var clickedvalue =this.value;
    if (answers[questionindex].answer===clickedvalue) {
        result.textContent="Right answer";
        count++;
        localStorage.setItem("count", count);
        questionindex++;
        getquestion();

    } else {
     timeLeft=timeLeft-10;
        result.textContent="wrong answer";
        questionindex++;
        getquestion();
    }
   
});

}
}

function getresults(){
    
    questions.textContent="Well Done!";

    var score=document.createElement('p');
    var countvalue = localStorage.getItem("count");
    score.textContent="your score is:"+countvalue;
 
    var text =documnet.createElement('label');
    text.textContent="Enter your Initials";

    var IN = document.createElement("input");
    IN.setAttribute("type", "text");
    IN.setAttribute("name", "Initials");

    var s = document.createElement("button");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");


    questions.appendChild(score);
    form.parentNode.replaceChild(text, ans1);
    form.parentNode.replaceChild(IN,ans2);
  
    s.innerHTML = ans3.innerHTML ;
    form.parentNode.replaceChild(s, ans3);

}

setTime();
getquestion();
