
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.replace("fa-xmark", "fa-bars");
        }
    });
});
