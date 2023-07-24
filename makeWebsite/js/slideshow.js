let slides = document.querySelectorAll("#slides > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let pic = document.querySelectorAll("#slides > img");
let current = 0;
let count = 0;

chanSlides();
// showSlides(current);  /* 현재 이미지 */
prev.onclick = prevSlide; /* 이전 이미지 */
next.onclick = nextSlide; /* 다음 이미지 */


function chanSlides(){
  for(let j = 0; j < pic.length; j++){
    pic[j].style.display = "none";
  }
  current++;
  if(current > pic.length){
    current = 1;
    pic[current - 1].style.display = "block";
    setTimeout(chanSlides, 2000);
  }
}
function showSlides(n){
  for(let i=0; i<slides.length; i++){ /* 배열 끝까지 실행 */
    slides[i].style.display = "none"; /* 모든 이미지 감춤 */
  }
  slides[n].style.display = "block"; /* n번째 이미지 보여주기 */
}
function prevSlide(){
  if(current > 0) current -= 1; /* current 값이 0보다 크면 이전 이미지 */
  else current = slides.length - 1; /* 아니라면 아예 마지막 이미지로 돌리기 */
  showSlides(current); /* 이동한 위치의 이미지 띄우기 */
}
function nextSlide(){
  if(current < slides.length - 1) current += 1; /* current값이 2보다 작으면 이동 */
  else current = 0; /* 아니라면 마지막 이미지 이므로 첫번째로 이동 */
  showSlides(current); /* 현재 위치의 이미지 */
}

