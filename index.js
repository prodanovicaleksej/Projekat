import events from "./json.js";

function generateEventCard(event) {
  return `
    <div class="event-card">
      <img src="${event.img}" alt="${event.name}">
      <h2>${event.name}</h2>
      <p><strong></strong> ${event.city}</p>
      <p class="event-location" style="display: none;"><strong></strong> ${event.location}</p>
      <p class="event-time"><strong>Datum:</strong> ${event.date}, ${event.day}</p>
      <p ><strong>Vreme:</strong> ${event.hours}</p>
      <p style="display: none;" class="cijena"><strong>Entry:</strong> ${event.entry}</p>
      <p style="display: none;" class="reservation"><strong></strong> ${event.reservation}</p>
      <button class="read-more">Read more >></button>
    </div>
  `;
}

function onReadMoreButtonClick(event) {
  const button = event.target;
  if (button.classList.contains("read-more")) {
    const eventCard = button.closest(".event-card");
    const eventLocation = eventCard.querySelector(".event-location").textContent;
    const eventEntry = eventCard.querySelector(".cijena").textContent;
    const eventImageSrc = eventCard.querySelector("img").src;
    const eventTime = eventCard.querySelector(".event-time").textContent;
    const eventReserve = eventCard.querySelector(".reservation").textContent;

    document.getElementById("popup-image").src = eventImageSrc;
    document.getElementById("popup-text").innerHTML = `<p class="ulaz">${eventEntry}</p>
    <p class="lokacija"><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14 s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"></path> <path fill="#231F20" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"></path> </g> </g></svg>${eventLocation}</p>
    <p class="datum"><svg viewBox="0 0 24 24" width="16px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="1.44" stroke-linecap="round"></path> </g></svg>${eventTime}</p>
    <p class="rezervacija">${eventReserve}</p>`;
    document.getElementById("popup-overlay").style.display = "flex";
  }
}

function onClosePopupButtonClick() {
  document.getElementById("popup-overlay").style.display = "none";
}

document.addEventListener("click", onReadMoreButtonClick);

document.getElementById("close-popup-btn").addEventListener("click", onClosePopupButtonClick);

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" || event.code === "Escape") {
    onClosePopupButtonClick();
  }
});

const eventsPerPage = 3;
let eventsDisplayed = 0;

function loadMoreEvents() {
  const eventsContainer = document.getElementById("events-container");

  events.slice(eventsDisplayed, eventsDisplayed + eventsPerPage).forEach((event) => {
      const eventCardHTML = generateEventCard(event);
      eventsContainer.innerHTML += eventCardHTML;
    });

  eventsDisplayed += eventsPerPage;

  if (eventsDisplayed >= events.length) {
    document.getElementById("load-more-btn").style.display = "none";
  }
}

document
  .getElementById("load-more-btn")
  .addEventListener("click", loadMoreEvents);

loadMoreEvents();

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
    document.querySelector(".contact-overlay").style.display= 'none';

  }
});

document.querySelector('.forma').addEventListener('submit', function(event) {
  event.preventDefault(); 
  document.getElementById('success-message').style.display = 'block';
  document.querySelector(".contact-text").style.display = 'none';
  
  this.reset();
});

document.querySelector(".contact-ok").addEventListener("click",function(){
  document.getElementById('sticky-button').click()})

document
  .getElementById("search")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const searchQuery = this.value.toLowerCase().trim();

      const filteredEvents = events.filter((event) => {
        return (
          event.city.toLowerCase().includes(searchQuery) ||
          event.name.toLowerCase().includes(searchQuery) ||
          event.music_performer.toLowerCase().includes(searchQuery) ||
          event.type_of_music.toLowerCase().includes(searchQuery)
        );
      });

      const eventsContainer = document.getElementById("events-container");
      eventsContainer.innerHTML = "";
      filteredEvents.forEach((event) => {
        const eventCardHTML = generateEventCard(event);
        eventsContainer.innerHTML += eventCardHTML;
      });

      const eventsSection = document.getElementById("events-container");
      const targetPosition = eventsSection.offsetTop - 100; 

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });

document
  .querySelector(".btn-scroll-to1")
  .addEventListener("click", function () {
    document.querySelector("#events-container").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .querySelector(".btn-scroll-to2")
  .addEventListener("click", function () {
    const activitiesContainer = document.querySelector(".activities-container");
    const targetPosition = activitiesContainer.offsetTop - 100; 

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", 
    });
  });

  const delay = 15000;
const animationDuration = 5;

function startTextAnimation() {
  const title = document.querySelector(".naslov");
  title.style.animation = `reveal ${animationDuration}s forwards`; 
}

setTimeout(startTextAnimation, delay);

window.addEventListener("load", function () {
  const title = document.querySelector(".naslov");
  title.style.animation = `reveal ${animationDuration}s forwards`; 
});