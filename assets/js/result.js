var highscore=document.querySelector("#heading");
var heading=document.querySelector("#score");
var reset = document.querySelector("#goback");
var clearbutton = document.querySelector("#clearscore");
getscore();
function getscore(){
highscore.textContent="HIGHSCORE!";
var playername=localStorage.getItem("INname");
heading.textContent=(JSON.parse(playername).IN) + countvalue;
reset.innerHTML="Go back";
clearbutton.innerHTML="clear Highscores";


reset.addEventListener('click',function quiz(){
    window.location.href="quiz.html";
});

}