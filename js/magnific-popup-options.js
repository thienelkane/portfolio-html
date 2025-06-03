$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.popup-image').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };
  
  // Call the functions 
  magnifPopup();

});


document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.getElementById("collapseOne_1");
    const preview = accordion.closest(".accordion-item").querySelector(".accordion-preview");

    accordion.addEventListener("show.bs.collapse", function () {
        if (preview) {
            preview.style.display = "none";
        }
    });

    accordion.addEventListener("hide.bs.collapse", function () {
        if (preview) {
            preview.style.display = "block";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.getElementById("collapseTwo_1");
    const preview = accordion.closest(".accordion-item").querySelector(".accordion-preview");

    accordion.addEventListener("show.bs.collapse", function () {
        if (preview) {
            preview.style.display = "none";
        }
    });

    accordion.addEventListener("hide.bs.collapse", function () {
        if (preview) {
            preview.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion-collapse");

    accordions.forEach((accordion) => {
        const preview = accordion.closest(".accordion-item").querySelector(".accordion-preview");

        accordion.addEventListener("show.bs.collapse", function () {
            if (preview) {
                preview.style.display = "none";
            }
        });

        accordion.addEventListener("hide.bs.collapse", function () {
            if (preview) {
                preview.style.display = "block";
            }
        });
    });
});

// ***************************************//
// i15next                                //
// ***************************************//


