/*Sidepanel*/
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/*Bottone per tornare su*/
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Transizione dolce*/
$(document).ready(function() {
    // Seleziona tutti i link interni che puntano a un'ancora
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      // Calcola la distanza dal target
      var offset = $(target).offset().top;
      // Aggiungi animazione di scorrimento verso l'ancora
      $('html, body').animate({ scrollTop: offset }, 800);
    });
  });

