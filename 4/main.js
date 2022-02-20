var f=Number(document.getElementById("feras").innerHTML);

var newYearCountdown = setInterval(function(){
  document.getElementById("feras").innerHTML += "<br>";
  f--;
  document.getElementById("feras").innerHTML +=f;
   
  if (f === 0) {

    myFunction()
  }
}, 1000);


function myFunction() {
  window.open("https://elzero.org/","_self");
}
  