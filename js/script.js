

//Collapses navbar-toggler when a link is clicked, sets link to start of section.
$(document).ready(function() {
    $(".navbar-nav a, .navbar-brand").click(function(event) {
        if (this.hash !== "") {  // Check if has a hash (ex: #about, #portfolio).
            event.preventDefault(); // Prevents browser behavior.

            var target = $(this.hash); // Select the target element by ID, ex: #about, #portfolio, etc.
            var navbarHeight = $(".navbar").outerHeight(); // Get height of navbar.

            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - navbarHeight // Adjust final position.
                }, 100); // animation duration (100ms).
            }

            // Close the navbar
            if ($(".navbar-toggler").is(":visible")) {
                $(".navbar-collapse").collapse('hide');
            }
        }
    });
});



//Modal function
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");
    const dashboardFrame = document.getElementById("dashboardFrame");

    if(!dashboardFrame){
        console.error("Elemento #DashboardFrame não encontrado");
        return;
    }

    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            const dashboardUrl = this.getAttribute("data-dashboard");
            if(dashboardUrl){
                dashboardFrame.src = dashboardUrl;
            } else{
                console.warn("URL do dashboard não definida");
            }
             
        });
    });
});



//Particles JS

document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "triangle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 3 }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }
      },
      "retina_detect": true
    });
});




