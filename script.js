const sidebar = document.querySelector(".sidebar");
const services = document.querySelectorAll("button");

function showsidebar() {
    sidebar.style.display = "block";
}

function hidebar() {
    sidebar.style.display = "none";
}

services.forEach((service) => {
    service.addEventListener("click", () => {
        window.location.href = "#services";
    })
})
