var f=Number(document.getElementById("feras").innerHTML);

var newYearCountdown = setInterval(function(){
  document.getElementById("feras").innerHTML += "<br>";
  f--;
  document.getElementById("feras").innerHTML +=f;
   
  if (f === 0) {
    console.log("HAPPY NEW YEAR!!");
    clearInterval(newYearCountdown);
  }
}, 1000);

  