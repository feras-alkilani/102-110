var f=Number(document.getElementById("feras").innerHTML);

var newYearCountdown = setInterval(function(){
  document.getElementById("feras").innerHTML += "<br>";
  f--;
  document.getElementById("feras").innerHTML +=f;
   
  if (f === 5) {

    myFunction()
  }
  if (f === 0) {

    clearInterval(newYearCountdown);
  }
}, 1000);


function myFunction() {
  var popup = document.getElementById("myPopup");
  const myWindow = window.open("https://elzero.org/", "", "width=500,height=500");
  myWindow.opener.document.getElementById("demo").innerHTML = "HELLO!";
}
  