let clo = document.querySelector(".logcontainer");
let inde = document.querySelector("section") 
let clos = document.querySelector(".close")


function mylog(){
    clo.style.display = "flex"
    inde.style.zIndex = "-1"
    inde.style.filter = "blur(1px)"
}
function clse(){
    clo.style.display="none"
    inde.style.filter = "none"
} 
