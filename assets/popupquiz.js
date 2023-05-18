var headinEle = document.querySelectorAll("h3");
var timeEl = document.querySelector('.time');
var questions= document.querySelector("#question");
var ans1 =document.querySelector('#option1');
var ans2 =document.querySelector('#option2');
var ans3 =document.querySelector('#option3');
var ans=document.querySelectorAll('button');
var count=0;
var timeLeft = 60;

setTime();
popquiz();
for(var index=0;index<headinEle.length;index++){
    headinEle[index].setAttribute("style","font-size:30px;color:blue");
}

    
       
    /*    correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "ESLint"
        },
        correctAnswer: "d"
    }
    ];*/

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


function popquiz(){
  var  answers= [
    
     " a: Douglas Crockford",
      "b: Sheryl Sandberg",
      "c: Brendan Eich"
  ]
questions.textContent= "Who invented JavaScript?";
for(var i=0;i<answers.length;i++){
    ans[i].innerText=answers[i];
}
if(ans2){
    count++;
}

}
