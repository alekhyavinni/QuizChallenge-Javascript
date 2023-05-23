var headinEle = document.querySelectorAll("h3");
var timeEl = document.querySelector('.time');
var questions= document.querySelector("#question");
var ans1 =document.querySelector('#option1');
var ans2 =document.querySelector('#option2');
var ans3 =document.querySelector('#option3');
var ans=document.querySelectorAll("button");
var count=0;
var timeLeft = 60;


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

popquiz();
function popquiz(){
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
  ]

for(var i=0;i<answers.length;i++){
    questions.textContent=answers[i].question;
    ans1.innerText=answers[i].options[0];
    ans2.innerText=answers[i].options[1];
    ans3.innerText=answers[i].options[2];


for(var index=0;index<3;index++){
ans[index].addEventListener("click", function() {
    var clickedvalue =this.value;
    if (answers[i].answer===clickedvalue) {
      count++;

    } else {
     timeLeft=timeLeft-10;
    }
    return;
});

}
}
}


    


setTime();
//popquiz();
