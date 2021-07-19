p1 =localStorage.getItem("p1");
p2 =localStorage.getItem("p2");
var p1score=0;
var p2score=0;
document.getElementById("player1").innerHTML=p1+":";
document.getElementById("player2").innerHTML=p2+":";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("questions").innerHTML="Question turn-"+p1;
document.getElementById("answers").innerHTML="Answer turn-"+p2;

function send(){
   n1= document.getElementById("n1").value;
   n2= document.getElementById("n2").value;
   answer=n1*n2;
   console.log(answer);
   qus=n1+"X"+n2;
   input="<br>answer;<input id='ans'>";
check="<br><br><button class='btn btn-info'onclick='check()'>check</button>";
row=qus+input+check;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
}