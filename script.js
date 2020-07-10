
function primeNum(a){
    var prime = true;
    if(!a){
        alert("Type a number") 
    }
    else{
    for (let i = 2; i < a; i++) {
        if(a%i == 0){
            console.log("Not Prime");
            document.getElementsByTagName("h1")[1].innerHTML = "<span>" + a + "</span>  is a Composite Number";
            prime = false
            break;
        }  
    }
    if(prime){
        document.getElementsByTagName("h1")[1].innerHTML = "<span>" + a + "</span> is a Prime Number";
        console.log("Prime")
    }
}
}

function fun1(){
var number1 = document.getElementById("value").value;
if (number1 <= 1) {
    alert("The number is neither Prime nor Composite")
}
else{
primeNum(number1)
}
}

