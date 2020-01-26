var box = document.getElementById("box");
var text = document.getElementById("head");


box.addEventListener("mouseover", blueBack);
box.addEventListener("mousedown", redBack);
box.addEventListener("mouseleave", yellowBack);
box.addEventListener("dblclick", greenBack);
document.addEventListener("wheel",wheely);
document.addEventListener("keydown",key)

function key(event){
    if(event.which===82){
        redBack();
    }
    if(event.which===66){
        blueBack();
    }
    if(event.which===89){
        yellowBack();
    }
    if(event.which===71){
        greenBack();
    }
    if(event.which===79){
        wheely();
    }
}




function blueBack() {
    box.style.backgroundColor = "blue";
}

function redBack() {
    box.style.backgroundColor = "red";
}

function yellowBack() {
    box.style.backgroundColor = "yellow";
}

function greenBack() {
    box.style.backgroundColor = "green";
}

function wheely(){
    box.style.backgroundColor = "orange";
}