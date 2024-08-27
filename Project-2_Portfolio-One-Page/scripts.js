let menu = document.querySelector("#header ul");
let bar = document.querySelector("#header .bx");

bar.addEventListener("click", function(){
    menu.classList.toggle("show");
})