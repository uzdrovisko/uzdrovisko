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


    if (document.querySelector('.slide-content')) {
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
    }

    document.addEventListener('DOMContentLoaded', function() {
      const dropdowns = document.querySelectorAll('.dropdown');
    
      dropdowns.forEach(dropdown => {
          const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
          const dropdownContent = dropdown.querySelector('.dropdown-content');
          const goBackButton = dropdown.querySelector('.go-back-button');
    
          function toggleDropdown(event) {
              event.stopPropagation();
              dropdownToggle.classList.toggle('active');
              dropdownContent.classList.toggle('active');
              if (dropdownContent.classList.contains('active')) {
                  dropdownContent.style.animation = 'fadeIn 0.3s ease-in-out forwards';
              } else {
                  dropdownContent.style.animation = '';
              }
          }
    
          function closeDropdown() {
              dropdownToggle.classList.remove('active');
              dropdownContent.classList.remove('active');
              dropdownContent.style.animation = '';
          }
    
          dropdownToggle.addEventListener('click', toggleDropdown);
          goBackButton.addEventListener('click', closeDropdown);
    
          // Close dropdown when clicking outside
          document.addEventListener('click', closeDropdown);
    
          // Prevent closing when clicking inside the dropdown content
          dropdownContent.addEventListener('click', event => {
              event.stopPropagation();
          });
      });
    });
    