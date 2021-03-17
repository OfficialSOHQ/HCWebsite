let sections = [];
let navbar = null;

function addClass(name) {
    var element, name, arr;
    element = document.getElementById("nav-top");
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}

function rmvClass(name){
    var element, name, arr;
    element = document.getElementById("nav-top");
    arr = element.className.split(" ");
    if (arr.indexOf(name) >= 0) {
        arr.splice(arr.indexOf(name), 1)
        element.className = arr.join(" ")
    }
}

window.onload = ()=>{
    navbar = document.getElementById("nav-top")
    sections = [document.getElementById("home"),document.getElementById("about"),document.getElementById("menu"),document.getElementById("contact")];
    if (window.scrollY <= (sections[1].offsetTop - 61)){
        rmvClass("opaque-black")
    } else {
        addClass("opaque-black")
    }
}

window.addEventListener("scroll",(evt)=>{
    if (window.scrollY <= (sections[1].offsetTop - 61)){
        rmvClass("opaque-black")
    } else {
        addClass("opaque-black")
    }
})