

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


