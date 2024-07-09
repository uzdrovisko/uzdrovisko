// Funkcja do wczytania wszystkich obrazów używanych jako tło
function preloadImages(images, callback) {
  let loadedImages = 0;

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      callback();
    }
  }

  images.forEach((image) => {
    const img = new Image();
    img.onload = imageLoaded;
    img.src = image;
  });
}





// Funkcja zmiany tła i tekstu nagłówka na podstawie indeksu
function changeBackgroundAndTitleByIndex(index) {
  const images = [
    'img/uzdrovisko9.webp',
    'img/uzdrovisko7.webp',
    'img/uzdrovisko57.webp',
  ];

  const titles = [
    'Pomożemy Ci znaleźć zdrowie',
    'Prowadzimy pacjentów<br>przez drogę do zdrowia',
    'Powrót do zdrowia to powrót<br>do życia w komforcie',
  ];

  if (index >= 0 && index < images.length) {
    const sectionTitle = document.querySelector('.section-title');
    
    // Ustawienie opacity na 0 (niewidoczny)
    sectionTitle.style.opacity = 0;

    // Po krótkim opóźnieniu zmieniamy treść nagłówka i przywracamy widoczność
    setTimeout(() => {
      // Zmiana treści nagłówka
      sectionTitle.innerHTML = titles[index];
      
      // Po krótkim opóźnieniu przywracamy widoczność z efektem płynności (fade-in)
      setTimeout(() => {
        sectionTitle.style.opacity = 1;
      }, 100); // Opóźnienie 100 ms (0.1 sekundy)
    }, 300); // Opóźnienie 300 ms (0.3 sekundy)

    // Zmiana tła
    document.querySelector('.background-container').style.backgroundImage = `url(${images[index]})`;

    // Aktualizacja paginacji
    updatePageIndicators(index);
  }
}

// Funkcja aktualizacji paginacji
function updatePageIndicators(index) {
  const pageIndicators = document.querySelectorAll('.page-indicator');
  pageIndicators.forEach((indicator, idx) => {
    indicator.classList.toggle('active', idx === index);
  });
}

// Funkcja zmiany tła i tekstu nagłówka z automatyczną zmianą co 7 sekund
function changeBackgroundAndTitleAutomatically() {
  let currentImageIndex = 0;
  const images = [
    'img/uzdrovisko9.webp',
    'img/uzdrovisko7.webp',
    'img/uzdrovisko57.webp',
  ];

  function setNextBackgroundAndTitle() {
    // Zmiana tła i tekstu nagłówka za pomocą indeksu
    changeBackgroundAndTitleByIndex(currentImageIndex);

    currentImageIndex = (currentImageIndex + 1) % images.length;
    setTimeout(setNextBackgroundAndTitle, 7000); // Zmiana co 7 sekund
  }

  setNextBackgroundAndTitle();
}

// Funkcja obsługi kliknięć w kropki paginacji
function setupPageIndicatorClickHandlers() {
  const pageIndicators = document.querySelectorAll('.page-indicator');
  pageIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => changeBackgroundAndTitleByIndex(index));
  });
}

// Funkcja wczytywania obrazów przed uruchomieniem zmiany tła i nagłówka
function preloadImagesAndStart() {
  const images = [
    'img/uzdrovisko9.webp',
    'img/uzdrovisko7.webp',
    'img/uzdrovisko57.webp',
  ];

  preloadImages(images, changeBackgroundAndTitleAutomatically);
  setupPageIndicatorClickHandlers();
}

// Wywołanie funkcji po załadowaniu strony i wczytaniu obrazów
window.addEventListener('load', preloadImagesAndStart);

















var currentMemberIndex = 0;
var teamMembers = document.getElementsByClassName('team-member');
var memberDescs = document.getElementsByClassName('member-desc');
var selectedMemberImg = document.getElementById('selected-member-img');

// Funkcja wyświetlająca dane wybranego członka zespołu
function showMember(index) {
  currentMemberIndex = index;

  for (var i = 0; i < teamMembers.length; i++) {
    teamMembers[i].classList.remove('active');
  }
  teamMembers[index].classList.add('active');

  for (var i = 0; i < memberDescs.length; i++) {
    memberDescs[i].style.display = 'none';
  }
  memberDescs[index].style.display = 'block';

  // Zmiana zdjęcia na inne
  var imagePath = 'img/worker' + (index + 1) + '.webp';
  selectedMemberImg.src = imagePath;
}

// Funkcja dla strzałki w lewo
function previousMember() {
  currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
  showMember(currentMemberIndex);
}

// Funkcja dla strzałki w prawo
function nextMember() {
  currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
  showMember(currentMemberIndex);
}

// Wyświetl domyślnego członka zespołu
showMember(currentMemberIndex);

  





function openImage(imageSrc) {
  var overlay = document.getElementById("overlay");
  var overlayImg = document.getElementById("overlay-img");
  
  overlayImg.src = imageSrc;
  overlay.classList.add("active");
}

function closeImage() {
  var overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520:{
      slidesPerView: 2
    },
    950: {
      slidesPerView: 3
    }
  }
});


// Rozwijane boxy //
var currentBox = null;

function toggleBox(boxIndex) {
  var box = document.getElementById('box' + boxIndex);
  var button = document.getElementsByClassName('custom-button')[boxIndex - 1];
  var arrow = button.querySelector('.custom-button-arrow');

  if (box.classList.contains('expanded')) {
    // Zamykanie boxa
    box.style.maxHeight = '0';
    button.classList.remove('custom-button-expanded');
    arrow.style.transform = 'rotate(0deg)';
    box.classList.remove('expanded');

    // Przywróć zaokrąglenie dolne przycisku
    button.style.borderBottomLeftRadius = '12px';
    button.style.borderBottomRightRadius = '12px';
  } else {
    // Zamykanie otwartego boxa, jeśli istnieje
    if (currentBox !== null && currentBox !== box) {
      currentBox.style.maxHeight = '0';
      currentBox.previousElementSibling.classList.remove('custom-button-expanded');
      currentBox.previousElementSibling.querySelector('.custom-button-arrow').style.transform = 'rotate(0deg)';
      currentBox.classList.remove('expanded');

      // Przywróć zaokrąglenie dolne poprzedniemu przyciskowi
      currentBox.previousElementSibling.style.borderBottomLeftRadius = '12px';
      currentBox.previousElementSibling.style.borderBottomRightRadius = '12px';
    }

    // Otwieranie aktualnego boxa
    box.style.maxHeight = box.scrollHeight + 'px';
    button.classList.add('custom-button-expanded');
    arrow.style.transform = 'rotate(180deg)';
    box.classList.add('expanded');
    currentBox = box;

    // Ukryj zaokrąglenie dolne przycisku
    button.style.borderBottomLeftRadius = '0';
    button.style.borderBottomRightRadius = '0';
  }
}


// Przerzucanie ogonków do nowej linijki //
        function lastSingleLetterToNewLine(el){
            let result;
            el.forEach((element, i)=>{
                
                if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
                result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp;");
                }
                element.innerHTML = result;
                console.log(result);
            });
            }

            let el = document.querySelectorAll("h1, h2, h3, h4, h5, p, span, .text");
            lastSingleLetterToNewLine(el);

            function scrollToSectionById(sectionId) {
              const section = document.getElementById(sectionId);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }
            
            function scrollToSection(event, sectionId) {
              event.preventDefault();
            
              const section = document.getElementById(sectionId);
              section.scrollIntoView({ behavior: 'smooth' });
            }
            



            

                        