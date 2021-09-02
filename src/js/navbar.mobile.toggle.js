const navbarToggler = document.querySelectorAll(".navbar-toggle");
const countNavbar = navbarToggler.length;

let navbarToggle = (function () {
    for (let counter = 0; counter < countNavbar; counter++) {
        navbarToggler[counter].setAttribute("id", "nvbT" + (counter + 1));
        let navbarToggleMenu = document.querySelector(document.getElementById("nvbT" + (counter + 1)).getAttribute("data-toggle-menu"));
        let navbarToggleLogo = document.querySelector(document.getElementById("nvbT" + (counter + 1)).getAttribute("data-toggle-logo"));

        //adds function dropDownToggle for each button
        document.querySelector("#nvbT" + (counter + 1)).addEventListener("click", dropDownToggle);
        navbarToggler[counter].classList.add('center-y-by-pos');

        function dropDownToggle() {
            navbarToggleMenu.classList.toggle('navbar-active');
            navbarToggleLogo.classList.toggle('mb-1');
            navbarToggler[counter].classList.toggle('center-y-by-pos');
            navbarToggler[counter].classList.toggle('t-5');
        }
    }
}())
