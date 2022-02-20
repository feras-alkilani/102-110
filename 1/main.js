let person = prompt("Print Number From – To", "5-20");
  if (person != null) {

    let num1 = Number(person.split("-")[0]);
    let num2 = Number(person.split("-")[1]);
        if (num1 < num2){
            for (let i= num1 ; i<=num2; i++ ){
                document.getElementById("demo").innerHTML += i;
                document.getElementById("demo").innerHTML += "<br>";
            }
        }
        else if (num2 < num1){
            for (let i= num2 ; i<=num1; i++ ){
                document.getElementById("demo").innerHTML += i;
                document.getElementById("demo").innerHTML += "<br>";
            }
        }else{
            document.getElementById("demo").innerHTML =  num1;
        }
        


  }// ferasa