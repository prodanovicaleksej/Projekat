
document.getElementById("sticky-button").addEventListener("click", function () {
  let popup = document.getElementById("popup");
  const closePop = document.querySelector(".sticky-close");
  const openPop = document.querySelector(".sticky-open");
  if (popup.style.display === "none") {
    popup.style.display = "block";
    closePop.style.display = "block";
    openPop.style.display = "none";
    document.querySelector(".contact-text").style.display = 'block';
  } else {
    popup.style.display = "none";
    closePop.style.display = "none";
    openPop.style.display = "block";
    document.getElementById('success-message').style.display = 'none';
  }
});

document.querySelector('.forma').addEventListener('submit', function(event) {
  event.preventDefault(); 
  document.getElementById('success-message').style.display = 'block';
  document.querySelector(".contact-text").style.display = 'none';
  document.querySelector(".contact-ok").addEventListener("click",function(){
  document.getElementById('sticky-button').click()})
  
  this.reset();
});