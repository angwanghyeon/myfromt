let checkSpan = document.querySelectorAll(".bg");
for(let i=0; i<checkSpan.length; i++){
  checkSpan[i].addEventListener("click", function(){
    checkSpan.style.display = "block";
    checkSpan.style.animation = "scale : 1s";
  });
}