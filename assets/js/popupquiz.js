var headinEle   = document.querySelectorAll("h3");
var timeEl      = document.querySelector('.time');
var divTag      = document.querySelector("#que");
var questions   = document.querySelector("#question");
var ans1        = document.querySelector('#option1');
var ans2        = document.querySelector('#option2');
var ans3        = document.querySelector('#option3');
var ans         = document.querySelectorAll("button");
var result      = document.querySelector("#result");
var form        = document.querySelector("#quizform");
var score;
var countvalue;
var text;
var IN;
var s;


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

getquestion();
Anschecking();
function getquestion(){
    if(questionindex >=3){
        getresults();
    }
    else{
    questions.textContent=answers[questionindex].question;
    ans1.innerText=answers[questionindex].options[0];
    ans2.innerText=answers[questionindex].options[1];
    ans3.innerText=answers[questionindex].options[2];
   
    }
}

function Anschecking(){
for(var index=0;index<3;index++){
ans[index].addEventListener("click", function(event) {
    event.preventDefault();
    var clickedvalue =this.innerText;
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
    var done = document.createElement("h2");
    done.textContent="Well Done!";

    score=document.createElement('p');
    countvalue = localStorage.getItem("count");
    score.textContent="your score is:"+countvalue;
 
    text =document.createElement('label');
    text.textContent="Enter your Initials";

    IN = document.createElement("input");
    IN.setAttribute("type", "text");
    IN.setAttribute("name", "Initials");
    localStorage.setItem("INname",JSON.stringify(IN));

    s = document.createElement("button");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.innerText="submit";

    questions.parentNode.replaceChild(done,questions);
    done.appendChild(score);
    ans1.parentNode.replaceChild(text, ans1);
    ans2.parentNode.replaceChild(IN,ans2);
    ans3.parentNode.replaceChild(s, ans3);
    
   s.addEventListener('click',function(){
    getscore();
   }); 
}


function getscore(){

    var highscore =document.createElement("h1");
    highscore.textContent="HIGHSCORE!";

    var playername=localStorage.getItem("INname");
    var player = document.createElement(h3);
    player.textContent=(JSON.parse(playername).IN) + countvalue;
    
    var goback =document.createElement("button");
    goback.setAttribute("type", "submit");
    goback.innerText="Go back";

    var reset = document.createElement("button");
    ans2.innerText ="clear Highscores";
    
    
    questions.parentNode.replaceChild(highscore, questions); 
    highscore.appendChild(player);
    //s.parentNode.replaceChild(score, ans3);
    text.parentNode.replaceChild(goback, text);
    IN.parentNode.replaceChild(reset,IN);
    
    
    
    reset.addEventListener('click',function(){
     window.location.href='quiz.html';
    });
    
    }


setTime();

