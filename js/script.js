

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");
    const dashboardFrame = document.getElementById("dashboardFrame");

    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            const dashboardUrl = this.getAttribute("data-dashboard");
            dashboardFrame.src = dashboardUrl; // Atualiza o iframe com o link do dashboard
        });
    });
});
