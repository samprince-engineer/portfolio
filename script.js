const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show-menu");

        const menuIsOpen =
            navLinks.classList.contains("show-menu");

        menuButton.textContent = menuIsOpen ? "✕" : "☰";
    });

    const navItems =
        navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show-menu");
            menuButton.textContent = "☰";
        });
    });
}
