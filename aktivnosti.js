import activities from "./activities.js";

const activitiesContainer = document.getElementById("activities-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
const activitiesPerPage = 3;

function addActivityCardsToPage() {
  activitiesContainer.innerHTML = ""; 

  for (
    let i = currentSlide * activitiesPerPage;
    i < (currentSlide + 1) * activitiesPerPage && i < activities.length;
    i++
  ) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = activities[i].img;
    imgElement.alt = activities[i].activity;

    const titleElement = document.createElement("h3");
    titleElement.textContent = activities[i].activity;

    const descriptionElement = document.createElement("p");
    const descriptionText = activities[i].description;
    descriptionElement.textContent = descriptionText;
    descriptionElement.classList.add("description-element");


    const readMoreLink = document.createElement("button");
    readMoreLink.textContent = "Read more >>";
    readMoreLink.classList.add("read-more");

    readMoreLink.addEventListener("click", function () {
      localStorage.setItem('imgSrc', activities[i].img);
      localStorage.setItem('activityTitle', activities[i].activity);
      localStorage.setItem('activityDescription', activities[i].description);
      localStorage.setItem('activityPrice', activities[i].cijena);
      localStorage.setItem('imgSrcSmall1', activities[i].galerija);
      localStorage.setItem('imgSrcSmall2', activities[i].galerija2);
      localStorage.setItem('imgSrcSmall3', activities[i].galerija3);
      
      window.location.href = "activitysingle.html";
    });

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(descriptionElement);
    cardDiv.appendChild(readMoreLink);

    activitiesContainer.appendChild(cardDiv);
    setTimeout(() => {
      cardDiv.classList.add("loaded");
  }, 100);
  }
}
function showPreviousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    addActivityCardsToPage();
  }
}

function showNextSlide() {
  const maxSlide = Math.ceil(activities.length / activitiesPerPage) - 1;
  if (currentSlide < maxSlide) {
    currentSlide++;
    addActivityCardsToPage();
  }
}

prevBtn.addEventListener("click", showPreviousSlide);
nextBtn.addEventListener("click", showNextSlide);

window.addEventListener("load", addActivityCardsToPage);
