
var sw = 0;
var a = document.querySelector(".bulb");
var b = document.querySelector("button");
    b.addEventListener("click", function(){
        if (sw == 0){
            a.style.backgroundColor =  "yellow" 
            sw = 1;
            b.innerHTML = "Off"
        }
        else{
            a.style.backgroundColor =  "red" 
            sw = 0;
            b.innerHTML = "On"
        }
    })
   
    var x = document.querySelectorAll("h3");
    
    function load(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            document.getElementById("demo").innerHTML = this.responseText;
        }
        xhttp.open('GET', 'form.txt');
        xhttp.send();
    }
    
    let loader = document.querySelector(".loading");
    window.addEventListener("load", ()=>{
        loader.style.display="none";
    })