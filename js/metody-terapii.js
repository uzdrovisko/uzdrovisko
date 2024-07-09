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