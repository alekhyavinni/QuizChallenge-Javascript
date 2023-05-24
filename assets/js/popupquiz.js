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
var header      = document.querySelector(".header");
var score , countvalue ,text , Initial , s , done;

var count= 0;
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

//settime function to display the time
function setTime(){
    var TimeInt = setInterval(function(){
        timeLeft--;
        timeEl.textContent="Time :" + timeLeft;

    if(timeLeft===0){
        alert("timeup");
        clearInterval(TimeInt);
        window.location.href="index.html";
            
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

//Anschecking function checks whether the answer is right or wrong and scores accordingly
function Anschecking(){
for(var index=0;index<3;index++){
ans[index].addEventListener("click", function(event) {
    event.preventDefault();
    var clickedvalue =this.innerText;
    if (answers[questionindex].answer===clickedvalue) {
        result.textContent="Right answer";
        count = count + 10;
        localStorage.setItem("count", count);
        questionindex++;
        getquestion();

    } else {
        timeLeft=timeLeft-10;
        localStorage.setItem("count", count);
        result.textContent="wrong answer";
        questionindex++;
        getquestion();
    }
    
});

}
}

//get results function displays the final score count and asks to enter name 
function getresults(){
    done = document.createElement("h2");
    done.textContent="Well Done!";

    score=document.createElement('p');
    countvalue = localStorage.getItem("count");
    score.textContent="your score is:"+countvalue;
 
    text =document.createElement('label');
    text.textContent="Enter your Initials";

    Initial = document.createElement("input");
    Initial.setAttribute('id', 'username')
    Initial.setAttribute("type", "text");
    Initial.setAttribute("name", "Initials");
    
    s = document.createElement("button");
    s.setAttribute("type", "button");
    s.setAttribute("value", "Submit");
    s.innerText="submit";

    questions.parentNode.replaceChild(done,questions);
    done.appendChild(score);
    ans1.parentNode.replaceChild(text, ans1);
    ans2.parentNode.replaceChild(Initial,ans2);
    ans3.parentNode.replaceChild(s, ans3);
    
   s.addEventListener('click',storeValue); 
}

//storevalue function is created to retrive the input value from the text area
function storeValue() {
    let value = document.getElementById('username')
    console.log(value.value)
    localStorage.setItem("Initial", value.value);

    getscore();
}

//getscore function displays the initial and score retriving from the local storage
function getscore(){

    var highscore =document.createElement("h2");
    highscore.textContent="HIGHSCORE!";

    result.textContent=" ";
    var player = document.createElement("h5");
    player.setAttribute("id","play");
    countvalue = localStorage.getItem("count");
    var playername=localStorage.getItem("Initial");
    player.textContent=playername + "---"+countvalue;
    
    var goback =document.createElement("button");
    goback.setAttribute("type", "submit");
    goback.innerText="Go back";

    var reset = document.createElement("button");
    goback.setAttribute("type", "submit");
    reset.innerText ="clear Highscores";
    
    var clear=document.createElement("p");
    clear.textContent=" ";

    done.parentNode.replaceChild(highscore,done); 
    highscore.appendChild(player);
    s.parentNode.replaceChild(clear,s);
    text.parentNode.replaceChild(goback, text);
    Initial.parentNode.replaceChild(reset,Initial);
    
    reset.addEventListener('click',function(){
     window.location.href='quiz.html';
    });
    
    }


setTime();

