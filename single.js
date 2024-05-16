const imgSrc = localStorage.getItem('imgSrc');
const activityTitle = localStorage.getItem('activityTitle');
const activityDescription = localStorage.getItem('activityDescription');
const price = localStorage.getItem('activityPrice');
const imgSmallSrc = localStorage.getItem('imgSrcSmall1');
const imgSmallSrc2 = localStorage.getItem('imgSrcSmall2');
const imgSmallSrc3 = localStorage.getItem('imgSrcSmall3');

const cardDiv = document.createElement("div");
cardDiv.classList.add("card");
const cardDesc = document.createElement("div");
cardDesc.classList.add("card-desc");
const cardDescImg = document.createElement("div");
cardDescImg.classList.add("img-small-container");

const imgElement = document.createElement("img");
imgElement.classList.add("bg-image");
imgElement.src = imgSrc;
imgElement.alt = activityTitle;


const imgSmall = document.createElement("img");
imgSmall.src = imgSmallSrc;
imgSmall.alt = activityTitle;

const imgSmall2 = document.createElement("img");
imgSmall2.src = imgSmallSrc2;
imgSmall2.alt = activityTitle;

const imgSmall3 = document.createElement("img");
imgSmall3.src = imgSmallSrc3;
imgSmall3.alt = activityTitle;

const titleElement = document.createElement("h3");
titleElement.textContent = activityTitle;

const descriptionElement = document.createElement("p");
descriptionElement.textContent = activityDescription;
descriptionElement.classList.add("description-element");

const priceElement = document.createElement("p");
priceElement.textContent = `Cijena: ${price}`;
priceElement.classList.add("price-class");



document.body.style.backgroundImage = `url('${imgElement.src}')`;
document.body.style.backgroundSize= "cover";
document.body.style.backgroundRepeat= "no-repeat";
document.body.style.backgroundSize = "1600px 950px";
document.body.style.backgroundPosition = "top center";




cardDesc.appendChild(titleElement);
cardDesc.appendChild(descriptionElement);
cardDesc.appendChild(priceElement);
cardDescImg.appendChild(imgSmall);
cardDescImg.appendChild(imgSmall2);
cardDescImg.appendChild(imgSmall3);
cardDesc.appendChild(cardDescImg);
cardDiv.appendChild(cardDesc);

document.body.appendChild(cardDiv);



document.getElementById("sticky-button").addEventListener("click", function () {
    let popup = document.getElementById("popup");
    const closePop = document.querySelector(".sticky-close");
    const openPop = document.querySelector(".sticky-open");
    if (popup.style.display === "none" || popup.style.display === "") {
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