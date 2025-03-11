

/*$(document).ready(function() {
    $(".nav-item").click(function(){
        $(".collapse").collapse('hide');
    });
});*/


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


