var headinEle = document.querySelectorAll("h3");
var timeEl = document.querySelector(".time");
var quiz = document.querySelector("#quiz");

var count = 0;
var timeLeft = 0;

popupquiz();

for(var index=0;index<headinEle.length;index++){
    headinEle[index].setAttribute("style","font-size:30px;color:blue");
}

  timeEl.textContent="Time :" + timeLeft;
  

  function popupquiz(){
    var title = document.createElement('h3');
    title.textContent="Coding Quiz Challenge";
    var intro = document.createElement('p');
    intro.textContent="Try to answer the following code related questions within the time limit.Rememeber! incorrect answers will result in time reduction by 10seconds";
    var start=document.createElement('button');
    start.innerText ="Start Quiz";
    quiz.append(title);
    quiz.append(intro);
    quiz.append(start);
  
  start.addEventListener('click',function startquiz(){
    window.location.href="quiz.html";
  
  });
}
